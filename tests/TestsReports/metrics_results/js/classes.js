var classes = [
    {
        "name": "Busuu\\IosReceiptsApi\\ReceiptService",
        "interface": false,
        "abstract": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setReceiptData",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFullReceipt",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getLastPurchase",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getLastPurchaseFromFullReceipt",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getAppleEndpoint",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getReceipt",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "filterLastReceipt",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isCancelled",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "searchLatestPurchase",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "compareReceipts",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createAppStoreReceipt",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "checkReceivedStatus",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 13,
        "nbMethods": 12,
        "nbMethodsPrivate": 6,
        "nbMethodsPublic": 6,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 1,
        "wmc": 33,
        "ccn": 21,
        "ccnMethodMax": 6,
        "externals": [
            "Busuu\\IosReceiptsApi\\AppleClient",
            "Busuu\\IosReceiptsApi\\ValidatorService",
            "InvalidArgumentException",
            "Exception",
            "Busuu\\IosReceiptsApi\\Model\\AppStoreReceipt",
            "Busuu\\IosReceiptsApi\\Model\\ReceiptInterface",
            "Busuu\\IosReceiptsApi\\Model\\AppStoreReceipt"
        ],
        "parents": [],
        "lcom": 3,
        "length": 230,
        "vocabulary": 57,
        "volume": 1341.56,
        "difficulty": 10.24,
        "effort": 13731.31,
        "level": 0.1,
        "bugs": 0.45,
        "time": 763,
        "intelligentContent": 131.07,
        "number_operators": 56,
        "number_operands": 174,
        "number_operators_unique": 6,
        "number_operands_unique": 51,
        "cloc": 109,
        "loc": 230,
        "lloc": 121,
        "mi": 73.62,
        "mIwoC": 29.84,
        "commentWeight": 43.78,
        "kanDefect": 1.15,
        "relativeStructuralComplexity": 676,
        "relativeDataComplexity": 0.78,
        "relativeSystemComplexity": 676.78,
        "totalStructuralComplexity": 8788,
        "totalDataComplexity": 10.11,
        "totalSystemComplexity": 8798.11,
        "package": "Busuu\\IosReceiptsApi\\",
        "pageRank": 0.08,
        "afferentCoupling": 1,
        "efferentCoupling": 6,
        "instability": 0.86,
        "violations": {}
    },
    {
        "name": "Busuu\\IosReceiptsApi\\ValidatorService",
        "interface": false,
        "abstract": false,
        "methods": [
            {
                "name": "validateReceipt",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getResponse",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "sendThrow",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 3,
        "nbMethodsPrivate": 2,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 6,
        "ccn": 4,
        "ccnMethodMax": 2,
        "externals": [
            "Busuu\\IosReceiptsApi\\Exception\\InvalidReceiptException",
            "throws",
            "Busuu\\IosReceiptsApi\\Exception\\InvalidReceiptException"
        ],
        "parents": [],
        "lcom": 1,
        "length": 63,
        "vocabulary": 32,
        "volume": 315,
        "difficulty": 2.9,
        "effort": 912.41,
        "level": 0.35,
        "bugs": 0.11,
        "time": 51,
        "intelligentContent": 108.75,
        "number_operators": 7,
        "number_operands": 56,
        "number_operators_unique": 3,
        "number_operands_unique": 29,
        "cloc": 58,
        "loc": 99,
        "lloc": 41,
        "mi": 93.13,
        "mIwoC": 46.79,
        "commentWeight": 46.34,
        "kanDefect": 0.36,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 1,
        "relativeSystemComplexity": 5,
        "totalStructuralComplexity": 12,
        "totalDataComplexity": 3,
        "totalSystemComplexity": 15,
        "package": "Busuu\\IosReceiptsApi\\",
        "pageRank": 0.1,
        "afferentCoupling": 2,
        "efferentCoupling": 2,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "Busuu\\IosReceiptsApi\\Model\\AppStoreReceipt",
        "interface": false,
        "abstract": false,
        "methods": [
            {
                "name": "getQuantity",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setQuantity",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getProductId",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setProductId",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getTransactionId",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setTransactionId",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getOriginalTransactionId",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setOriginalTransactionId",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPurchaseDate",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setPurchaseDate",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPurchaseDateMs",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setPurchaseDateMs",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPurchaseDatePst",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setPurchaseDatePst",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getOriginalPurchaseDate",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setOriginalPurchaseDate",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getOriginalPurchaseDateMs",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setOriginalPurchaseDateMs",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getOriginalPurchaseDatePst",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setOriginalPurchaseDatePst",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getExpiresDate",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setExpiresDate",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getExpiresDateMs",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setExpiresDateMs",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getExpiresDatePst",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setExpiresDatePst",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getWebOrderLineItemId",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setWebOrderLineItemId",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getIsTrialPeriod",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setIsTrialPeriod",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCancellationDateMs",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setCancellationDateMs",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPromotionalOfferId",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setPromotionalOfferId",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toArray",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 35,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 17,
        "nbMethodsSetters": 17,
        "wmc": 35,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Busuu\\IosReceiptsApi\\Model\\ReceiptInterface"
        ],
        "parents": [],
        "lcom": 1,
        "length": 169,
        "vocabulary": 20,
        "volume": 730.41,
        "difficulty": 6.5,
        "effort": 4747.64,
        "level": 0.15,
        "bugs": 0.24,
        "time": 264,
        "intelligentContent": 112.37,
        "number_operators": 52,
        "number_operands": 117,
        "number_operators_unique": 2,
        "number_operands_unique": 18,
        "cloc": 125,
        "loc": 303,
        "lloc": 178,
        "mi": 72.66,
        "mIwoC": 30.72,
        "commentWeight": 41.94,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 256,
        "relativeDataComplexity": 2.09,
        "relativeSystemComplexity": 258.09,
        "totalStructuralComplexity": 8960,
        "totalDataComplexity": 73.06,
        "totalSystemComplexity": 9033.06,
        "package": "Busuu\\IosReceiptsApi\\Model\\",
        "pageRank": 0.09,
        "afferentCoupling": 1,
        "efferentCoupling": 1,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "Busuu\\IosReceiptsApi\\Exception\\InvalidReceiptException",
        "interface": false,
        "abstract": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "Exception"
        ],
        "parents": [
            "Exception"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 0,
        "loc": 4,
        "lloc": 4,
        "mi": 171,
        "mIwoC": 171,
        "commentWeight": 0,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "Busuu\\IosReceiptsApi\\Exception\\",
        "pageRank": 0.28,
        "afferentCoupling": 2,
        "efferentCoupling": 1,
        "instability": 0.33,
        "violations": {}
    },
    {
        "name": "Busuu\\IosReceiptsApi\\Exception\\UnauthorizedReceiptException",
        "interface": false,
        "abstract": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "Busuu\\IosReceiptsApi\\Exception\\InvalidReceiptException"
        ],
        "parents": [
            "Busuu\\IosReceiptsApi\\Exception\\InvalidReceiptException"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 0,
        "loc": 4,
        "lloc": 4,
        "mi": 171,
        "mIwoC": 171,
        "commentWeight": 0,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "Busuu\\IosReceiptsApi\\Exception\\",
        "pageRank": 0.05,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Busuu\\IosReceiptsApi\\Factory\\ReceiptServiceFactory",
        "interface": false,
        "abstract": false,
        "methods": [
            {
                "name": "createReceiptService",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Busuu\\IosReceiptsApi\\AppleClient",
            "Busuu\\IosReceiptsApi\\ValidatorService",
            "Busuu\\IosReceiptsApi\\ReceiptService"
        ],
        "parents": [],
        "lcom": 1,
        "length": 11,
        "vocabulary": 6,
        "volume": 28.43,
        "difficulty": 2,
        "effort": 56.87,
        "level": 0.5,
        "bugs": 0.01,
        "time": 3,
        "intelligentContent": 14.22,
        "number_operators": 3,
        "number_operands": 8,
        "number_operators_unique": 2,
        "number_operands_unique": 4,
        "cloc": 7,
        "loc": 17,
        "lloc": 10,
        "mi": 109.79,
        "mIwoC": 67.87,
        "commentWeight": 41.91,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 3,
        "relativeSystemComplexity": 3,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 3,
        "totalSystemComplexity": 3,
        "package": "Busuu\\IosReceiptsApi\\Factory\\",
        "pageRank": 0.05,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Busuu\\IosReceiptsApi\\AppleClient",
        "interface": false,
        "abstract": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fetchReceipt",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 4,
        "ccn": 3,
        "ccnMethodMax": 2,
        "externals": [
            "GuzzleHttp\\ClientInterface",
            "GuzzleHttp\\Client",
            "Exception"
        ],
        "parents": [],
        "lcom": 1,
        "length": 35,
        "vocabulary": 18,
        "volume": 145.95,
        "difficulty": 5,
        "effort": 729.74,
        "level": 0.2,
        "bugs": 0.05,
        "time": 41,
        "intelligentContent": 29.19,
        "number_operators": 9,
        "number_operands": 26,
        "number_operators_unique": 5,
        "number_operands_unique": 13,
        "cloc": 17,
        "loc": 38,
        "lloc": 21,
        "mi": 98.62,
        "mIwoC": 55.6,
        "commentWeight": 43.02,
        "kanDefect": 0.22,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 1,
        "relativeSystemComplexity": 5,
        "totalStructuralComplexity": 8,
        "totalDataComplexity": 2,
        "totalSystemComplexity": 10,
        "package": "Busuu\\IosReceiptsApi\\",
        "pageRank": 0.1,
        "afferentCoupling": 2,
        "efferentCoupling": 3,
        "instability": 0.6,
        "violations": {}
    }
]