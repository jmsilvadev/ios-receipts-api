<?php


namespace Busuu\IosReceiptsApi\Tests;

use Busuu\IosReceiptsApi\AppleClient;
use Busuu\IosReceiptsApi\Model\AppStoreReceipt;
use Busuu\IosReceiptsApi\ReceiptService;
use Busuu\IosReceiptsApi\ValidatorService;
use Mockery\MockInterface;
use Tests\Helper\AppleHelper;

class AppStoreReceiptTest extends \PHPUnit_Framework_TestCase
{
    /** @var  ReceiptService */
    private $receiptService;

    /** @var  MockInterface */
    private $appleClient;
    /** @var  MockInterface */
    private $validatorService;

    public function setup()
    {
        $this->appleClient = \Mockery::mock(AppleClient::class);
        $this->validatorService = \Mockery::mock(ValidatorService::class);
        $this->receiptService = new ReceiptService($this->appleClient, $this->validatorService, ReceiptService::PRODUCTION_ENVIRONMENT);
    }

    public function testGetters()
    {
        $helper = new AppleHelper();
        $fullReceipt = $helper->getStoreReceiptLatestSubscriptionIsCancelled();
        $result = $this->receiptService->getLastPurchaseFromFullReceipt($fullReceipt);

        $this->assertInstanceOf(AppStoreReceipt::class, $result);

        //Checking for the latest receipt details as within $fullReceipt.
        $this->assertEquals('com.busuu.app.subs12month.50_discount_sep_16', $result->getProductId());
        $this->assertEquals('710000330793142', $result->getOriginalTransactionId());
        $this->assertEquals('1568800595000', $result->getExpiresDateMs());
        $this->assertEquals('1537264595000', $result->getPurchaseDateMs());
        $this->assertNull($result->getCancellationDateMs());
        $this->assertEquals('710000330793142', $result->getTransactionId());
        $this->assertEquals('2018-09-18 09:56:35 Etc/GMT', $result->getPurchaseDate());
        $this->assertEquals('2018-09-18 02:56:35 America/Los_Angeles', $result->getPurchaseDatePst());
        $this->assertEquals('2018-09-18 09:56:36 Etc/GMT', $result->getOriginalPurchaseDate());
        $this->assertEquals('1537264596000', $result->getOriginalPurchaseDateMs());
        $this->assertEquals('2018-09-18 02:56:36 America/Los_Angeles', $result->getOriginalPurchaseDatePst());
        $this->assertEquals('2019-09-18 09:56:35 Etc/GMT', $result->getExpiresDate());
        $this->assertEquals('2019-09-18 02:56:35 America/Los_Angeles', $result->getExpiresDatePst());
        $this->assertEquals('710000087751357', $result->getWebOrderLineItemId());
        $this->assertEquals('false', $result->getIsTrialPeriod());
        $this->assertNull($result-> getPromotionalOfferId());
        $this->assertEquals('1', $result->getQuantity());
        $this->assertArrayHasKey('quantity', $result->toArray());
    }
}