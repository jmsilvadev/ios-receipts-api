<?php

namespace Busuu\IosReceiptsApi;

use Busuu\IosReceiptsApi\Model\AppStoreReceipt;
use Busuu\IosReceiptsApi\Model\ReceiptInterface;

class ReceiptService
{
    const PRODUCTION_ENVIRONMENT = 'production';
    const SANDBOX_ENVIRONMENT = 'sandbox';

    private $environment;
    private $productionEndpoint = 'https://buy.itunes.apple.com/verifyReceipt';
    private $sandboxEndpoint = 'https://sandbox.itunes.apple.com/verifyReceipt';
    /** @var  AppleClient $appleClient */
    private $appleClient;
    /** @var  ValidatorService $validatorService */
    private $validatorService;
    /** @var  string base64-encoded receipt data */
    private $receiptData;
    /** @var array raw receipt received from the App store */
    private $receipt;

    /**
     * ReceiptService constructor.
     * @param AppleClient $appleClient
     * @param ValidatorService $validatorService
     * @param string $environment
     */
    public function __construct(
        AppleClient $appleClient,
        ValidatorService $validatorService,
        $environment = self::PRODUCTION_ENVIRONMENT
    ) {
        $this->appleClient = $appleClient;
        $this->validatorService = $validatorService;
        $this->environment = $environment;
    }

    /**
     * @param string $receiptData
     * @return self
     */
    public function setReceiptData($receiptData)
    {
        $this->receiptData = $receiptData;
        return $this;
    }

    /**
     * Get array containing the full response from the App store
     *
     * @return array
     */
    public function getFullReceipt()
    {
        return $this->getReceipt();
    }

    /**
     * Get AppStoreReceipt object with the last purchase made for the user
     *
     * @return AppStoreReceipt|null
     * @throws \Exception
     */
    public function getLastPurchase()
    {
        return $this->filterLastReceipt($this->getReceipt());
    }

    /**
     * Get the last purchase made for the user from a given full App Store receipt.
     *
     * @param array $fullReceipt
     *
     * @return AppStoreReceipt|null
     */
    public function getLastPurchaseFromFullReceipt(array $fullReceipt)
    {
        return $this->filterLastReceipt($fullReceipt);
    }

    /**
     * Method to choose the apple environment that we have to call
     *
     * @return string
     */
    private function getAppleEndpoint()
    {
        $endpoints = [
            self::PRODUCTION_ENVIRONMENT => $this->productionEndpoint,
            self::SANDBOX_ENVIRONMENT => $this->sandboxEndpoint,
        ];

        if (array_key_exists($this->environment, $endpoints)) {
            return $endpoints[$this->environment];
        }

        throw new \InvalidArgumentException('Invalid environment');
    }

    /**
     * Get receipt data from store
     * @return array
     * @throws \Exception
     */
    private function getReceipt()
    {
        if (!empty($this->receipt)) {
            return $this->receipt;
        }

        if (!$this->receiptData) {
            throw new \Exception('Receipt data not initialized on receipt service');
        }

        // Fetch the receipt from production store
        $appleEndpoint = $this->getAppleEndpoint();
        $this->receipt = $this->appleClient->fetchReceipt($this->receiptData, $appleEndpoint);
        $status = $this->validatorService->validateReceipt($this->receipt);

        return $this->checkReceivedStatus($status);
    }

    /**
     * Get the latest receipt from the store response and wrap it in a StoreReceipt object
     *
     * @param array $userReceipt
     * @return AppStoreReceipt|null
     */
    private function filterLastReceipt(array $userReceipt)
    {
        // The user does not have any purchase
        if (empty($userReceipt['receipt']['in_app']) && empty($userReceipt['latest_receipt_info'])) {
            return null;
        }

        /**
         * Only returned for receipts containing auto-renewable subscriptions.
         * For iOS 6 style transaction receipts, this is the JSON representation
         * of the receipt for the most recent renewal.
         * For iOS 7 style app receipts, the value of this key is an array containing
         * all in-app purchase transactions.
         * This excludes transactions for a consumable product that have been marked
         * as finished by your app.
         * @see https://developer.apple.com/library/archive/releasenotes/General/ValidateAppStoreReceipt/Chapters/ValidateRemotely.html
         */
        $latestReceiptInfo = empty($userReceipt['latest_receipt_info']) ? [] : $userReceipt['latest_receipt_info'];
        /**
         * In the JSON file, the value of this key is an array containing all in-app purchase receipts
         * based on the in-app purchase transactions present in the input base-64 receipt-data.
         * For receipts containing auto-renewable subscriptions, check the value of the latest_receipt_info
         * key to get the status of the most recent renewal.
         * @see https://developer.apple.com/library/archive/releasenotes/General/ValidateAppStoreReceipt/Chapters/ReceiptFields.html#//apple_ref/doc/uid/TP40010573-CH106-SW1
         */
        $receiptInApp = empty($userReceipt['receipt']['in_app']) ? [] : $userReceipt['receipt']['in_app'];
        $purchasesLists = array_merge($latestReceiptInfo, $receiptInApp);
        
        $latestReceiptData = $this->searchLatestPurchase($purchasesLists);

        if (empty($latestReceiptData)) {
            return null;
        }

        return $this->createAppStoreReceipt($latestReceiptData);
    }

