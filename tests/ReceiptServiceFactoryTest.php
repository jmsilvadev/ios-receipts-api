<?php
namespace Busuu\IosReceiptsApi\Tests;

use Busuu\IosReceiptsApi\ReceiptService;

class ReceiptServiceFactoryTest extends \PHPUnit_Framework_TestCase
{

    public function testWithouCreateReceiptService()
    {
        $client = \Busuu\IosReceiptsApi\Factory\ReceiptServiceFactory::createReceiptService('your_apple_shared_secret');
        $this->assertInstanceOf(ReceiptService::class, $client);
    }
}