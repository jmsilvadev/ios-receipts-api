<?php


namespace Busuu\IosReceiptsApi\Tests;

use Busuu\IosReceiptsApi\AppleClient;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\ClientException;
use GuzzleHttp\Handler\MockHandler;
use GuzzleHttp\HandlerStack;
use GuzzleHttp\Psr7\Response;
use GuzzleHttp\Exception\RequestException;
use GuzzleHttp\Psr7\Request;
use Mockery\MockInterface;
use Mockery as m;
use Exception;

class AppleClientTest extends \PHPUnit_Framework_TestCase
{

    public $http;
    public $mock;

    public function setUp(): void
    {
        parent::setUp();
        $this->mock = new MockHandler();
        $handlerStack = HandlerStack::create($this->mock);
        $this->http = new Client(['handler' => $handlerStack]);
    }

    public function testSuccessFetchReceipt()
    {

        $this->mock->reset();
        $postResponse = [
            'status_code' => 200,
            'data' => 'ok'
        ];
        $this->mock->append(new Response(200, [], json_encode($postResponse)));

        $appleClient = new AppleClient('12345', $this->http);
        
        $endpoint = '/';
        
        $data = [
            'success' => true,
        ];

        $result = $appleClient->fetchReceipt($data, $endpoint);
        $this->assertEquals($result['data'], 'ok');

    }

    public function testThrowFetchReceipt()
    {

        $this->mock->reset();
        $this->mock->append(new Response(200, [], null));

        $appleClient = new AppleClient('12345', $this->http);
        
        $endpoint = '/';
        
        $data = [
            'success' => true,
        ];

        try {
            $result = $appleClient->fetchReceipt($data, $endpoint);
        } catch(\Exception $e) {
            $this->assertInstanceOf(Exception::class, $e);
            $this->assertEquals('Invalid Response from Apple Server: ', $e->getMessage());
        }
    }
}