    /**
     * check if the user cancel the subscription
     *
     * @param AppStoreReceipt $receipt
     * @return bool
     */
    public function isCancelled(AppStoreReceipt $receipt)
    {
        return !empty($receipt->getCancellationDateMs()) ? true : false;
    }

    /**
     * Returns either the latest uncancelled purchase if it exists, or the latest purchase of any status.
     *
     * @param array $purchasesList
     * @return array|null
     */
    private function searchLatestPurchase(array $purchasesList)
    {
        if (empty($purchasesList)) {
            return null;
        }

        usort($purchasesList, [$this, 'compareReceipts']);

        return $purchasesList[0];
    }

    /**
     * Returns 1 if $a should be ranked lower than $b, else -1.
     * If one of $a or $b is cancelled use this as a criteria, else use purchase date
     *
     * @param array $a
     * @param array $b
     * @return int
     */
    private function compareReceipts(array $a, array $b)
    {
        if (isset($a['cancellation_date_ms']) && !isset($b['cancellation_date_ms'])) {
            return 1;
        }
        
        if (isset($b['cancellation_date_ms']) && !isset($a['cancellation_date_ms'])) {
            return -1;
        }
        
        if ($a['purchase_date_ms'] > $b['purchase_date_ms']) {
            return -1;
        }
        
        return 1;
    }

    /**
     * Create an AppStoreReceipt object from a single purchase returned by the App store
     *
     * @param array $storePurchase
     * @return AppStoreReceipt|null
     */
    public function createAppStoreReceipt(array $storePurchase, ReceiptInterface $appleStoreReceipt = null)
    {
        if (empty($storePurchase)) {
            return null;
        }

        $receipt = $appleStoreReceipt ?? new AppStoreReceipt();

        // web_order_line_item_id key is defined as mandatory by apple documentation but sometime is not returned.
        // cancellation_date_ms is returned just if the user cancel the subscription an was refund immediately
        // purchase_date_pst just discovered that some times isn't coming either
        // expires_at, expires_date_pst + expires_date_ms not always present (older purchases)
        $nullableFields = [
            'web_order_line_item_id',
            'cancellation_date_ms',
            'purchase_date_pst',
            'expires_date',
            'expires_date_pst',
            'expires_date_ms',
            'promotional_offer_id',
        ];

        foreach ($nullableFields as $nullableField) {
            $storePurchase[$nullableField] = !empty($storePurchase[$nullableField]) ?
                $storePurchase[$nullableField] :
                null;
        }

        $receipt->setQuantity($storePurchase['quantity'])
            ->setProductId($storePurchase['product_id'])
            ->setTransactionId($storePurchase['transaction_id'])
            ->setOriginalTransactionId($storePurchase['original_transaction_id'])
            ->setPurchaseDate($storePurchase['purchase_date'])
            ->setPurchaseDateMs($storePurchase['purchase_date_ms'])
            ->setPurchaseDatePst($storePurchase['purchase_date_pst'])
            ->setOriginalPurchaseDate($storePurchase['original_purchase_date'])
            ->setOriginalPurchaseDateMs($storePurchase['original_purchase_date_ms'])
            ->setOriginalPurchaseDatePst($storePurchase['original_purchase_date_pst'])
            ->setExpiresDate($storePurchase['expires_date'])
            ->setExpiresDateMs($storePurchase['expires_date_ms'])
            ->setExpiresDatePst($storePurchase['expires_date_pst'])
            ->setWebOrderLineItemId($storePurchase['web_order_line_item_id'])
            ->setIsTrialPeriod($storePurchase['is_trial_period'])
            ->setCancellationDateMs($storePurchase['cancellation_date_ms'])
            ->setPromotionalOfferId($storePurchase['promotional_offer_id'])
        ;

        return $receipt;
    }

    /**
     * Checks if the received status is from the sandbox or if an error in production environment
     * in this cases treat that
     *
     * @param string $status
     * @return array $this->$receipt
     */
    private function checkReceivedStatus($status)
    {

        /**
         * As per Apple's advice, receipts should be first send to production environment,
         * and if the "sandbox" response code is received, they should then sent to sandbox.
         * This means that no configuration change is necessary for working in either environment.
         */

        $environments = [
            ValidatorService::SANDBOX_REQUEST_RESPONSE => self::SANDBOX_ENVIRONMENT,
            ValidatorService::PRODUCTION_ENVIRONMENT_ERROR_CODE => self::PRODUCTION_ENVIRONMENT,
        ];

        if (array_key_exists($status, $environments)) {
            $this->environment = $environments[$status];
            $appleEndpoint = $this->getAppleEndpoint();
            $this->receipt = $this->appleClient->fetchReceipt($this->receiptData, $appleEndpoint);
            $this->validatorService->validateReceipt($this->receipt);
            $this->environment = self::PRODUCTION_ENVIRONMENT;
        }

        return $this->receipt;
    }
}
