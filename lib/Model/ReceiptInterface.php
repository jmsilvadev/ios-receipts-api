<?php

namespace Busuu\IosReceiptsApi\Model;



interface ReceiptInterface
{
    public function getQuantity();
    public function setQuantity($quantity);
    public function getProductId();
    public function setProductId($productId);
    public function getTransactionId();
    public function setTransactionId($transactionId);
    public function getOriginalTransactionId();
    public function setOriginalTransactionId($originalTransactionId);
    public function getPurchaseDate();
    public function setPurchaseDate($purchaseDate);
    public function getPurchaseDateMs();
    public function setPurchaseDateMs($purchaseDateMs);
    public function getPurchaseDatePst();
    public function setPurchaseDatePst($purchaseDatePst);
    public function getOriginalPurchaseDate();
    public function setOriginalPurchaseDate($originalPurchaseDate);
    public function getOriginalPurchaseDateMs();
    public function setOriginalPurchaseDateMs($originalPurchaseDateMs);
    public function getOriginalPurchaseDatePst();
    public function setOriginalPurchaseDatePst($originalPurchaseDatePst);
    public function getExpiresDate();
    public function setExpiresDate($expiresDate);
    public function getExpiresDateMs();
    public function setExpiresDateMs($expiresDateMs);
    public function getExpiresDatePst();
    public function setExpiresDatePst($expiresDatePst);
    public function getWebOrderLineItemId();
    public function setWebOrderLineItemId($webOrderLineItemId);
    public function getIsTrialPeriod();
    public function setIsTrialPeriod($isTrialPeriod);
    public function getCancellationDateMs();
    public function setCancellationDateMs($cancellationDateMs);
    public function getPromotionalOfferId();
    public function setPromotionalOfferId($promotionalOfferId);
    public function toArray();
}
