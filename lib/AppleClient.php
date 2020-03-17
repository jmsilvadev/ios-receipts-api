<?php

namespace Busuu\IosReceiptsApi;

use Exception;
use GuzzleHttp\Client;
use GuzzleHttp\ClientInterface;

class AppleClient
{
    /** @var  Client $client */
    private $client;
    /** @var  string */
    private $password;


    /**
     * AppleClient constructor.
     * @param string $password
     * @param ClientInterface $client
     * @return void
     */
    public function __construct($password, ClientInterface $client = null)
    {
        $this->client = $client ?? new Client();
        $this->password = $password;
    }

    /**
     * Fetch the receipt from apple
     *
     * @param $receiptData
     * @param $endpoint
     *
     * @return array
     * @throws Exception
     */
    public function fetchReceipt($receiptData, $endpoint)
    {
        $data = [
            'password' => $this->password,
            'receipt-data' => $receiptData
        ];

        $response = $this->client->post(
            $endpoint,
            [
                'body' => json_encode($data),
                'timeout' => 20
            ]
        );

        $jsonResponse = json_decode($response->getBody(), true);

        if (null !== $jsonResponse) {
            return $jsonResponse;
        }

        throw new Exception(
            sprintf('Invalid Response from Apple Server: %s', $response->getBody())
        );
    }
}
