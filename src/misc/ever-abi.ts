export class MultiVault {
    static AlienProxy = {
        'ABI version': 2,
        version: '2.2',
        header: ['pubkey', 'time', 'expire'],
        functions: [
            {
                name: 'constructor',
                inputs: [{name: 'owner_', type: 'address'}],
                outputs: [],
            },
            {
                name: 'apiVersion',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [{name: 'value0', type: 'uint8'}],
            },
            {
                name: 'onAcceptTokensBurn',
                inputs: [
                    {name: 'amount', type: 'uint128'},
                    {name: 'value1', type: 'address'},
                    {name: 'value2', type: 'address'},
                    {name: 'remainingGasTo', type: 'address'},
                    {name: 'payload', type: 'cell'},
                ],
                outputs: [],
            },
            {
                name: 'onEventConfirmedExtended',
                inputs: [
                    {
                        components: [
                            {
                                components: [
                                    {name: 'eventTransaction', type: 'uint256'},
                                    {name: 'eventIndex', type: 'uint32'},
                                    {name: 'eventData', type: 'cell'},
                                    {name: 'eventBlockNumber', type: 'uint32'},
                                    {name: 'eventBlock', type: 'uint256'},
                                ],
                                name: 'voteData',
                                type: 'tuple',
                            },
                            {name: 'configuration', type: 'address'},
                            {name: 'staking', type: 'address'},
                            {name: 'chainId', type: 'uint32'},
                        ],
                        name: 'value0',
                        type: 'tuple',
                    },
                    {name: 'meta', type: 'cell'},
                    {name: 'remainingGasTo', type: 'address'},
                ],
                outputs: [],
            },
            {
                name: 'deriveAlienTokenRoot',
                inputs: [
                    {name: 'answerId', type: 'uint32'},
                    {name: 'chainId', type: 'uint256'},
                    {name: 'token', type: 'uint160'},
                    {name: 'name', type: 'string'},
                    {name: 'symbol', type: 'string'},
                    {name: 'decimals', type: 'uint8'},
                ],
                outputs: [{name: 'value0', type: 'address'}],
            },
            {
                name: 'deployAlienToken',
                inputs: [
                    {name: 'chainId', type: 'uint256'},
                    {name: 'token', type: 'uint160'},
                    {name: 'name', type: 'string'},
                    {name: 'symbol', type: 'string'},
                    {name: 'decimals', type: 'uint8'},
                    {name: 'remainingGasTo', type: 'address'},
                ],
                outputs: [],
            },
            {
                name: 'sendMessage',
                inputs: [
                    {name: 'recipient', type: 'address'},
                    {name: 'message', type: 'cell'},
                ],
                outputs: [],
            },
            {
                name: 'getConfiguration',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [
                    {
                        components: [
                            {name: 'everscaleConfiguration', type: 'address'},
                            {name: 'evmConfigurations', type: 'address[]'},
                            {name: 'deployWalletValue', type: 'uint128'},
                            {name: 'alienTokenRootCode', type: 'cell'},
                            {name: 'alienTokenWalletCode', type: 'cell'},
                            {name: 'alienTokenWalletPlatformCode', type: 'cell'},
                        ],
                        name: 'value0',
                        type: 'tuple',
                    },
                ],
            },
            {
                name: 'setConfiguration',
                inputs: [
                    {
                        components: [
                            {name: 'everscaleConfiguration', type: 'address'},
                            {name: 'evmConfigurations', type: 'address[]'},
                            {name: 'deployWalletValue', type: 'uint128'},
                            {name: 'alienTokenRootCode', type: 'cell'},
                            {name: 'alienTokenWalletCode', type: 'cell'},
                            {name: 'alienTokenWalletPlatformCode', type: 'cell'},
                        ],
                        name: '_config',
                        type: 'tuple',
                    },
                    {name: 'remainingGasTo', type: 'address'},
                ],
                outputs: [],
            },
            {
                name: 'upgrade',
                inputs: [{name: 'code', type: 'cell'}],
                outputs: [],
            },
            {
                name: 'transferOwnership',
                inputs: [{name: 'newOwner', type: 'address'}],
                outputs: [],
            },
            {
                name: 'renounceOwnership',
                inputs: [],
                outputs: [],
            },
            {
                name: 'owner',
                inputs: [],
                outputs: [{name: 'owner', type: 'address'}],
            },
            {
                name: '_randomNonce',
                inputs: [],
                outputs: [{name: '_randomNonce', type: 'uint256'}],
            },
        ],
        data: [{key: 1, name: '_randomNonce', type: 'uint256'}],
        events: [
            {
                name: 'AlienTransfer',
                inputs: [
                    {name: 'token', type: 'uint160'},
                    {name: 'amount', type: 'uint128'},
                    {name: 'recipient', type: 'uint160'},
                    {name: 'chainId', type: 'uint256'},
                ],
                outputs: [],
            },
            {
                name: 'OwnershipTransferred',
                inputs: [
                    {name: 'previousOwner', type: 'address'},
                    {name: 'newOwner', type: 'address'},
                ],
                outputs: [],
            },
        ],
        fields: [
            {name: '_pubkey', type: 'uint256'},
            {name: '_timestamp', type: 'uint64'},
            {name: '_constructorFlag', type: 'bool'},
            {name: 'owner', type: 'address'},
            {name: '_randomNonce', type: 'uint256'},
            {
                components: [
                    {name: 'everscaleConfiguration', type: 'address'},
                    {name: 'evmConfigurations', type: 'address[]'},
                    {name: 'deployWalletValue', type: 'uint128'},
                    {name: 'alienTokenRootCode', type: 'cell'},
                    {name: 'alienTokenWalletCode', type: 'cell'},
                    {name: 'alienTokenWalletPlatformCode', type: 'cell'},
                ],
                name: 'config',
                type: 'tuple',
            },
            {name: 'api_version', type: 'uint8'},
        ],
    } as const;

    static NativeProxy = {
        'ABI version': 2,
        version: '2.2',
        header: ['pubkey', 'time', 'expire'],
        functions: [
            {
                name: 'constructor',
                inputs: [{name: 'owner_', type: 'address'}],
                outputs: [],
            },
            {
                name: 'apiVersion',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [{name: 'value0', type: 'uint8'}],
            },
            {
                name: 'onAcceptTokensTransfer',
                inputs: [
                    {name: 'tokenRoot', type: 'address'},
                    {name: 'amount', type: 'uint128'},
                    {name: 'sender', type: 'address'},
                    {name: 'senderWallet', type: 'address'},
                    {name: 'remainingGasTo', type: 'address'},
                    {name: 'payload', type: 'cell'},
                ],
                outputs: [],
            },
            {
                name: 'onEventConfirmedExtended',
                inputs: [
                    {
                        components: [
                            {
                                components: [
                                    {name: 'eventTransaction', type: 'uint256'},
                                    {name: 'eventIndex', type: 'uint32'},
                                    {name: 'eventData', type: 'cell'},
                                    {name: 'eventBlockNumber', type: 'uint32'},
                                    {name: 'eventBlock', type: 'uint256'},
                                ],
                                name: 'voteData',
                                type: 'tuple',
                            },
                            {name: 'configuration', type: 'address'},
                            {name: 'staking', type: 'address'},
                            {name: 'chainId', type: 'uint32'},
                        ],
                        name: 'value0',
                        type: 'tuple',
                    },
                    {name: 'meta', type: 'cell'},
                    {name: 'remainingGasTo', type: 'address'},
                ],
                outputs: [],
            },
            {
                name: 'getConfiguration',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [
                    {
                        components: [
                            {name: 'everscaleConfiguration', type: 'address'},
                            {name: 'evmConfigurations', type: 'address[]'},
                            {name: 'deployWalletValue', type: 'uint128'},
                        ],
                        name: 'value0',
                        type: 'tuple',
                    },
                ],
            },
            {
                name: 'setConfiguration',
                inputs: [
                    {
                        components: [
                            {name: 'everscaleConfiguration', type: 'address'},
                            {name: 'evmConfigurations', type: 'address[]'},
                            {name: 'deployWalletValue', type: 'uint128'},
                        ],
                        name: '_config',
                        type: 'tuple',
                    },
                    {name: 'remainingGasTo', type: 'address'},
                ],
                outputs: [],
            },
            {
                name: 'upgrade',
                inputs: [{name: 'code', type: 'cell'}],
                outputs: [],
            },
            {
                name: 'transferOwnership',
                inputs: [{name: 'newOwner', type: 'address'}],
                outputs: [],
            },
            {
                name: 'renounceOwnership',
                inputs: [],
                outputs: [],
            },
            {
                name: 'owner',
                inputs: [],
                outputs: [{name: 'owner', type: 'address'}],
            },
            {
                name: '_randomNonce',
                inputs: [],
                outputs: [{name: '_randomNonce', type: 'uint256'}],
            },
        ],
        data: [{key: 1, name: '_randomNonce', type: 'uint256'}],
        events: [
            {
                name: 'NativeTransfer',
                inputs: [
                    {name: 'token_wid', type: 'int8'},
                    {name: 'token_addr', type: 'uint256'},
                    {name: 'name', type: 'string'},
                    {name: 'symbol', type: 'string'},
                    {name: 'decimals', type: 'uint8'},
                    {name: 'amount', type: 'uint128'},
                    {name: 'recipient', type: 'uint160'},
                    {name: 'chainId', type: 'uint256'},
                ],
                outputs: [],
            },
            {
                name: 'OwnershipTransferred',
                inputs: [
                    {name: 'previousOwner', type: 'address'},
                    {name: 'newOwner', type: 'address'},
                ],
                outputs: [],
            },
        ],
        fields: [
            {name: '_pubkey', type: 'uint256'},
            {name: '_timestamp', type: 'uint64'},
            {name: '_constructorFlag', type: 'bool'},
            {name: 'owner', type: 'address'},
            {name: '_randomNonce', type: 'uint256'},
            {
                components: [
                    {name: 'everscaleConfiguration', type: 'address'},
                    {name: 'evmConfigurations', type: 'address[]'},
                    {name: 'deployWalletValue', type: 'uint128'},
                ],
                name: 'config',
                type: 'tuple',
            },
            {name: 'api_version', type: 'uint8'},
        ],
    } as const;

    static EverscaleEventAlien = {
        'ABI version': 2,
        version: '2.2',
        header: ['pubkey', 'time', 'expire'],
        functions: [
            {
                name: 'constructor',
                inputs: [
                    {name: '_initializer', type: 'address'},
                    {name: '_meta', type: 'cell'},
                ],
                outputs: [],
            },
            {
                name: 'close',
                inputs: [],
                outputs: [],
            },
            {
                name: 'receiveTokenMeta',
                inputs: [
                    {name: 'base_chainId_', type: 'uint256'},
                    {name: 'base_token_', type: 'uint160'},
                    {name: 'name', type: 'string'},
                    {name: 'symbol', type: 'string'},
                    {name: 'decimals', type: 'uint8'},
                ],
                outputs: [],
            },
            {
                name: 'receiveAlienTokenRoot',
                inputs: [{name: 'token_', type: 'address'}],
                outputs: [],
            },
            {
                name: 'getDecodedData',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [
                    {name: 'proxy_', type: 'address'},
                    {name: 'token_', type: 'address'},
                    {name: 'remainingGasTo_', type: 'address'},
                    {name: 'amount_', type: 'uint128'},
                    {name: 'recipient_', type: 'uint160'},
                    {name: 'base_chainId_', type: 'uint256'},
                    {name: 'base_token_', type: 'uint160'},
                ],
            },
            {
                name: 'getEventInitData',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [
                    {
                        components: [
                            {
                                components: [
                                    {name: 'eventTransactionLt', type: 'uint64'},
                                    {name: 'eventTimestamp', type: 'uint32'},
                                    {name: 'eventData', type: 'cell'},
                                ],
                                name: 'voteData',
                                type: 'tuple',
                            },
                            {name: 'configuration', type: 'address'},
                            {name: 'staking', type: 'address'},
                        ],
                        name: 'value0',
                        type: 'tuple',
                    },
                ],
            },
            {
                name: 'confirm',
                inputs: [
                    {name: 'signature', type: 'bytes'},
                    {name: 'voteReceiver', type: 'address'},
                ],
                outputs: [],
            },
            {
                name: 'reject',
                inputs: [{name: 'voteReceiver', type: 'address'}],
                outputs: [],
            },
            {
                name: 'getDetails',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [
                    {
                        components: [
                            {
                                components: [
                                    {name: 'eventTransactionLt', type: 'uint64'},
                                    {name: 'eventTimestamp', type: 'uint32'},
                                    {name: 'eventData', type: 'cell'},
                                ],
                                name: 'voteData',
                                type: 'tuple',
                            },
                            {name: 'configuration', type: 'address'},
                            {name: 'staking', type: 'address'},
                        ],
                        name: '_eventInitData',
                        type: 'tuple',
                    },
                    {name: '_status', type: 'uint8'},
                    {name: '_confirms', type: 'uint256[]'},
                    {name: '_rejects', type: 'uint256[]'},
                    {name: 'empty', type: 'uint256[]'},
                    {name: '_signatures', type: 'bytes[]'},
                    {name: 'balance', type: 'uint128'},
                    {name: '_initializer', type: 'address'},
                    {name: '_meta', type: 'cell'},
                    {name: '_requiredVotes', type: 'uint32'},
                ],
            },
            {
                name: 'receiveRoundAddress',
                inputs: [
                    {name: 'roundContract', type: 'address'},
                    {name: 'roundNum', type: 'uint32'},
                ],
                outputs: [],
            },
            {
                name: 'receiveRoundRelays',
                inputs: [{name: 'keys', type: 'uint256[]'}],
                outputs: [],
            },
            {
                name: 'getVoters',
                inputs: [
                    {name: 'answerId', type: 'uint32'},
                    {name: 'vote', type: 'uint8'},
                ],
                outputs: [{name: 'voters', type: 'uint256[]'}],
            },
            {
                name: 'getVote',
                inputs: [
                    {name: 'answerId', type: 'uint32'},
                    {name: 'voter', type: 'uint256'},
                ],
                outputs: [{name: 'vote', type: 'optional(uint8)'}],
            },
            {
                name: 'getApiVersion',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [{name: 'value0', type: 'uint32'}],
            },
            {
                name: 'status',
                inputs: [],
                outputs: [{name: 'status', type: 'uint8'}],
            },
            {
                name: 'votes',
                inputs: [],
                outputs: [{name: 'votes', type: 'map(uint256,uint8)'}],
            },
            {
                name: 'initializer',
                inputs: [],
                outputs: [{name: 'initializer', type: 'address'}],
            },
            {
                name: 'meta',
                inputs: [],
                outputs: [{name: 'meta', type: 'cell'}],
            },
            {
                name: 'requiredVotes',
                inputs: [],
                outputs: [{name: 'requiredVotes', type: 'uint32'}],
            },
            {
                name: 'confirms',
                inputs: [],
                outputs: [{name: 'confirms', type: 'uint16'}],
            },
            {
                name: 'rejects',
                inputs: [],
                outputs: [{name: 'rejects', type: 'uint16'}],
            },
            {
                name: 'relay_round',
                inputs: [],
                outputs: [{name: 'relay_round', type: 'address'}],
            },
            {
                name: 'round_number',
                inputs: [],
                outputs: [{name: 'round_number', type: 'uint32'}],
            },
            {
                name: 'createdAt',
                inputs: [],
                outputs: [{name: 'createdAt', type: 'uint32'}],
            },
            {
                name: 'signatures',
                inputs: [],
                outputs: [{name: 'signatures', type: 'map(uint256,bytes)'}],
            },
        ],
        data: [
            {
                components: [
                    {
                        components: [
                            {name: 'eventTransactionLt', type: 'uint64'},
                            {name: 'eventTimestamp', type: 'uint32'},
                            {name: 'eventData', type: 'cell'},
                        ],
                        name: 'voteData',
                        type: 'tuple',
                    },
                    {name: 'configuration', type: 'address'},
                    {name: 'staking', type: 'address'},
                ],
                key: 1,
                name: 'eventInitData',
                type: 'tuple',
            },
        ],
        events: [
            {
                name: 'Confirm',
                inputs: [
                    {name: 'relay', type: 'uint256'},
                    {name: 'signature', type: 'bytes'},
                ],
                outputs: [],
            },
            {
                name: 'Reject',
                inputs: [{name: 'relay', type: 'uint256'}],
                outputs: [],
            },
            {
                name: 'Closed',
                inputs: [],
                outputs: [],
            },
        ],
        fields: [
            {name: '_pubkey', type: 'uint256'},
            {name: '_constructorFlag', type: 'bool'},
            {name: 'status', type: 'uint8'},
            {name: 'votes', type: 'map(uint256,uint8)'},
            {name: 'initializer', type: 'address'},
            {name: 'meta', type: 'cell'},
            {name: 'requiredVotes', type: 'uint32'},
            {name: 'confirms', type: 'uint16'},
            {name: 'rejects', type: 'uint16'},
            {name: 'relay_round', type: 'address'},
            {name: 'round_number', type: 'uint32'},
            {name: 'createdAt', type: 'uint32'},
            {
                components: [
                    {
                        components: [
                            {name: 'eventTransactionLt', type: 'uint64'},
                            {name: 'eventTimestamp', type: 'uint32'},
                            {name: 'eventData', type: 'cell'},
                        ],
                        name: 'voteData',
                        type: 'tuple',
                    },
                    {name: 'configuration', type: 'address'},
                    {name: 'staking', type: 'address'},
                ],
                name: 'eventInitData',
                type: 'tuple',
            },
            {name: 'signatures', type: 'map(uint256,bytes)'},
            {name: 'proxy', type: 'address'},
            {name: 'token', type: 'address'},
            {name: 'remainingGasTo', type: 'address'},
            {name: 'amount', type: 'uint128'},
            {name: 'recipient', type: 'uint160'},
            {name: 'base_chainId', type: 'uint256'},
            {name: 'base_token', type: 'uint160'},
        ],
    } as const;

    static EverscaleEventNative = {
        'ABI version': 2,
        version: '2.2',
        header: ['pubkey', 'time', 'expire'],
        functions: [
            {
                name: 'constructor',
                inputs: [
                    {name: '_initializer', type: 'address'},
                    {name: '_meta', type: 'cell'},
                ],
                outputs: [],
            },
            {
                name: 'close',
                inputs: [],
                outputs: [],
            },
            {
                name: 'receiveTokenName',
                inputs: [{name: 'name_', type: 'string'}],
                outputs: [],
            },
            {
                name: 'receiveTokenSymbol',
                inputs: [{name: 'symbol_', type: 'string'}],
                outputs: [],
            },
            {
                name: 'receiveTokenDecimals',
                inputs: [{name: 'decimals_', type: 'uint8'}],
                outputs: [],
            },
            {
                name: 'receiveProxyTokenWallet',
                inputs: [{name: 'tokenWallet_', type: 'address'}],
                outputs: [],
            },
            {
                name: 'getDecodedData',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [
                    {name: 'proxy_', type: 'address'},
                    {name: 'tokenWallet_', type: 'address'},
                    {name: 'token_', type: 'address'},
                    {name: 'remainingGasTo_', type: 'address'},
                    {name: 'amount_', type: 'uint128'},
                    {name: 'recipient_', type: 'uint160'},
                    {name: 'chainId_', type: 'uint256'},
                    {name: 'name_', type: 'string'},
                    {name: 'symbol_', type: 'string'},
                    {name: 'decimals_', type: 'uint8'},
                ],
            },
            {
                name: 'getEventInitData',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [
                    {
                        components: [
                            {
                                components: [
                                    {name: 'eventTransactionLt', type: 'uint64'},
                                    {name: 'eventTimestamp', type: 'uint32'},
                                    {name: 'eventData', type: 'cell'},
                                ],
                                name: 'voteData',
                                type: 'tuple',
                            },
                            {name: 'configuration', type: 'address'},
                            {name: 'staking', type: 'address'},
                        ],
                        name: 'value0',
                        type: 'tuple',
                    },
                ],
            },
            {
                name: 'confirm',
                inputs: [
                    {name: 'signature', type: 'bytes'},
                    {name: 'voteReceiver', type: 'address'},
                ],
                outputs: [],
            },
            {
                name: 'reject',
                inputs: [{name: 'voteReceiver', type: 'address'}],
                outputs: [],
            },
            {
                name: 'getDetails',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [
                    {
                        components: [
                            {
                                components: [
                                    {name: 'eventTransactionLt', type: 'uint64'},
                                    {name: 'eventTimestamp', type: 'uint32'},
                                    {name: 'eventData', type: 'cell'},
                                ],
                                name: 'voteData',
                                type: 'tuple',
                            },
                            {name: 'configuration', type: 'address'},
                            {name: 'staking', type: 'address'},
                        ],
                        name: '_eventInitData',
                        type: 'tuple',
                    },
                    {name: '_status', type: 'uint8'},
                    {name: '_confirms', type: 'uint256[]'},
                    {name: '_rejects', type: 'uint256[]'},
                    {name: 'empty', type: 'uint256[]'},
                    {name: '_signatures', type: 'bytes[]'},
                    {name: 'balance', type: 'uint128'},
                    {name: '_initializer', type: 'address'},
                    {name: '_meta', type: 'cell'},
                    {name: '_requiredVotes', type: 'uint32'},
                ],
            },
            {
                name: 'receiveRoundAddress',
                inputs: [
                    {name: 'roundContract', type: 'address'},
                    {name: 'roundNum', type: 'uint32'},
                ],
                outputs: [],
            },
            {
                name: 'receiveRoundRelays',
                inputs: [{name: 'keys', type: 'uint256[]'}],
                outputs: [],
            },
            {
                name: 'getVoters',
                inputs: [
                    {name: 'answerId', type: 'uint32'},
                    {name: 'vote', type: 'uint8'},
                ],
                outputs: [{name: 'voters', type: 'uint256[]'}],
            },
            {
                name: 'getVote',
                inputs: [
                    {name: 'answerId', type: 'uint32'},
                    {name: 'voter', type: 'uint256'},
                ],
                outputs: [{name: 'vote', type: 'optional(uint8)'}],
            },
            {
                name: 'getApiVersion',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [{name: 'value0', type: 'uint32'}],
            },
            {
                name: 'status',
                inputs: [],
                outputs: [{name: 'status', type: 'uint8'}],
            },
            {
                name: 'votes',
                inputs: [],
                outputs: [{name: 'votes', type: 'map(uint256,uint8)'}],
            },
            {
                name: 'initializer',
                inputs: [],
                outputs: [{name: 'initializer', type: 'address'}],
            },
            {
                name: 'meta',
                inputs: [],
                outputs: [{name: 'meta', type: 'cell'}],
            },
            {
                name: 'requiredVotes',
                inputs: [],
                outputs: [{name: 'requiredVotes', type: 'uint32'}],
            },
            {
                name: 'confirms',
                inputs: [],
                outputs: [{name: 'confirms', type: 'uint16'}],
            },
            {
                name: 'rejects',
                inputs: [],
                outputs: [{name: 'rejects', type: 'uint16'}],
            },
            {
                name: 'relay_round',
                inputs: [],
                outputs: [{name: 'relay_round', type: 'address'}],
            },
            {
                name: 'round_number',
                inputs: [],
                outputs: [{name: 'round_number', type: 'uint32'}],
            },
            {
                name: 'createdAt',
                inputs: [],
                outputs: [{name: 'createdAt', type: 'uint32'}],
            },
            {
                name: 'signatures',
                inputs: [],
                outputs: [{name: 'signatures', type: 'map(uint256,bytes)'}],
            },
        ],
        data: [
            {
                components: [
                    {
                        components: [
                            {name: 'eventTransactionLt', type: 'uint64'},
                            {name: 'eventTimestamp', type: 'uint32'},
                            {name: 'eventData', type: 'cell'},
                        ],
                        name: 'voteData',
                        type: 'tuple',
                    },
                    {name: 'configuration', type: 'address'},
                    {name: 'staking', type: 'address'},
                ],
                key: 1,
                name: 'eventInitData',
                type: 'tuple',
            },
        ],
        events: [
            {
                name: 'Confirm',
                inputs: [
                    {name: 'relay', type: 'uint256'},
                    {name: 'signature', type: 'bytes'},
                ],
                outputs: [],
            },
            {
                name: 'Reject',
                inputs: [{name: 'relay', type: 'uint256'}],
                outputs: [],
            },
            {
                name: 'Closed',
                inputs: [],
                outputs: [],
            },
        ],
        fields: [
            {name: '_pubkey', type: 'uint256'},
            {name: '_constructorFlag', type: 'bool'},
            {name: 'status', type: 'uint8'},
            {name: 'votes', type: 'map(uint256,uint8)'},
            {name: 'initializer', type: 'address'},
            {name: 'meta', type: 'cell'},
            {name: 'requiredVotes', type: 'uint32'},
            {name: 'confirms', type: 'uint16'},
            {name: 'rejects', type: 'uint16'},
            {name: 'relay_round', type: 'address'},
            {name: 'round_number', type: 'uint32'},
            {name: 'createdAt', type: 'uint32'},
            {
                components: [
                    {
                        components: [
                            {name: 'eventTransactionLt', type: 'uint64'},
                            {name: 'eventTimestamp', type: 'uint32'},
                            {name: 'eventData', type: 'cell'},
                        ],
                        name: 'voteData',
                        type: 'tuple',
                    },
                    {name: 'configuration', type: 'address'},
                    {name: 'staking', type: 'address'},
                ],
                name: 'eventInitData',
                type: 'tuple',
            },
            {name: 'signatures', type: 'map(uint256,bytes)'},
            {name: 'proxy', type: 'address'},
            {name: 'tokenWallet', type: 'address'},
            {name: 'token', type: 'address'},
            {name: 'remainingGasTo', type: 'address'},
            {name: 'amount', type: 'uint128'},
            {name: 'recipient', type: 'uint160'},
            {name: 'chainId', type: 'uint256'},
            {name: 'name', type: 'string'},
            {name: 'symbol', type: 'string'},
            {name: 'decimals', type: 'uint8'},
        ],
    } as const;
}

export class TokenAbi {
    static TokenRootAlienEVM = {
        'ABI version': 2,
        version: '2.2',
        header: ['pubkey', 'time', 'expire'],
        functions: [
            {
                name: 'constructor',
                inputs: [
                    {name: 'initialSupplyTo', type: 'address'},
                    {name: 'initialSupply', type: 'uint128'},
                    {name: 'deployWalletValue', type: 'uint128'},
                    {name: 'mintDisabled', type: 'bool'},
                    {name: 'burnByRootDisabled', type: 'bool'},
                    {name: 'burnPaused', type: 'bool'},
                    {name: 'remainingGasTo', type: 'address'},
                ],
                outputs: [],
            },
            {
                name: 'meta',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [
                    {name: 'base_chainId', type: 'uint256'},
                    {name: 'base_token', type: 'uint160'},
                    {name: 'name', type: 'string'},
                    {name: 'symbol', type: 'string'},
                    {name: 'decimals', type: 'uint8'},
                ],
            },
            {
                name: 'supportsInterface',
                inputs: [
                    {name: 'answerId', type: 'uint32'},
                    {name: 'interfaceID', type: 'uint32'},
                ],
                outputs: [{name: 'value0', type: 'bool'}],
            },
            {
                name: 'walletVersion',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [{name: 'value0', type: 'uint32'}],
            },
            {
                name: 'platformCode',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [{name: 'value0', type: 'cell'}],
            },
            {
                name: 'requestUpgradeWallet',
                inputs: [
                    {name: 'currentVersion', type: 'uint32'},
                    {name: 'walletOwner', type: 'address'},
                    {name: 'remainingGasTo', type: 'address'},
                ],
                outputs: [],
            },
            {
                name: 'setWalletCode',
                inputs: [{name: 'code', type: 'cell'}],
                outputs: [],
            },
            {
                name: 'upgrade',
                inputs: [{name: 'code', type: 'cell'}],
                outputs: [],
            },
            {
                name: 'disableMint',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [{name: 'value0', type: 'bool'}],
            },
            {
                name: 'mintDisabled',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [{name: 'value0', type: 'bool'}],
            },
            {
                name: 'burnTokens',
                inputs: [
                    {name: 'amount', type: 'uint128'},
                    {name: 'walletOwner', type: 'address'},
                    {name: 'remainingGasTo', type: 'address'},
                    {name: 'callbackTo', type: 'address'},
                    {name: 'payload', type: 'cell'},
                ],
                outputs: [],
            },
            {
                name: 'disableBurnByRoot',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [{name: 'value0', type: 'bool'}],
            },
            {
                name: 'burnByRootDisabled',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [{name: 'value0', type: 'bool'}],
            },
            {
                name: 'burnPaused',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [{name: 'value0', type: 'bool'}],
            },
            {
                name: 'setBurnPaused',
                inputs: [
                    {name: 'answerId', type: 'uint32'},
                    {name: 'paused', type: 'bool'},
                ],
                outputs: [{name: 'value0', type: 'bool'}],
            },
            {
                name: 'transferOwnership',
                inputs: [
                    {name: 'newOwner', type: 'address'},
                    {name: 'remainingGasTo', type: 'address'},
                    {
                        components: [
                            {name: 'value', type: 'uint128'},
                            {name: 'payload', type: 'cell'},
                        ],
                        name: 'callbacks',
                        type: 'map(address,tuple)',
                    },
                ],
                outputs: [],
            },
            {
                name: 'name',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [{name: 'value0', type: 'string'}],
            },
            {
                name: 'symbol',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [{name: 'value0', type: 'string'}],
            },
            {
                name: 'decimals',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [{name: 'value0', type: 'uint8'}],
            },
            {
                name: 'totalSupply',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [{name: 'value0', type: 'uint128'}],
            },
            {
                name: 'walletCode',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [{name: 'value0', type: 'cell'}],
            },
            {
                name: 'rootOwner',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [{name: 'value0', type: 'address'}],
            },
            {
                name: 'walletOf',
                inputs: [
                    {name: 'answerId', type: 'uint32'},
                    {name: 'walletOwner', type: 'address'},
                ],
                outputs: [{name: 'value0', type: 'address'}],
            },
            {
                name: 'deployWallet',
                inputs: [
                    {name: 'answerId', type: 'uint32'},
                    {name: 'walletOwner', type: 'address'},
                    {name: 'deployWalletValue', type: 'uint128'},
                ],
                outputs: [{name: 'tokenWallet', type: 'address'}],
            },
            {
                name: 'mint',
                inputs: [
                    {name: 'amount', type: 'uint128'},
                    {name: 'recipient', type: 'address'},
                    {name: 'deployWalletValue', type: 'uint128'},
                    {name: 'remainingGasTo', type: 'address'},
                    {name: 'notify', type: 'bool'},
                    {name: 'payload', type: 'cell'},
                ],
                outputs: [],
            },
            {
                name: 'acceptBurn',
                id: '0x192B51B1',
                inputs: [
                    {name: 'amount', type: 'uint128'},
                    {name: 'walletOwner', type: 'address'},
                    {name: 'remainingGasTo', type: 'address'},
                    {name: 'callbackTo', type: 'address'},
                    {name: 'payload', type: 'cell'},
                ],
                outputs: [],
            },
            {
                name: 'sendSurplusGas',
                inputs: [{name: 'to', type: 'address'}],
                outputs: [],
            },
        ],
        data: [
            {key: 1, name: 'name_', type: 'string'},
            {key: 2, name: 'symbol_', type: 'string'},
            {key: 3, name: 'decimals_', type: 'uint8'},
            {key: 4, name: 'rootOwner_', type: 'address'},
            {key: 5, name: 'walletCode_', type: 'cell'},
            {key: 6, name: 'randomNonce_', type: 'uint256'},
            {key: 7, name: 'deployer_', type: 'address'},
            {key: 8, name: 'platformCode_', type: 'cell'},
            {key: 9, name: 'base_chainId_', type: 'uint256'},
            {key: 10, name: 'base_token_', type: 'uint160'},
        ],
        events: [],
        fields: [
            {name: '_pubkey', type: 'uint256'},
            {name: '_timestamp', type: 'uint64'},
            {name: '_constructorFlag', type: 'bool'},
            {name: 'name_', type: 'string'},
            {name: 'symbol_', type: 'string'},
            {name: 'decimals_', type: 'uint8'},
            {name: 'rootOwner_', type: 'address'},
            {name: 'walletCode_', type: 'cell'},
            {name: 'totalSupply_', type: 'uint128'},
            {name: 'burnPaused_', type: 'bool'},
            {name: 'burnByRootDisabled_', type: 'bool'},
            {name: 'mintDisabled_', type: 'bool'},
            {name: 'randomNonce_', type: 'uint256'},
            {name: 'deployer_', type: 'address'},
            {name: 'platformCode_', type: 'cell'},
            {name: 'walletVersion_', type: 'uint32'},
            {name: 'base_chainId_', type: 'uint256'},
            {name: 'base_token_', type: 'uint160'},
        ],
    } as const;

    static Root = {
        'ABI version': 2,
        version: '2.2',
        header: ['pubkey', 'time', 'expire'],
        functions: [
            {
                name: 'constructor',
                inputs: [
                    {name: 'initialSupplyTo', type: 'address'},
                    {name: 'initialSupply', type: 'uint128'},
                    {name: 'deployWalletValue', type: 'uint128'},
                    {name: 'mintDisabled', type: 'bool'},
                    {name: 'burnByRootDisabled', type: 'bool'},
                    {name: 'burnPaused', type: 'bool'},
                    {name: 'remainingGasTo', type: 'address'},
                ],
                outputs: [],
            },
            {
                name: 'supportsInterface',
                inputs: [
                    {name: 'answerId', type: 'uint32'},
                    {name: 'interfaceID', type: 'uint32'},
                ],
                outputs: [{name: 'value0', type: 'bool'}],
            },
            {
                name: 'walletVersion',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [{name: 'value0', type: 'uint32'}],
            },
            {
                name: 'platformCode',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [{name: 'value0', type: 'cell'}],
            },
            {
                name: 'requestUpgradeWallet',
                inputs: [
                    {name: 'currentVersion', type: 'uint32'},
                    {name: 'walletOwner', type: 'address'},
                    {name: 'remainingGasTo', type: 'address'},
                ],
                outputs: [],
            },
            {
                name: 'setWalletCode',
                inputs: [{name: 'code', type: 'cell'}],
                outputs: [],
            },
            {
                name: 'upgrade',
                inputs: [{name: 'code', type: 'cell'}],
                outputs: [],
            },
            {
                name: 'disableMint',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [{name: 'value0', type: 'bool'}],
            },
            {
                name: 'mintDisabled',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [{name: 'value0', type: 'bool'}],
            },
            {
                name: 'burnTokens',
                inputs: [
                    {name: 'amount', type: 'uint128'},
                    {name: 'walletOwner', type: 'address'},
                    {name: 'remainingGasTo', type: 'address'},
                    {name: 'callbackTo', type: 'address'},
                    {name: 'payload', type: 'cell'},
                ],
                outputs: [],
            },
            {
                name: 'disableBurnByRoot',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [{name: 'value0', type: 'bool'}],
            },
            {
                name: 'burnByRootDisabled',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [{name: 'value0', type: 'bool'}],
            },
            {
                name: 'burnPaused',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [{name: 'value0', type: 'bool'}],
            },
            {
                name: 'setBurnPaused',
                inputs: [
                    {name: 'answerId', type: 'uint32'},
                    {name: 'paused', type: 'bool'},
                ],
                outputs: [{name: 'value0', type: 'bool'}],
            },
            {
                name: 'transferOwnership',
                inputs: [
                    {name: 'newOwner', type: 'address'},
                    {name: 'remainingGasTo', type: 'address'},
                    {
                        components: [
                            {name: 'value', type: 'uint128'},
                            {name: 'payload', type: 'cell'},
                        ],
                        name: 'callbacks',
                        type: 'map(address,tuple)',
                    },
                ],
                outputs: [],
            },
            {
                name: 'name',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [{name: 'value0', type: 'string'}],
            },
            {
                name: 'symbol',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [{name: 'value0', type: 'string'}],
            },
            {
                name: 'decimals',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [{name: 'value0', type: 'uint8'}],
            },
            {
                name: 'totalSupply',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [{name: 'value0', type: 'uint128'}],
            },
            {
                name: 'walletCode',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [{name: 'value0', type: 'cell'}],
            },
            {
                name: 'rootOwner',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [{name: 'value0', type: 'address'}],
            },
            {
                name: 'walletOf',
                inputs: [
                    {name: 'answerId', type: 'uint32'},
                    {name: 'walletOwner', type: 'address'},
                ],
                outputs: [{name: 'value0', type: 'address'}],
            },
            {
                name: 'deployWallet',
                inputs: [
                    {name: 'answerId', type: 'uint32'},
                    {name: 'walletOwner', type: 'address'},
                    {name: 'deployWalletValue', type: 'uint128'},
                ],
                outputs: [{name: 'tokenWallet', type: 'address'}],
            },
            {
                name: 'mint',
                inputs: [
                    {name: 'amount', type: 'uint128'},
                    {name: 'recipient', type: 'address'},
                    {name: 'deployWalletValue', type: 'uint128'},
                    {name: 'remainingGasTo', type: 'address'},
                    {name: 'notify', type: 'bool'},
                    {name: 'payload', type: 'cell'},
                ],
                outputs: [],
            },
            {
                name: 'acceptBurn',
                id: '0x192B51B1',
                inputs: [
                    {name: 'amount', type: 'uint128'},
                    {name: 'walletOwner', type: 'address'},
                    {name: 'remainingGasTo', type: 'address'},
                    {name: 'callbackTo', type: 'address'},
                    {name: 'payload', type: 'cell'},
                ],
                outputs: [],
            },
            {
                name: 'sendSurplusGas',
                inputs: [{name: 'to', type: 'address'}],
                outputs: [],
            },
        ],
        data: [
            {key: 1, name: 'name_', type: 'string'},
            {key: 2, name: 'symbol_', type: 'string'},
            {key: 3, name: 'decimals_', type: 'uint8'},
            {key: 4, name: 'rootOwner_', type: 'address'},
            {key: 5, name: 'walletCode_', type: 'cell'},
            {key: 6, name: 'randomNonce_', type: 'uint256'},
            {key: 7, name: 'deployer_', type: 'address'},
            {key: 8, name: 'platformCode_', type: 'cell'},
        ],
        events: [],
        fields: [
            {name: '_pubkey', type: 'uint256'},
            {name: '_timestamp', type: 'uint64'},
            {name: '_constructorFlag', type: 'bool'},
            {name: 'name_', type: 'string'},
            {name: 'symbol_', type: 'string'},
            {name: 'decimals_', type: 'uint8'},
            {name: 'rootOwner_', type: 'address'},
            {name: 'walletCode_', type: 'cell'},
            {name: 'totalSupply_', type: 'uint128'},
            {name: 'burnPaused_', type: 'bool'},
            {name: 'burnByRootDisabled_', type: 'bool'},
            {name: 'mintDisabled_', type: 'bool'},
            {name: 'randomNonce_', type: 'uint256'},
            {name: 'deployer_', type: 'address'},
            {name: 'platformCode_', type: 'cell'},
            {name: 'walletVersion_', type: 'uint32'},
        ],
    } as const;

    static Wallet = {
        'ABI version': 2,
        version: '2.2',
        header: ['pubkey', 'time', 'expire'],
        functions: [
            {
                name: 'constructor',
                inputs: [],
                outputs: [],
            },
            {
                name: 'supportsInterface',
                inputs: [
                    {name: 'answerId', type: 'uint32'},
                    {name: 'interfaceID', type: 'uint32'},
                ],
                outputs: [{name: 'value0', type: 'bool'}],
            },
            {
                name: 'platformCode',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [{name: 'value0', type: 'cell'}],
            },
            {
                name: 'onDeployRetry',
                id: '0x15A038FB',
                inputs: [
                    {name: 'value0', type: 'cell'},
                    {name: 'value1', type: 'uint32'},
                    {name: 'sender', type: 'address'},
                    {name: 'remainingGasTo', type: 'address'},
                ],
                outputs: [],
            },
            {
                name: 'version',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [{name: 'value0', type: 'uint32'}],
            },
            {
                name: 'upgrade',
                inputs: [{name: 'remainingGasTo', type: 'address'}],
                outputs: [],
            },
            {
                name: 'acceptUpgrade',
                inputs: [
                    {name: 'newCode', type: 'cell'},
                    {name: 'newVersion', type: 'uint32'},
                    {name: 'remainingGasTo', type: 'address'},
                ],
                outputs: [],
            },
            {
                name: 'burnByRoot',
                inputs: [
                    {name: 'amount', type: 'uint128'},
                    {name: 'remainingGasTo', type: 'address'},
                    {name: 'callbackTo', type: 'address'},
                    {name: 'payload', type: 'cell'},
                ],
                outputs: [],
            },
            {
                name: 'destroy',
                inputs: [{name: 'remainingGasTo', type: 'address'}],
                outputs: [],
            },
            {
                name: 'burn',
                inputs: [
                    {name: 'amount', type: 'uint128'},
                    {name: 'remainingGasTo', type: 'address'},
                    {name: 'callbackTo', type: 'address'},
                    {name: 'payload', type: 'cell'},
                ],
                outputs: [],
            },
            {
                name: 'balance',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [{name: 'value0', type: 'uint128'}],
            },
            {
                name: 'owner',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [{name: 'value0', type: 'address'}],
            },
            {
                name: 'root',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [{name: 'value0', type: 'address'}],
            },
            {
                name: 'walletCode',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [{name: 'value0', type: 'cell'}],
            },
            {
                name: 'transfer',
                inputs: [
                    {name: 'amount', type: 'uint128'},
                    {name: 'recipient', type: 'address'},
                    {name: 'deployWalletValue', type: 'uint128'},
                    {name: 'remainingGasTo', type: 'address'},
                    {name: 'notify', type: 'bool'},
                    {name: 'payload', type: 'cell'},
                ],
                outputs: [],
            },
            {
                name: 'transferToWallet',
                inputs: [
                    {name: 'amount', type: 'uint128'},
                    {name: 'recipientTokenWallet', type: 'address'},
                    {name: 'remainingGasTo', type: 'address'},
                    {name: 'notify', type: 'bool'},
                    {name: 'payload', type: 'cell'},
                ],
                outputs: [],
            },
            {
                name: 'acceptTransfer',
                id: '0x67A0B95F',
                inputs: [
                    {name: 'amount', type: 'uint128'},
                    {name: 'sender', type: 'address'},
                    {name: 'remainingGasTo', type: 'address'},
                    {name: 'notify', type: 'bool'},
                    {name: 'payload', type: 'cell'},
                ],
                outputs: [],
            },
            {
                name: 'acceptMint',
                id: '0x4384F298',
                inputs: [
                    {name: 'amount', type: 'uint128'},
                    {name: 'remainingGasTo', type: 'address'},
                    {name: 'notify', type: 'bool'},
                    {name: 'payload', type: 'cell'},
                ],
                outputs: [],
            },
            {
                name: 'sendSurplusGas',
                inputs: [{name: 'to', type: 'address'}],
                outputs: [],
            },
        ],
        data: [
            {key: 1, name: 'root_', type: 'address'},
            {key: 2, name: 'owner_', type: 'address'},
        ],
        events: [],
        fields: [
            {name: '_pubkey', type: 'uint256'},
            {name: '_timestamp', type: 'uint64'},
            {name: '_constructorFlag', type: 'bool'},
            {name: 'root_', type: 'address'},
            {name: 'owner_', type: 'address'},
            {name: 'balance_', type: 'uint128'},
            {name: 'version_', type: 'uint32'},
            {name: 'platformCode_', type: 'cell'},
        ],
    } as const;

    static EthEventConfig = {
        'ABI version': 2,
        version: '2.2',
        header: ['time', 'expire'],
        functions: [
            {
                name: 'constructor',
                inputs: [
                    {name: '_owner', type: 'address'},
                    {name: '_meta', type: 'cell'},
                ],
                outputs: [],
            },
            {
                name: 'setMeta',
                inputs: [{name: '_meta', type: 'cell'}],
                outputs: [],
            },
            {
                name: 'setEndBlockNumber',
                inputs: [{name: 'endBlockNumber', type: 'uint32'}],
                outputs: [],
            },
            {
                name: 'deployEvent',
                inputs: [
                    {
                        components: [
                            {name: 'eventTransaction', type: 'uint256'},
                            {name: 'eventIndex', type: 'uint32'},
                            {name: 'eventData', type: 'cell'},
                            {name: 'eventBlockNumber', type: 'uint32'},
                            {name: 'eventBlock', type: 'uint256'},
                        ],
                        name: 'eventVoteData',
                        type: 'tuple',
                    },
                ],
                outputs: [],
            },
            {
                name: 'deriveEventAddress',
                inputs: [
                    {name: 'answerId', type: 'uint32'},
                    {
                        components: [
                            {name: 'eventTransaction', type: 'uint256'},
                            {name: 'eventIndex', type: 'uint32'},
                            {name: 'eventData', type: 'cell'},
                            {name: 'eventBlockNumber', type: 'uint32'},
                            {name: 'eventBlock', type: 'uint256'},
                        ],
                        name: 'eventVoteData',
                        type: 'tuple',
                    },
                ],
                outputs: [{name: 'eventContract', type: 'address'}],
            },
            {
                name: 'getDetails',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [
                    {
                        components: [
                            {name: 'eventABI', type: 'bytes'},
                            {name: 'staking', type: 'address'},
                            {name: 'eventInitialBalance', type: 'uint64'},
                            {name: 'eventCode', type: 'cell'},
                        ],
                        name: '_basicConfiguration',
                        type: 'tuple',
                    },
                    {
                        components: [
                            {name: 'chainId', type: 'uint32'},
                            {name: 'eventEmitter', type: 'uint160'},
                            {name: 'eventBlocksToConfirm', type: 'uint16'},
                            {name: 'proxy', type: 'address'},
                            {name: 'startBlockNumber', type: 'uint32'},
                            {name: 'endBlockNumber', type: 'uint32'},
                        ],
                        name: '_networkConfiguration',
                        type: 'tuple',
                    },
                    {name: '_meta', type: 'cell'},
                ],
            },
            {
                name: 'getType',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [{name: '_type', type: 'uint8'}],
            },
            {
                name: 'onEventConfirmed',
                inputs: [
                    {
                        components: [
                            {
                                components: [
                                    {name: 'eventTransaction', type: 'uint256'},
                                    {name: 'eventIndex', type: 'uint32'},
                                    {name: 'eventData', type: 'cell'},
                                    {name: 'eventBlockNumber', type: 'uint32'},
                                    {name: 'eventBlock', type: 'uint256'},
                                ],
                                name: 'voteData',
                                type: 'tuple',
                            },
                            {name: 'configuration', type: 'address'},
                            {name: 'staking', type: 'address'},
                            {name: 'chainId', type: 'uint32'},
                        ],
                        name: 'eventInitData',
                        type: 'tuple',
                    },
                    {name: 'gasBackAddress', type: 'address'},
                ],
                outputs: [],
            },
            {
                name: 'transferOwnership',
                inputs: [{name: 'newOwner', type: 'address'}],
                outputs: [],
            },
            {
                name: 'renounceOwnership',
                inputs: [],
                outputs: [],
            },
            {
                name: 'owner',
                inputs: [],
                outputs: [{name: 'owner', type: 'address'}],
            },
            {
                name: 'basicConfiguration',
                inputs: [],
                outputs: [
                    {
                        components: [
                            {name: 'eventABI', type: 'bytes'},
                            {name: 'staking', type: 'address'},
                            {name: 'eventInitialBalance', type: 'uint64'},
                            {name: 'eventCode', type: 'cell'},
                        ],
                        name: 'basicConfiguration',
                        type: 'tuple',
                    },
                ],
            },
            {
                name: 'networkConfiguration',
                inputs: [],
                outputs: [
                    {
                        components: [
                            {name: 'chainId', type: 'uint32'},
                            {name: 'eventEmitter', type: 'uint160'},
                            {name: 'eventBlocksToConfirm', type: 'uint16'},
                            {name: 'proxy', type: 'address'},
                            {name: 'startBlockNumber', type: 'uint32'},
                            {name: 'endBlockNumber', type: 'uint32'},
                        ],
                        name: 'networkConfiguration',
                        type: 'tuple',
                    },
                ],
            },
            {
                name: 'meta',
                inputs: [],
                outputs: [{name: 'meta', type: 'cell'}],
            },
        ],
        data: [
            {
                components: [
                    {name: 'eventABI', type: 'bytes'},
                    {name: 'staking', type: 'address'},
                    {name: 'eventInitialBalance', type: 'uint64'},
                    {name: 'eventCode', type: 'cell'},
                ],
                key: 1,
                name: 'basicConfiguration',
                type: 'tuple',
            },
            {
                components: [
                    {name: 'chainId', type: 'uint32'},
                    {name: 'eventEmitter', type: 'uint160'},
                    {name: 'eventBlocksToConfirm', type: 'uint16'},
                    {name: 'proxy', type: 'address'},
                    {name: 'startBlockNumber', type: 'uint32'},
                    {name: 'endBlockNumber', type: 'uint32'},
                ],
                key: 2,
                name: 'networkConfiguration',
                type: 'tuple',
            },
        ],
        events: [
            {
                name: 'OwnershipTransferred',
                inputs: [
                    {name: 'previousOwner', type: 'address'},
                    {name: 'newOwner', type: 'address'},
                ],
                outputs: [],
            },
            {
                name: 'NewEventContract',
                inputs: [{name: 'eventContract', type: 'address'}],
                outputs: [],
            },
        ],
        fields: [
            {name: '_pubkey', type: 'uint256'},
            {name: '_timestamp', type: 'uint64'},
            {name: '_constructorFlag', type: 'bool'},
            {name: 'owner', type: 'address'},
            {
                components: [
                    {name: 'eventABI', type: 'bytes'},
                    {name: 'staking', type: 'address'},
                    {name: 'eventInitialBalance', type: 'uint64'},
                    {name: 'eventCode', type: 'cell'},
                ],
                name: 'basicConfiguration',
                type: 'tuple',
            },
            {
                components: [
                    {name: 'chainId', type: 'uint32'},
                    {name: 'eventEmitter', type: 'uint160'},
                    {name: 'eventBlocksToConfirm', type: 'uint16'},
                    {name: 'proxy', type: 'address'},
                    {name: 'startBlockNumber', type: 'uint32'},
                    {name: 'endBlockNumber', type: 'uint32'},
                ],
                name: 'networkConfiguration',
                type: 'tuple',
            },
            {name: 'meta', type: 'cell'},
        ],
    } as const;

    static EverscaleEventConfiguration = {
        'ABI version': 2,
        version: '2.2',
        header: ['time', 'expire'],
        functions: [
            {
                name: 'constructor',
                inputs: [
                    {name: '_owner', type: 'address'},
                    {name: '_meta', type: 'cell'},
                ],
                outputs: [],
            },
            {
                name: 'setMeta',
                inputs: [{name: '_meta', type: 'cell'}],
                outputs: [],
            },
            {
                name: 'setEndTimestamp',
                inputs: [{name: 'endTimestamp', type: 'uint32'}],
                outputs: [],
            },
            {
                name: 'deployEvent',
                inputs: [
                    {
                        components: [
                            {name: 'eventTransactionLt', type: 'uint64'},
                            {name: 'eventTimestamp', type: 'uint32'},
                            {name: 'eventData', type: 'cell'},
                        ],
                        name: 'eventVoteData',
                        type: 'tuple',
                    },
                ],
                outputs: [],
            },
            {
                name: 'deriveEventAddress',
                inputs: [
                    {name: 'answerId', type: 'uint32'},
                    {
                        components: [
                            {name: 'eventTransactionLt', type: 'uint64'},
                            {name: 'eventTimestamp', type: 'uint32'},
                            {name: 'eventData', type: 'cell'},
                        ],
                        name: 'eventVoteData',
                        type: 'tuple',
                    },
                ],
                outputs: [{name: 'eventContract', type: 'address'}],
            },
            {
                name: 'getDetails',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [
                    {
                        components: [
                            {name: 'eventABI', type: 'bytes'},
                            {name: 'staking', type: 'address'},
                            {name: 'eventInitialBalance', type: 'uint64'},
                            {name: 'eventCode', type: 'cell'},
                        ],
                        name: '_basicConfiguration',
                        type: 'tuple',
                    },
                    {
                        components: [
                            {name: 'eventEmitter', type: 'address'},
                            {name: 'proxy', type: 'uint160'},
                            {name: 'startTimestamp', type: 'uint32'},
                            {name: 'endTimestamp', type: 'uint32'},
                        ],
                        name: '_networkConfiguration',
                        type: 'tuple',
                    },
                    {name: '_meta', type: 'cell'},
                ],
            },
            {
                name: 'getType',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [{name: '_type', type: 'uint8'}],
            },
            {
                name: 'transferOwnership',
                inputs: [{name: 'newOwner', type: 'address'}],
                outputs: [],
            },
            {
                name: 'renounceOwnership',
                inputs: [],
                outputs: [],
            },
            {
                name: 'owner',
                inputs: [],
                outputs: [{name: 'owner', type: 'address'}],
            },
            {
                name: 'basicConfiguration',
                inputs: [],
                outputs: [
                    {
                        components: [
                            {name: 'eventABI', type: 'bytes'},
                            {name: 'staking', type: 'address'},
                            {name: 'eventInitialBalance', type: 'uint64'},
                            {name: 'eventCode', type: 'cell'},
                        ],
                        name: 'basicConfiguration',
                        type: 'tuple',
                    },
                ],
            },
            {
                name: 'networkConfiguration',
                inputs: [],
                outputs: [
                    {
                        components: [
                            {name: 'eventEmitter', type: 'address'},
                            {name: 'proxy', type: 'uint160'},
                            {name: 'startTimestamp', type: 'uint32'},
                            {name: 'endTimestamp', type: 'uint32'},
                        ],
                        name: 'networkConfiguration',
                        type: 'tuple',
                    },
                ],
            },
            {
                name: 'meta',
                inputs: [],
                outputs: [{name: 'meta', type: 'cell'}],
            },
        ],
        data: [
            {
                components: [
                    {name: 'eventABI', type: 'bytes'},
                    {name: 'staking', type: 'address'},
                    {name: 'eventInitialBalance', type: 'uint64'},
                    {name: 'eventCode', type: 'cell'},
                ],
                key: 1,
                name: 'basicConfiguration',
                type: 'tuple',
            },
            {
                components: [
                    {name: 'eventEmitter', type: 'address'},
                    {name: 'proxy', type: 'uint160'},
                    {name: 'startTimestamp', type: 'uint32'},
                    {name: 'endTimestamp', type: 'uint32'},
                ],
                key: 2,
                name: 'networkConfiguration',
                type: 'tuple',
            },
        ],
        events: [
            {
                name: 'OwnershipTransferred',
                inputs: [
                    {name: 'previousOwner', type: 'address'},
                    {name: 'newOwner', type: 'address'},
                ],
                outputs: [],
            },
            {
                name: 'NewEventContract',
                inputs: [{name: 'eventContract', type: 'address'}],
                outputs: [],
            },
        ],
        fields: [
            {name: '_pubkey', type: 'uint256'},
            {name: '_timestamp', type: 'uint64'},
            {name: '_constructorFlag', type: 'bool'},
            {name: 'owner', type: 'address'},
            {
                components: [
                    {name: 'eventABI', type: 'bytes'},
                    {name: 'staking', type: 'address'},
                    {name: 'eventInitialBalance', type: 'uint64'},
                    {name: 'eventCode', type: 'cell'},
                ],
                name: 'basicConfiguration',
                type: 'tuple',
            },
            {
                components: [
                    {name: 'eventEmitter', type: 'address'},
                    {name: 'proxy', type: 'uint160'},
                    {name: 'startTimestamp', type: 'uint32'},
                    {name: 'endTimestamp', type: 'uint32'},
                ],
                name: 'networkConfiguration',
                type: 'tuple',
            },
            {name: 'meta', type: 'cell'},
        ],
    } as const;

    static TokenTransferEthEvent = {
        'ABI version': 2,
        version: '2.2',
        header: ['pubkey', 'time', 'expire'],
        functions: [
            {
                name: 'constructor',
                inputs: [
                    {name: '_initializer', type: 'address'},
                    {name: '_meta', type: 'cell'},
                ],
                outputs: [],
            },
            {
                name: 'getDetails',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [
                    {
                        components: [
                            {
                                components: [
                                    {name: 'eventTransaction', type: 'uint256'},
                                    {name: 'eventIndex', type: 'uint32'},
                                    {name: 'eventData', type: 'cell'},
                                    {name: 'eventBlockNumber', type: 'uint32'},
                                    {name: 'eventBlock', type: 'uint256'},
                                ],
                                name: 'voteData',
                                type: 'tuple',
                            },
                            {name: 'configuration', type: 'address'},
                            {name: 'staking', type: 'address'},
                            {name: 'chainId', type: 'uint32'},
                        ],
                        name: '_eventInitData',
                        type: 'tuple',
                    },
                    {name: '_status', type: 'uint8'},
                    {name: '_confirms', type: 'uint256[]'},
                    {name: '_rejects', type: 'uint256[]'},
                    {name: 'empty', type: 'uint256[]'},
                    {name: 'balance', type: 'uint128'},
                    {name: '_initializer', type: 'address'},
                    {name: '_meta', type: 'cell'},
                    {name: '_requiredVotes', type: 'uint32'},
                ],
            },
            {
                name: 'getDecodedData',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [
                    {name: 'tokens', type: 'uint128'},
                    {name: 'wid', type: 'int8'},
                    {name: 'owner_addr', type: 'uint256'},
                    {name: 'owner_address', type: 'address'},
                ],
            },
            {
                name: 'getEventInitData',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [
                    {
                        components: [
                            {
                                components: [
                                    {name: 'eventTransaction', type: 'uint256'},
                                    {name: 'eventIndex', type: 'uint32'},
                                    {name: 'eventData', type: 'cell'},
                                    {name: 'eventBlockNumber', type: 'uint32'},
                                    {name: 'eventBlock', type: 'uint256'},
                                ],
                                name: 'voteData',
                                type: 'tuple',
                            },
                            {name: 'configuration', type: 'address'},
                            {name: 'staking', type: 'address'},
                            {name: 'chainId', type: 'uint32'},
                        ],
                        name: 'value0',
                        type: 'tuple',
                    },
                ],
            },
            {
                name: 'confirm',
                inputs: [{name: 'voteReceiver', type: 'address'}],
                outputs: [],
            },
            {
                name: 'reject',
                inputs: [{name: 'voteReceiver', type: 'address'}],
                outputs: [],
            },
            {
                name: 'receiveRoundAddress',
                inputs: [
                    {name: 'roundContract', type: 'address'},
                    {name: 'roundNum', type: 'uint32'},
                ],
                outputs: [],
            },
            {
                name: 'receiveRoundRelays',
                inputs: [{name: 'keys', type: 'uint256[]'}],
                outputs: [],
            },
            {
                name: 'getVoters',
                inputs: [
                    {name: 'answerId', type: 'uint32'},
                    {name: 'vote', type: 'uint8'},
                ],
                outputs: [{name: 'voters', type: 'uint256[]'}],
            },
            {
                name: 'getVote',
                inputs: [
                    {name: 'answerId', type: 'uint32'},
                    {name: 'voter', type: 'uint256'},
                ],
                outputs: [{name: 'vote', type: 'optional(uint8)'}],
            },
            {
                name: 'getApiVersion',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [{name: 'value0', type: 'uint32'}],
            },
            {
                name: 'encodeEthereumEventData',
                inputs: [
                    {name: 'tokens', type: 'uint256'},
                    {name: 'wid', type: 'int128'},
                    {name: 'owner_addr', type: 'uint256'},
                ],
                outputs: [{name: 'data', type: 'cell'}],
            },
            {
                name: 'decodeEthereumEventData',
                inputs: [{name: 'data', type: 'cell'}],
                outputs: [
                    {name: 'tokens', type: 'uint128'},
                    {name: 'wid', type: 'int8'},
                    {name: 'owner_addr', type: 'uint256'},
                ],
            },
            {
                name: 'encodeTonEventData',
                inputs: [
                    {name: 'wid', type: 'int8'},
                    {name: 'addr', type: 'uint256'},
                    {name: 'tokens', type: 'uint128'},
                    {name: 'ethereum_address', type: 'uint160'},
                    {name: 'chainId', type: 'uint32'},
                ],
                outputs: [{name: 'data', type: 'cell'}],
            },
            {
                name: 'decodeTonEventData',
                inputs: [{name: 'data', type: 'cell'}],
                outputs: [
                    {name: 'wid', type: 'int8'},
                    {name: 'addr', type: 'uint256'},
                    {name: 'tokens', type: 'uint128'},
                    {name: 'ethereum_address', type: 'uint160'},
                    {name: 'chainId', type: 'uint32'},
                ],
            },
            {
                name: 'status',
                inputs: [],
                outputs: [{name: 'status', type: 'uint8'}],
            },
            {
                name: 'votes',
                inputs: [],
                outputs: [{name: 'votes', type: 'map(uint256,uint8)'}],
            },
            {
                name: 'initializer',
                inputs: [],
                outputs: [{name: 'initializer', type: 'address'}],
            },
            {
                name: 'meta',
                inputs: [],
                outputs: [{name: 'meta', type: 'cell'}],
            },
            {
                name: 'requiredVotes',
                inputs: [],
                outputs: [{name: 'requiredVotes', type: 'uint32'}],
            },
            {
                name: 'confirms',
                inputs: [],
                outputs: [{name: 'confirms', type: 'uint16'}],
            },
            {
                name: 'rejects',
                inputs: [],
                outputs: [{name: 'rejects', type: 'uint16'}],
            },
            {
                name: 'relay_round',
                inputs: [],
                outputs: [{name: 'relay_round', type: 'address'}],
            },
            {
                name: 'round_number',
                inputs: [],
                outputs: [{name: 'round_number', type: 'uint32'}],
            },
        ],
        data: [
            {
                components: [
                    {
                        components: [
                            {name: 'eventTransaction', type: 'uint256'},
                            {name: 'eventIndex', type: 'uint32'},
                            {name: 'eventData', type: 'cell'},
                            {name: 'eventBlockNumber', type: 'uint32'},
                            {name: 'eventBlock', type: 'uint256'},
                        ],
                        name: 'voteData',
                        type: 'tuple',
                    },
                    {name: 'configuration', type: 'address'},
                    {name: 'staking', type: 'address'},
                    {name: 'chainId', type: 'uint32'},
                ],
                key: 1,
                name: 'eventInitData',
                type: 'tuple',
            },
        ],
        events: [
            {
                name: 'Confirm',
                inputs: [{name: 'relay', type: 'uint256'}],
                outputs: [],
            },
            {
                name: 'Reject',
                inputs: [{name: 'relay', type: 'uint256'}],
                outputs: [],
            },
            {
                name: 'Closed',
                inputs: [],
                outputs: [],
            },
        ],
        fields: [
            {name: '_pubkey', type: 'uint256'},
            {name: '_constructorFlag', type: 'bool'},
            {name: 'status', type: 'uint8'},
            {name: 'votes', type: 'map(uint256,uint8)'},
            {name: 'initializer', type: 'address'},
            {name: 'meta', type: 'cell'},
            {name: 'requiredVotes', type: 'uint32'},
            {name: 'confirms', type: 'uint16'},
            {name: 'rejects', type: 'uint16'},
            {name: 'relay_round', type: 'address'},
            {name: 'round_number', type: 'uint32'},
            {
                components: [
                    {
                        components: [
                            {name: 'eventTransaction', type: 'uint256'},
                            {name: 'eventIndex', type: 'uint32'},
                            {name: 'eventData', type: 'cell'},
                            {name: 'eventBlockNumber', type: 'uint32'},
                            {name: 'eventBlock', type: 'uint256'},
                        ],
                        name: 'voteData',
                        type: 'tuple',
                    },
                    {name: 'configuration', type: 'address'},
                    {name: 'staking', type: 'address'},
                    {name: 'chainId', type: 'uint32'},
                ],
                name: 'eventInitData',
                type: 'tuple',
            },
        ],
    } as const;

    static TokenTransferTonEvent = {
        'ABI version': 2,
        version: '2.2',
        header: ['pubkey', 'time', 'expire'],
        functions: [
            {
                name: 'constructor',
                inputs: [
                    {name: '_initializer', type: 'address'},
                    {name: '_meta', type: 'cell'},
                ],
                outputs: [],
            },
            {
                name: 'close',
                inputs: [],
                outputs: [],
            },
            {
                name: 'getDetails',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [
                    {
                        components: [
                            {
                                components: [
                                    {name: 'eventTransactionLt', type: 'uint64'},
                                    {name: 'eventTimestamp', type: 'uint32'},
                                    {name: 'eventData', type: 'cell'},
                                ],
                                name: 'voteData',
                                type: 'tuple',
                            },
                            {name: 'configuration', type: 'address'},
                            {name: 'staking', type: 'address'},
                        ],
                        name: '_eventInitData',
                        type: 'tuple',
                    },
                    {name: '_status', type: 'uint8'},
                    {name: '_confirms', type: 'uint256[]'},
                    {name: '_rejects', type: 'uint256[]'},
                    {name: 'empty', type: 'uint256[]'},
                    {name: '_signatures', type: 'bytes[]'},
                    {name: 'balance', type: 'uint128'},
                    {name: '_initializer', type: 'address'},
                    {name: '_meta', type: 'cell'},
                    {name: '_requiredVotes', type: 'uint32'},
                ],
            },
            {
                name: 'getDecodedData',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [
                    {name: 'wid', type: 'int8'},
                    {name: 'addr', type: 'uint256'},
                    {name: 'tokens', type: 'uint128'},
                    {name: 'ethereum_address', type: 'uint160'},
                    {name: 'owner_address', type: 'address'},
                    {name: 'chainId', type: 'uint32'},
                ],
            },
            {
                name: 'getEventInitData',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [
                    {
                        components: [
                            {
                                components: [
                                    {name: 'eventTransactionLt', type: 'uint64'},
                                    {name: 'eventTimestamp', type: 'uint32'},
                                    {name: 'eventData', type: 'cell'},
                                ],
                                name: 'voteData',
                                type: 'tuple',
                            },
                            {name: 'configuration', type: 'address'},
                            {name: 'staking', type: 'address'},
                        ],
                        name: 'value0',
                        type: 'tuple',
                    },
                ],
            },
            {
                name: 'confirm',
                inputs: [
                    {name: 'signature', type: 'bytes'},
                    {name: 'voteReceiver', type: 'address'},
                ],
                outputs: [],
            },
            {
                name: 'reject',
                inputs: [{name: 'voteReceiver', type: 'address'}],
                outputs: [],
            },
            {
                name: 'receiveRoundAddress',
                inputs: [
                    {name: 'roundContract', type: 'address'},
                    {name: 'roundNum', type: 'uint32'},
                ],
                outputs: [],
            },
            {
                name: 'receiveRoundRelays',
                inputs: [{name: 'keys', type: 'uint256[]'}],
                outputs: [],
            },
            {
                name: 'getVoters',
                inputs: [
                    {name: 'answerId', type: 'uint32'},
                    {name: 'vote', type: 'uint8'},
                ],
                outputs: [{name: 'voters', type: 'uint256[]'}],
            },
            {
                name: 'getVote',
                inputs: [
                    {name: 'answerId', type: 'uint32'},
                    {name: 'voter', type: 'uint256'},
                ],
                outputs: [{name: 'vote', type: 'optional(uint8)'}],
            },
            {
                name: 'getApiVersion',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [{name: 'value0', type: 'uint32'}],
            },
            {
                name: 'encodeEthereumEventData',
                inputs: [
                    {name: 'tokens', type: 'uint256'},
                    {name: 'wid', type: 'int128'},
                    {name: 'owner_addr', type: 'uint256'},
                ],
                outputs: [{name: 'data', type: 'cell'}],
            },
            {
                name: 'decodeEthereumEventData',
                inputs: [{name: 'data', type: 'cell'}],
                outputs: [
                    {name: 'tokens', type: 'uint128'},
                    {name: 'wid', type: 'int8'},
                    {name: 'owner_addr', type: 'uint256'},
                ],
            },
            {
                name: 'encodeTonEventData',
                inputs: [
                    {name: 'wid', type: 'int8'},
                    {name: 'addr', type: 'uint256'},
                    {name: 'tokens', type: 'uint128'},
                    {name: 'ethereum_address', type: 'uint160'},
                    {name: 'chainId', type: 'uint32'},
                ],
                outputs: [{name: 'data', type: 'cell'}],
            },
            {
                name: 'decodeTonEventData',
                inputs: [{name: 'data', type: 'cell'}],
                outputs: [
                    {name: 'wid', type: 'int8'},
                    {name: 'addr', type: 'uint256'},
                    {name: 'tokens', type: 'uint128'},
                    {name: 'ethereum_address', type: 'uint160'},
                    {name: 'chainId', type: 'uint32'},
                ],
            },
            {
                name: 'status',
                inputs: [],
                outputs: [{name: 'status', type: 'uint8'}],
            },
            {
                name: 'votes',
                inputs: [],
                outputs: [{name: 'votes', type: 'map(uint256,uint8)'}],
            },
            {
                name: 'initializer',
                inputs: [],
                outputs: [{name: 'initializer', type: 'address'}],
            },
            {
                name: 'meta',
                inputs: [],
                outputs: [{name: 'meta', type: 'cell'}],
            },
            {
                name: 'requiredVotes',
                inputs: [],
                outputs: [{name: 'requiredVotes', type: 'uint32'}],
            },
            {
                name: 'confirms',
                inputs: [],
                outputs: [{name: 'confirms', type: 'uint16'}],
            },
            {
                name: 'rejects',
                inputs: [],
                outputs: [{name: 'rejects', type: 'uint16'}],
            },
            {
                name: 'relay_round',
                inputs: [],
                outputs: [{name: 'relay_round', type: 'address'}],
            },
            {
                name: 'round_number',
                inputs: [],
                outputs: [{name: 'round_number', type: 'uint32'}],
            },
            {
                name: 'signatures',
                inputs: [],
                outputs: [{name: 'signatures', type: 'map(uint256,bytes)'}],
            },
            {
                name: 'createdAt',
                inputs: [],
                outputs: [{name: 'createdAt', type: 'uint32'}],
            },
        ],
        data: [
            {
                components: [
                    {
                        components: [
                            {name: 'eventTransactionLt', type: 'uint64'},
                            {name: 'eventTimestamp', type: 'uint32'},
                            {name: 'eventData', type: 'cell'},
                        ],
                        name: 'voteData',
                        type: 'tuple',
                    },
                    {name: 'configuration', type: 'address'},
                    {name: 'staking', type: 'address'},
                ],
                key: 1,
                name: 'eventInitData',
                type: 'tuple',
            },
        ],
        events: [
            {
                name: 'Confirm',
                inputs: [
                    {name: 'relay', type: 'uint256'},
                    {name: 'signature', type: 'bytes'},
                ],
                outputs: [],
            },
            {
                name: 'Reject',
                inputs: [{name: 'relay', type: 'uint256'}],
                outputs: [],
            },
            {
                name: 'Closed',
                inputs: [],
                outputs: [],
            },
        ],
        fields: [
            {name: '_pubkey', type: 'uint256'},
            {name: '_constructorFlag', type: 'bool'},
            {name: 'status', type: 'uint8'},
            {name: 'votes', type: 'map(uint256,uint8)'},
            {name: 'initializer', type: 'address'},
            {name: 'meta', type: 'cell'},
            {name: 'requiredVotes', type: 'uint32'},
            {name: 'confirms', type: 'uint16'},
            {name: 'rejects', type: 'uint16'},
            {name: 'relay_round', type: 'address'},
            {name: 'round_number', type: 'uint32'},
            {
                components: [
                    {
                        components: [
                            {name: 'eventTransactionLt', type: 'uint64'},
                            {name: 'eventTimestamp', type: 'uint32'},
                            {name: 'eventData', type: 'cell'},
                        ],
                        name: 'voteData',
                        type: 'tuple',
                    },
                    {name: 'configuration', type: 'address'},
                    {name: 'staking', type: 'address'},
                ],
                name: 'eventInitData',
                type: 'tuple',
            },
            {name: 'signatures', type: 'map(uint256,bytes)'},
            {name: 'createdAt', type: 'uint32'},
        ],
    } as const;

    static EverscaleTokenTransferProxy = {
        'ABI version': 2,
        version: '2.2',
        header: ['pubkey', 'time', 'expire'],
        functions: [
            {
                name: 'constructor',
                inputs: [{name: 'owner_', type: 'address'}],
                outputs: [],
            },
            {
                name: 'apiVersion',
                inputs: [],
                outputs: [{name: 'API_VERSION', type: 'string'}],
            },
            {
                name: 'receiveTokenWalletAddress',
                inputs: [{name: 'wallet', type: 'address'}],
                outputs: [],
            },
            {
                name: 'onEventConfirmed',
                inputs: [
                    {
                        components: [
                            {
                                components: [
                                    {name: 'eventTransaction', type: 'uint256'},
                                    {name: 'eventIndex', type: 'uint32'},
                                    {name: 'eventData', type: 'cell'},
                                    {name: 'eventBlockNumber', type: 'uint32'},
                                    {name: 'eventBlock', type: 'uint256'},
                                ],
                                name: 'voteData',
                                type: 'tuple',
                            },
                            {name: 'configuration', type: 'address'},
                            {name: 'staking', type: 'address'},
                            {name: 'chainId', type: 'uint32'},
                        ],
                        name: 'eventData',
                        type: 'tuple',
                    },
                    {name: 'gasBackAddress', type: 'address'},
                ],
                outputs: [],
            },
            {
                name: 'onAcceptTokensTransfer',
                inputs: [
                    {name: 'tokenRoot', type: 'address'},
                    {name: 'amount', type: 'uint128'},
                    {name: 'sender', type: 'address'},
                    {name: 'senderWallet', type: 'address'},
                    {name: 'remainingGasTo', type: 'address'},
                    {name: 'payload', type: 'cell'},
                ],
                outputs: [],
            },
            {
                name: 'getDetails',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [
                    {
                        components: [
                            {name: 'tonConfiguration', type: 'address'},
                            {name: 'ethereumConfigurations', type: 'address[]'},
                            {name: 'root', type: 'address'},
                            {name: 'settingsDeployWalletGrams', type: 'uint128'},
                            {name: 'settingsTransferGrams', type: 'uint128'},
                        ],
                        name: '_config',
                        type: 'tuple',
                    },
                    {name: '_owner', type: 'address'},
                    {name: '_received_count', type: 'uint128'},
                    {name: '_transferred_count', type: 'uint128'},
                    {name: '_token_wallet', type: 'address'},
                ],
            },
            {
                name: 'getTokenRoot',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [{name: 'value0', type: 'address'}],
            },
            {
                name: 'getConfiguration',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [
                    {
                        components: [
                            {name: 'tonConfiguration', type: 'address'},
                            {name: 'ethereumConfigurations', type: 'address[]'},
                            {name: 'root', type: 'address'},
                            {name: 'settingsDeployWalletGrams', type: 'uint128'},
                            {name: 'settingsTransferGrams', type: 'uint128'},
                        ],
                        name: 'value0',
                        type: 'tuple',
                    },
                ],
            },
            {
                name: 'setConfiguration',
                inputs: [
                    {
                        components: [
                            {name: 'tonConfiguration', type: 'address'},
                            {name: 'ethereumConfigurations', type: 'address[]'},
                            {name: 'root', type: 'address'},
                            {name: 'settingsDeployWalletGrams', type: 'uint128'},
                            {name: 'settingsTransferGrams', type: 'uint128'},
                        ],
                        name: '_config',
                        type: 'tuple',
                    },
                ],
                outputs: [],
            },
            {
                name: 'upgrade',
                inputs: [
                    {name: 'code', type: 'cell'},
                    {name: 'send_gas_to', type: 'address'},
                ],
                outputs: [],
            },
            {
                name: 'transferOwnership',
                inputs: [{name: 'newOwner', type: 'address'}],
                outputs: [],
            },
            {
                name: 'renounceOwnership',
                inputs: [],
                outputs: [],
            },
            {
                name: 'encodeEthereumEventData',
                inputs: [
                    {name: 'tokens', type: 'uint256'},
                    {name: 'wid', type: 'int128'},
                    {name: 'owner_addr', type: 'uint256'},
                ],
                outputs: [{name: 'data', type: 'cell'}],
            },
            {
                name: 'decodeEthereumEventData',
                inputs: [{name: 'data', type: 'cell'}],
                outputs: [
                    {name: 'tokens', type: 'uint128'},
                    {name: 'wid', type: 'int8'},
                    {name: 'owner_addr', type: 'uint256'},
                ],
            },
            {
                name: 'encodeEverscaleEventData',
                inputs: [
                    {name: 'wid', type: 'int8'},
                    {name: 'addr', type: 'uint256'},
                    {name: 'tokens', type: 'uint128'},
                    {name: 'ethereum_address', type: 'uint160'},
                    {name: 'chainId', type: 'uint32'},
                ],
                outputs: [{name: 'data', type: 'cell'}],
            },
            {
                name: 'decodeEverscaleEventData',
                inputs: [{name: 'data', type: 'cell'}],
                outputs: [
                    {name: 'wid', type: 'int8'},
                    {name: 'addr', type: 'uint256'},
                    {name: 'tokens', type: 'uint128'},
                    {name: 'ethereum_address', type: 'uint160'},
                    {name: 'chainId', type: 'uint32'},
                ],
            },
            {
                name: '_randomNonce',
                inputs: [],
                outputs: [{name: '_randomNonce', type: 'uint256'}],
            },
            {
                name: 'owner',
                inputs: [],
                outputs: [{name: 'owner', type: 'address'}],
            },
            {
                name: 'token_wallet',
                inputs: [],
                outputs: [{name: 'token_wallet', type: 'address'}],
            },
        ],
        data: [{key: 1, name: '_randomNonce', type: 'uint256'}],
        events: [
            {
                name: 'Withdraw',
                inputs: [
                    {name: 'wid', type: 'int8'},
                    {name: 'addr', type: 'uint256'},
                    {name: 'tokens', type: 'uint128'},
                    {name: 'eth_addr', type: 'uint160'},
                    {name: 'chainId', type: 'uint32'},
                ],
                outputs: [],
            },
            {
                name: 'OwnershipTransferred',
                inputs: [
                    {name: 'previousOwner', type: 'address'},
                    {name: 'newOwner', type: 'address'},
                ],
                outputs: [],
            },
        ],
        fields: [
            {name: '_pubkey', type: 'uint256'},
            {name: '_timestamp', type: 'uint64'},
            {name: '_constructorFlag', type: 'bool'},
            {name: '_randomNonce', type: 'uint256'},
            {name: 'owner', type: 'address'},
            {
                components: [
                    {name: 'tonConfiguration', type: 'address'},
                    {name: 'ethereumConfigurations', type: 'address[]'},
                    {name: 'root', type: 'address'},
                    {name: 'settingsDeployWalletGrams', type: 'uint128'},
                    {name: 'settingsTransferGrams', type: 'uint128'},
                ],
                name: 'config',
                type: 'tuple',
            },
            {name: 'received_count', type: 'uint128'},
            {name: 'transferred_count', type: 'uint128'},
            {name: 'token_wallet', type: 'address'},
        ],
    } as const;

    static EvmTokenTransferProxy = {
        'ABI version': 2,
        version: '2.2',
        header: ['pubkey', 'time', 'expire'],
        functions: [
            {
                name: 'constructor',
                inputs: [{name: 'owner_', type: 'address'}],
                outputs: [],
            },
            {
                name: 'onEventConfirmed',
                inputs: [
                    {
                        components: [
                            {
                                components: [
                                    {name: 'eventTransaction', type: 'uint256'},
                                    {name: 'eventIndex', type: 'uint32'},
                                    {name: 'eventData', type: 'cell'},
                                    {name: 'eventBlockNumber', type: 'uint32'},
                                    {name: 'eventBlock', type: 'uint256'},
                                ],
                                name: 'voteData',
                                type: 'tuple',
                            },
                            {name: 'configuration', type: 'address'},
                            {name: 'staking', type: 'address'},
                            {name: 'chainId', type: 'uint32'},
                        ],
                        name: 'eventData',
                        type: 'tuple',
                    },
                    {name: 'gasBackAddress', type: 'address'},
                ],
                outputs: [],
            },
            {
                name: 'burnCallback',
                inputs: [
                    {name: 'tokens', type: 'uint128'},
                    {name: 'value1', type: 'cell'},
                    {name: 'value2', type: 'uint256'},
                    {name: 'sender_address', type: 'address'},
                    {name: 'value4', type: 'address'},
                    {name: 'send_gas_to', type: 'address'},
                ],
                outputs: [],
            },
            {
                name: 'onAcceptTokensBurn',
                inputs: [
                    {name: 'tokens', type: 'uint128'},
                    {name: 'walletOwner', type: 'address'},
                    {name: 'wallet', type: 'address'},
                    {name: 'remainingGasTo', type: 'address'},
                    {name: 'payload', type: 'cell'},
                ],
                outputs: [],
            },
            {
                name: 'getDetails',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [
                    {
                        components: [
                            {name: 'tonConfiguration', type: 'address'},
                            {name: 'ethereumConfigurations', type: 'address[]'},
                            {name: 'outdatedTokenRoots', type: 'address[]'},
                            {name: 'tokenRoot', type: 'address'},
                            {name: 'settingsDeployWalletGrams', type: 'uint128'},
                        ],
                        name: 'value0',
                        type: 'tuple',
                    },
                    {name: 'value1', type: 'address'},
                    {name: 'value2', type: 'uint128'},
                    {name: 'value3', type: 'bool'},
                ],
            },
            {
                name: 'getTokenRoot',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [{name: 'value0', type: 'address'}],
            },
            {
                name: 'getConfiguration',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [
                    {
                        components: [
                            {name: 'tonConfiguration', type: 'address'},
                            {name: 'ethereumConfigurations', type: 'address[]'},
                            {name: 'outdatedTokenRoots', type: 'address[]'},
                            {name: 'tokenRoot', type: 'address'},
                            {name: 'settingsDeployWalletGrams', type: 'uint128'},
                        ],
                        name: 'value0',
                        type: 'tuple',
                    },
                ],
            },
            {
                name: 'setConfiguration',
                inputs: [
                    {
                        components: [
                            {name: 'tonConfiguration', type: 'address'},
                            {name: 'ethereumConfigurations', type: 'address[]'},
                            {name: 'outdatedTokenRoots', type: 'address[]'},
                            {name: 'tokenRoot', type: 'address'},
                            {name: 'settingsDeployWalletGrams', type: 'uint128'},
                        ],
                        name: '_config',
                        type: 'tuple',
                    },
                    {name: 'gasBackAddress', type: 'address'},
                ],
                outputs: [],
            },
            {
                name: 'transferTokenOwnership',
                inputs: [
                    {name: 'target', type: 'address'},
                    {name: 'newOwner', type: 'address'},
                ],
                outputs: [],
            },
            {
                name: 'legacyTransferTokenOwnership',
                inputs: [
                    {name: 'target', type: 'address'},
                    {name: 'newOwner', type: 'address'},
                ],
                outputs: [],
            },
            {
                name: 'transferOwnership',
                inputs: [{name: 'newOwner', type: 'address'}],
                outputs: [],
            },
            {
                name: 'renounceOwnership',
                inputs: [],
                outputs: [],
            },
            {
                name: 'encodeEthereumEventData',
                inputs: [
                    {name: 'tokens', type: 'uint256'},
                    {name: 'wid', type: 'int128'},
                    {name: 'owner_addr', type: 'uint256'},
                ],
                outputs: [{name: 'data', type: 'cell'}],
            },
            {
                name: 'decodeEthereumEventData',
                inputs: [{name: 'data', type: 'cell'}],
                outputs: [
                    {name: 'tokens', type: 'uint128'},
                    {name: 'wid', type: 'int8'},
                    {name: 'owner_addr', type: 'uint256'},
                ],
            },
            {
                name: 'encodeTonEventData',
                inputs: [
                    {name: 'wid', type: 'int8'},
                    {name: 'addr', type: 'uint256'},
                    {name: 'tokens', type: 'uint128'},
                    {name: 'ethereum_address', type: 'uint160'},
                    {name: 'chainId', type: 'uint32'},
                ],
                outputs: [{name: 'data', type: 'cell'}],
            },
            {
                name: 'decodeTonEventData',
                inputs: [{name: 'data', type: 'cell'}],
                outputs: [
                    {name: 'wid', type: 'int8'},
                    {name: 'addr', type: 'uint256'},
                    {name: 'tokens', type: 'uint128'},
                    {name: 'ethereum_address', type: 'uint160'},
                    {name: 'chainId', type: 'uint32'},
                ],
            },
            {
                name: '_randomNonce',
                inputs: [],
                outputs: [{name: '_randomNonce', type: 'uint256'}],
            },
            {
                name: 'owner',
                inputs: [],
                outputs: [{name: 'owner', type: 'address'}],
            },
        ],
        data: [{key: 1, name: '_randomNonce', type: 'uint256'}],
        events: [
            {
                name: 'Withdraw',
                inputs: [
                    {name: 'wid', type: 'int8'},
                    {name: 'addr', type: 'uint256'},
                    {name: 'tokens', type: 'uint128'},
                    {name: 'eth_addr', type: 'uint160'},
                    {name: 'chainId', type: 'uint32'},
                ],
                outputs: [],
            },
            {
                name: 'OwnershipTransferred',
                inputs: [
                    {name: 'previousOwner', type: 'address'},
                    {name: 'newOwner', type: 'address'},
                ],
                outputs: [],
            },
        ],
        fields: [
            {name: '_pubkey', type: 'uint256'},
            {name: '_timestamp', type: 'uint64'},
            {name: '_constructorFlag', type: 'bool'},
            {name: '_randomNonce', type: 'uint256'},
            {name: 'owner', type: 'address'},
            {
                components: [
                    {name: 'tonConfiguration', type: 'address'},
                    {name: 'ethereumConfigurations', type: 'address[]'},
                    {name: 'outdatedTokenRoots', type: 'address[]'},
                    {name: 'tokenRoot', type: 'address'},
                    {name: 'settingsDeployWalletGrams', type: 'uint128'},
                ],
                name: 'config',
                type: 'tuple',
            },
            {name: 'burnedCount', type: 'uint128'},
            {name: 'paused', type: 'bool'},
        ],
    } as const;

    static CreditProcessor = {
        'ABI version': 2,
        version: '2.2',
        header: ['pubkey', 'time', 'expire'],
        functions: [
            {
                name: 'constructor',
                inputs: [
                    {name: 'fee', type: 'uint128'},
                    {name: 'deployer_', type: 'address'},
                ],
                outputs: [],
            },
            {
                name: 'getDetails',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [
                    {
                        components: [
                            {
                                components: [
                                    {name: 'eventTransaction', type: 'uint256'},
                                    {name: 'eventIndex', type: 'uint32'},
                                    {name: 'eventData', type: 'cell'},
                                    {name: 'eventBlockNumber', type: 'uint32'},
                                    {name: 'eventBlock', type: 'uint256'},
                                ],
                                name: 'eventVoteData',
                                type: 'tuple',
                            },
                            {name: 'configuration', type: 'address'},
                            {name: 'amount', type: 'uint128'},
                            {
                                components: [
                                    {name: 'numerator', type: 'uint128'},
                                    {name: 'denominator', type: 'uint128'},
                                ],
                                name: 'slippage',
                                type: 'tuple',
                            },
                            {name: 'dexRoot', type: 'address'},
                            {name: 'wtonVault', type: 'address'},
                            {name: 'wtonRoot', type: 'address'},
                            {name: 'state', type: 'uint8'},
                            {name: 'eventState', type: 'uint8'},
                            {name: 'deployer', type: 'address'},
                            {name: 'debt', type: 'uint128'},
                            {name: 'fee', type: 'uint128'},
                            {name: 'eventAddress', type: 'address'},
                            {name: 'tokenRoot', type: 'address'},
                            {name: 'tokenWallet', type: 'address'},
                            {name: 'wtonWallet', type: 'address'},
                            {name: 'dexPair', type: 'address'},
                            {name: 'dexVault', type: 'address'},
                            {name: 'swapAttempt', type: 'uint64'},
                            {name: 'swapAmount', type: 'uint128'},
                            {name: 'unwrapAmount', type: 'uint128'},
                        ],
                        name: 'value0',
                        type: 'tuple',
                    },
                ],
            },
            {
                name: 'getCreditEventData',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [
                    {
                        components: [
                            {name: 'amount', type: 'uint128'},
                            {name: 'user', type: 'address'},
                            {name: 'creditor', type: 'address'},
                            {name: 'recipient', type: 'address'},
                            {name: 'tokenAmount', type: 'uint128'},
                            {name: 'tonAmount', type: 'uint128'},
                            {name: 'swapType', type: 'uint8'},
                            {
                                components: [
                                    {name: 'numerator', type: 'uint128'},
                                    {name: 'denominator', type: 'uint128'},
                                ],
                                name: 'slippage',
                                type: 'tuple',
                            },
                            {name: 'layer3', type: 'cell'},
                        ],
                        name: 'value0',
                        type: 'tuple',
                    },
                ],
            },
            {
                name: 'deriveEventAddress',
                inputs: [],
                outputs: [],
            },
            {
                name: 'onEventAddress',
                inputs: [{name: 'value', type: 'address'}],
                outputs: [],
            },
            {
                name: 'deployEvent',
                inputs: [],
                outputs: [],
            },
            {
                name: 'requestEventConfigDetails',
                inputs: [],
                outputs: [],
            },
            {
                name: 'onEventConfigDetails',
                inputs: [
                    {
                        components: [
                            {name: 'eventABI', type: 'bytes'},
                            {name: 'staking', type: 'address'},
                            {name: 'eventInitialBalance', type: 'uint64'},
                            {name: 'eventCode', type: 'cell'},
                        ],
                        name: '_basicConfiguration',
                        type: 'tuple',
                    },
                    {
                        components: [
                            {name: 'chainId', type: 'uint32'},
                            {name: 'eventEmitter', type: 'uint160'},
                            {name: 'eventBlocksToConfirm', type: 'uint16'},
                            {name: 'proxy', type: 'address'},
                            {name: 'startBlockNumber', type: 'uint32'},
                            {name: 'endBlockNumber', type: 'uint32'},
                        ],
                        name: '_networkConfiguration',
                        type: 'tuple',
                    },
                    {name: 'value2', type: 'cell'},
                ],
                outputs: [],
            },
            {
                name: 'requestTokenEventProxyConfig',
                inputs: [],
                outputs: [],
            },
            {
                name: 'requestDexVault',
                inputs: [],
                outputs: [],
            },
            {
                name: 'requestDexPairAddress',
                inputs: [],
                outputs: [],
            },
            {
                name: 'onTokenRoot',
                inputs: [{name: '_tokenRoot', type: 'address'}],
                outputs: [],
            },
            {
                name: 'onWtonWallet',
                inputs: [{name: 'value', type: 'address'}],
                outputs: [],
            },
            {
                name: 'onTokenWallet',
                inputs: [{name: 'value', type: 'address'}],
                outputs: [],
            },
            {
                name: 'onDexVault',
                inputs: [{name: 'value', type: 'address'}],
                outputs: [],
            },
            {
                name: 'onPairAddress',
                inputs: [{name: 'value', type: 'address'}],
                outputs: [],
            },
            {
                name: 'checkEventStatus',
                inputs: [],
                outputs: [],
            },
            {
                name: 'onEthereumEventDetails',
                inputs: [
                    {
                        components: [
                            {
                                components: [
                                    {name: 'eventTransaction', type: 'uint256'},
                                    {name: 'eventIndex', type: 'uint32'},
                                    {name: 'eventData', type: 'cell'},
                                    {name: 'eventBlockNumber', type: 'uint32'},
                                    {name: 'eventBlock', type: 'uint256'},
                                ],
                                name: 'voteData',
                                type: 'tuple',
                            },
                            {name: 'configuration', type: 'address'},
                            {name: 'staking', type: 'address'},
                            {name: 'chainId', type: 'uint32'},
                        ],
                        name: 'value0',
                        type: 'tuple',
                    },
                    {name: '_status', type: 'uint8'},
                    {name: 'value2', type: 'uint256[]'},
                    {name: 'value3', type: 'uint256[]'},
                    {name: 'value4', type: 'uint256[]'},
                    {name: 'value5', type: 'uint128'},
                    {name: 'value6', type: 'address'},
                    {name: 'value7', type: 'cell'},
                    {name: 'value8', type: 'uint32'},
                ],
                outputs: [],
            },
            {
                name: 'onEventConfirmed',
                inputs: [
                    {
                        components: [
                            {
                                components: [
                                    {name: 'eventTransaction', type: 'uint256'},
                                    {name: 'eventIndex', type: 'uint32'},
                                    {name: 'eventData', type: 'cell'},
                                    {name: 'eventBlockNumber', type: 'uint32'},
                                    {name: 'eventBlock', type: 'uint256'},
                                ],
                                name: 'voteData',
                                type: 'tuple',
                            },
                            {name: 'configuration', type: 'address'},
                            {name: 'staking', type: 'address'},
                            {name: 'chainId', type: 'uint32'},
                        ],
                        name: 'eventInitData_',
                        type: 'tuple',
                    },
                    {name: 'value1', type: 'address'},
                ],
                outputs: [],
            },
            {
                name: 'onAcceptTokensMint',
                inputs: [
                    {name: '_tokenRoot', type: 'address'},
                    {name: '_amount', type: 'uint128'},
                    {name: '_remainingGasTo', type: 'address'},
                    {name: '_payload', type: 'cell'},
                ],
                outputs: [],
            },
            {
                name: 'onAcceptTokensBurn',
                inputs: [
                    {name: 'value0', type: 'uint128'},
                    {name: 'value1', type: 'address'},
                    {name: 'value2', type: 'address'},
                    {name: 'value3', type: 'address'},
                    {name: 'value4', type: 'cell'},
                ],
                outputs: [],
            },
            {
                name: 'process',
                inputs: [],
                outputs: [],
            },
            {
                name: 'payDebtForUser',
                inputs: [],
                outputs: [],
            },
            {
                name: 'cancel',
                inputs: [],
                outputs: [],
            },
            {
                name: 'proxyTokensTransfer',
                inputs: [
                    {name: '_tokenWallet', type: 'address'},
                    {name: '_gasValue', type: 'uint128'},
                    {name: '_amount', type: 'uint128'},
                    {name: '_recipient', type: 'address'},
                    {name: '_deployWalletValue', type: 'uint128'},
                    {name: '_remainingGasTo', type: 'address'},
                    {name: '_notify', type: 'bool'},
                    {name: '_payload', type: 'cell'},
                ],
                outputs: [],
            },
            {
                name: 'sendGas',
                inputs: [
                    {name: 'to', type: 'address'},
                    {name: 'value_', type: 'uint128'},
                    {name: 'flag_', type: 'uint16'},
                ],
                outputs: [],
            },
            {
                name: 'revertRemainderGas',
                inputs: [],
                outputs: [],
            },
            {
                name: 'onTokenWalletBalance',
                inputs: [{name: 'balance', type: 'uint128'}],
                outputs: [],
            },
            {
                name: 'retryUnwrap',
                inputs: [],
                outputs: [],
            },
            {
                name: 'setSlippage',
                inputs: [
                    {
                        components: [
                            {name: 'numerator', type: 'uint128'},
                            {name: 'denominator', type: 'uint128'},
                        ],
                        name: 'slippage',
                        type: 'tuple',
                    },
                ],
                outputs: [],
            },
            {
                name: 'retrySwap',
                inputs: [],
                outputs: [],
            },
            {
                name: 'onExpectedSpentAmount',
                inputs: [
                    {name: 'expectedSpentAmount', type: 'uint128'},
                    {name: 'value1', type: 'uint128'},
                ],
                outputs: [],
            },
            {
                name: 'onAcceptTokensTransfer',
                inputs: [
                    {name: 'value0', type: 'address'},
                    {name: 'receivedAmount', type: 'uint128'},
                    {name: 'senderAddress', type: 'address'},
                    {name: 'value3', type: 'address'},
                    {name: 'value4', type: 'address'},
                    {name: 'payload', type: 'cell'},
                ],
                outputs: [],
            },
            {
                name: 'onBounceTokensTransfer',
                inputs: [
                    {name: 'value0', type: 'address'},
                    {name: 'value1', type: 'uint128'},
                    {name: 'value2', type: 'address'},
                ],
                outputs: [],
            },
        ],
        data: [
            {
                components: [
                    {name: 'eventTransaction', type: 'uint256'},
                    {name: 'eventIndex', type: 'uint32'},
                    {name: 'eventData', type: 'cell'},
                    {name: 'eventBlockNumber', type: 'uint32'},
                    {name: 'eventBlock', type: 'uint256'},
                ],
                key: 1,
                name: 'eventVoteData',
                type: 'tuple',
            },
            {key: 2, name: 'configuration', type: 'address'},
        ],
        events: [
            {
                name: 'CreditProcessorDeployed',
                inputs: [
                    {
                        components: [
                            {
                                components: [
                                    {name: 'eventTransaction', type: 'uint256'},
                                    {name: 'eventIndex', type: 'uint32'},
                                    {name: 'eventData', type: 'cell'},
                                    {name: 'eventBlockNumber', type: 'uint32'},
                                    {name: 'eventBlock', type: 'uint256'},
                                ],
                                name: 'eventVoteData',
                                type: 'tuple',
                            },
                            {name: 'configuration', type: 'address'},
                            {name: 'amount', type: 'uint128'},
                            {
                                components: [
                                    {name: 'numerator', type: 'uint128'},
                                    {name: 'denominator', type: 'uint128'},
                                ],
                                name: 'slippage',
                                type: 'tuple',
                            },
                            {name: 'dexRoot', type: 'address'},
                            {name: 'wtonVault', type: 'address'},
                            {name: 'wtonRoot', type: 'address'},
                            {name: 'state', type: 'uint8'},
                            {name: 'eventState', type: 'uint8'},
                            {name: 'deployer', type: 'address'},
                            {name: 'debt', type: 'uint128'},
                            {name: 'fee', type: 'uint128'},
                            {name: 'eventAddress', type: 'address'},
                            {name: 'tokenRoot', type: 'address'},
                            {name: 'tokenWallet', type: 'address'},
                            {name: 'wtonWallet', type: 'address'},
                            {name: 'dexPair', type: 'address'},
                            {name: 'dexVault', type: 'address'},
                            {name: 'swapAttempt', type: 'uint64'},
                            {name: 'swapAmount', type: 'uint128'},
                            {name: 'unwrapAmount', type: 'uint128'},
                        ],
                        name: 'details',
                        type: 'tuple',
                    },
                ],
                outputs: [],
            },
            {
                name: 'CreditProcessorStateChanged',
                inputs: [
                    {name: 'from', type: 'uint8'},
                    {name: 'to', type: 'uint8'},
                    {
                        components: [
                            {
                                components: [
                                    {name: 'eventTransaction', type: 'uint256'},
                                    {name: 'eventIndex', type: 'uint32'},
                                    {name: 'eventData', type: 'cell'},
                                    {name: 'eventBlockNumber', type: 'uint32'},
                                    {name: 'eventBlock', type: 'uint256'},
                                ],
                                name: 'eventVoteData',
                                type: 'tuple',
                            },
                            {name: 'configuration', type: 'address'},
                            {name: 'amount', type: 'uint128'},
                            {
                                components: [
                                    {name: 'numerator', type: 'uint128'},
                                    {name: 'denominator', type: 'uint128'},
                                ],
                                name: 'slippage',
                                type: 'tuple',
                            },
                            {name: 'dexRoot', type: 'address'},
                            {name: 'wtonVault', type: 'address'},
                            {name: 'wtonRoot', type: 'address'},
                            {name: 'state', type: 'uint8'},
                            {name: 'eventState', type: 'uint8'},
                            {name: 'deployer', type: 'address'},
                            {name: 'debt', type: 'uint128'},
                            {name: 'fee', type: 'uint128'},
                            {name: 'eventAddress', type: 'address'},
                            {name: 'tokenRoot', type: 'address'},
                            {name: 'tokenWallet', type: 'address'},
                            {name: 'wtonWallet', type: 'address'},
                            {name: 'dexPair', type: 'address'},
                            {name: 'dexVault', type: 'address'},
                            {name: 'swapAttempt', type: 'uint64'},
                            {name: 'swapAmount', type: 'uint128'},
                            {name: 'unwrapAmount', type: 'uint128'},
                        ],
                        name: 'details',
                        type: 'tuple',
                    },
                ],
                outputs: [],
            },
            {
                name: 'DeriveEventAddressCalled',
                inputs: [{name: 'sender', type: 'address'}],
                outputs: [],
            },
            {
                name: 'RequestTokenEventProxyConfigCalled',
                inputs: [{name: 'sender', type: 'address'}],
                outputs: [],
            },
            {
                name: 'RequestDexPairAddressCalled',
                inputs: [{name: 'sender', type: 'address'}],
                outputs: [],
            },
            {
                name: 'RequestDexVaultCalled',
                inputs: [{name: 'sender', type: 'address'}],
                outputs: [],
            },
            {
                name: 'RequestEventConfigDetailsCalled',
                inputs: [{name: 'sender', type: 'address'}],
                outputs: [],
            },
            {
                name: 'CheckEventStatusCalled',
                inputs: [{name: 'sender', type: 'address'}],
                outputs: [],
            },
            {
                name: 'GasDonation',
                inputs: [
                    {name: 'sender', type: 'address'},
                    {name: 'value', type: 'uint128'},
                ],
                outputs: [],
            },
            {
                name: 'DeployEventCalled',
                inputs: [{name: 'sender', type: 'address'}],
                outputs: [],
            },
            {
                name: 'RetryUnwrapCalled',
                inputs: [{name: 'sender', type: 'address'}],
                outputs: [],
            },
            {
                name: 'RetrySwapCalled',
                inputs: [{name: 'sender', type: 'address'}],
                outputs: [],
            },
            {
                name: 'SetSlippageCalled',
                inputs: [{name: 'sender', type: 'address'}],
                outputs: [],
            },
            {
                name: 'ProcessCalled',
                inputs: [{name: 'sender', type: 'address'}],
                outputs: [],
            },
            {
                name: 'CancelCalled',
                inputs: [{name: 'sender', type: 'address'}],
                outputs: [],
            },
            {
                name: 'RevertRemainderGasCalled',
                inputs: [{name: 'sender', type: 'address'}],
                outputs: [],
            },
        ],
        fields: [
            {name: '_pubkey', type: 'uint256'},
            {name: '_timestamp', type: 'uint64'},
            {name: '_constructorFlag', type: 'bool'},
            {
                components: [
                    {name: 'eventTransaction', type: 'uint256'},
                    {name: 'eventIndex', type: 'uint32'},
                    {name: 'eventData', type: 'cell'},
                    {name: 'eventBlockNumber', type: 'uint32'},
                    {name: 'eventBlock', type: 'uint256'},
                ],
                name: 'eventVoteData',
                type: 'tuple',
            },
            {name: 'configuration', type: 'address'},
            {
                components: [
                    {name: 'amount', type: 'uint128'},
                    {name: 'user', type: 'address'},
                    {name: 'creditor', type: 'address'},
                    {name: 'recipient', type: 'address'},
                    {name: 'tokenAmount', type: 'uint128'},
                    {name: 'tonAmount', type: 'uint128'},
                    {name: 'swapType', type: 'uint8'},
                    {
                        components: [
                            {name: 'numerator', type: 'uint128'},
                            {name: 'denominator', type: 'uint128'},
                        ],
                        name: 'slippage',
                        type: 'tuple',
                    },
                    {name: 'layer3', type: 'cell'},
                ],
                name: 'eventData',
                type: 'tuple',
            },
            {name: 'amount', type: 'uint128'},
            {
                components: [
                    {name: 'numerator', type: 'uint128'},
                    {name: 'denominator', type: 'uint128'},
                ],
                name: 'slippage_',
                type: 'tuple',
            },
            {name: 'state', type: 'uint8'},
            {name: 'prevState', type: 'uint8'},
            {name: 'eventState', type: 'uint8'},
            {name: 'deployer', type: 'address'},
            {name: 'debt', type: 'uint128'},
            {name: 'fee_', type: 'uint128'},
            {name: 'eventAddress', type: 'address'},
            {name: 'eventProxy', type: 'address'},
            {name: 'eventInitialBalance', type: 'uint128'},
            {name: 'tokenRoot', type: 'address'},
            {name: 'tokenWallet', type: 'address'},
            {name: 'wtonWallet', type: 'address'},
            {name: 'dexPair', type: 'address'},
            {name: 'dexVault', type: 'address'},
            {name: 'swapAttempt', type: 'uint64'},
            {name: 'swapAmount', type: 'uint128'},
            {name: 'unwrapAmount', type: 'uint128'},
        ],
    } as const;

    static HiddenBridgeStrategyFactory = {
        'ABI version': 2,
        version: '2.2',
        header: ['pubkey', 'time', 'expire'],
        functions: [
            {
                name: 'constructor',
                inputs: [{name: 'code', type: 'cell'}],
                outputs: [],
            },
            {
                name: 'deployStrategy',
                inputs: [{name: 'tokenRoot', type: 'address'}],
                outputs: [],
            },
            {
                name: 'buildLayer3',
                inputs: [
                    {name: 'id', type: 'uint32'},
                    {name: 'proxy', type: 'address'},
                    {name: 'evmAddress', type: 'uint160'},
                    {name: 'chainId', type: 'uint32'},
                ],
                outputs: [{name: 'value0', type: 'cell'}],
            },
            {
                name: 'getStrategyAddress',
                inputs: [
                    {name: 'answerId', type: 'uint32'},
                    {name: 'tokenRoot', type: 'address'},
                ],
                outputs: [{name: 'value0', type: 'address'}],
            },
            {
                name: '_randomNonce',
                inputs: [],
                outputs: [{name: '_randomNonce', type: 'uint256'}],
            },
            {
                name: 'strategyCode',
                inputs: [],
                outputs: [{name: 'strategyCode', type: 'cell'}],
            },
        ],
        data: [{key: 1, name: '_randomNonce', type: 'uint256'}],
        events: [],
        fields: [
            {name: '_pubkey', type: 'uint256'},
            {name: '_timestamp', type: 'uint64'},
            {name: '_constructorFlag', type: 'bool'},
            {name: '_randomNonce', type: 'uint256'},
            {name: 'strategyCode', type: 'cell'},
        ],
    } as const;

    static HiddenBridgeStrategy = {
        'ABI version': 2,
        version: '2.2',
        header: ['pubkey', 'time', 'expire'],
        functions: [
            {
                name: 'constructor',
                inputs: [{name: 'deployer_', type: 'address'}],
                outputs: [],
            },
            {
                name: 'getDetails',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [
                    {name: 'factory_', type: 'address'},
                    {name: 'tokenRoot_', type: 'address'},
                    {name: 'tokenWallet_', type: 'address'},
                ],
            },
            {
                name: 'onTokenWallet',
                inputs: [{name: 'wallet', type: 'address'}],
                outputs: [],
            },
            {
                name: 'onAcceptTokensTransfer',
                inputs: [
                    {name: '_tokenRoot', type: 'address'},
                    {name: 'amount', type: 'uint128'},
                    {name: 'senderAddress', type: 'address'},
                    {name: 'senderWallet', type: 'address'},
                    {name: 'originalGasTo', type: 'address'},
                    {name: 'payload', type: 'cell'},
                ],
                outputs: [],
            },
            {
                name: 'buildLayer3',
                inputs: [
                    {name: 'id', type: 'uint32'},
                    {name: 'proxy', type: 'address'},
                    {name: 'evmAddress', type: 'uint160'},
                    {name: 'chainId', type: 'uint32'},
                ],
                outputs: [{name: 'value0', type: 'cell'}],
            },
            {
                name: 'onReceiveTONsFromBridgeCallback',
                inputs: [
                    {
                        components: [
                            {name: 'amount', type: 'uint128'},
                            {name: 'user', type: 'address'},
                            {name: 'creditor', type: 'address'},
                            {name: 'recipient', type: 'address'},
                            {name: 'tokenAmount', type: 'uint128'},
                            {name: 'tonAmount', type: 'uint128'},
                            {name: 'swapType', type: 'uint8'},
                            {
                                components: [
                                    {name: 'numerator', type: 'uint128'},
                                    {name: 'denominator', type: 'uint128'},
                                ],
                                name: 'slippage',
                                type: 'tuple',
                            },
                            {name: 'layer3', type: 'cell'},
                        ],
                        name: 'decodedEventData',
                        type: 'tuple',
                    },
                ],
                outputs: [],
            },
            {
                name: 'factory',
                inputs: [],
                outputs: [{name: 'factory', type: 'address'}],
            },
            {
                name: 'tokenRoot',
                inputs: [],
                outputs: [{name: 'tokenRoot', type: 'address'}],
            },
            {
                name: 'tokenWallet',
                inputs: [],
                outputs: [{name: 'tokenWallet', type: 'address'}],
            },
        ],
        data: [
            {key: 1, name: 'factory', type: 'address'},
            {key: 2, name: 'tokenRoot', type: 'address'},
        ],
        events: [
            {
                name: 'BurnTokens',
                inputs: [
                    {name: 'id', type: 'uint32'},
                    {name: 'user', type: 'address'},
                    {name: 'processor', type: 'address'},
                    {name: 'amount', type: 'uint128'},
                    {name: 'evmAddress', type: 'uint160'},
                    {name: 'chainId', type: 'uint32'},
                ],
                outputs: [],
            },
        ],
        fields: [
            {name: '_pubkey', type: 'uint256'},
            {name: '_timestamp', type: 'uint64'},
            {name: '_constructorFlag', type: 'bool'},
            {name: 'factory', type: 'address'},
            {name: 'tokenRoot', type: 'address'},
            {name: 'tokenWallet', type: 'address'},
            {name: 'deployer', type: 'address'},
        ],
    } as const;

    static CreditFactory = {
        'ABI version': 2,
        version: '2.2',
        header: ['pubkey', 'time', 'expire'],
        functions: [
            {
                name: 'constructor',
                inputs: [
                    {name: 'admin_', type: 'address'},
                    {name: 'owners_', type: 'uint256[]'},
                    {name: 'fee', type: 'uint128'},
                ],
                outputs: [],
            },
            {
                name: 'setCreditProcessorCode',
                inputs: [{name: 'value', type: 'cell'}],
                outputs: [],
            },
            {
                name: 'getCreditProcessorCode',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [{name: 'value0', type: 'cell'}],
            },
            {
                name: 'setFee',
                inputs: [{name: 'value', type: 'uint128'}],
                outputs: [],
            },
            {
                name: 'getDetails',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [
                    {
                        components: [
                            {name: 'owners', type: 'uint256[]'},
                            {name: 'fee', type: 'uint128'},
                        ],
                        name: 'value0',
                        type: 'tuple',
                    },
                ],
            },
            {
                name: 'deployProcessorForUser',
                inputs: [
                    {
                        components: [
                            {name: 'eventTransaction', type: 'uint256'},
                            {name: 'eventIndex', type: 'uint32'},
                            {name: 'eventData', type: 'cell'},
                            {name: 'eventBlockNumber', type: 'uint32'},
                            {name: 'eventBlock', type: 'uint256'},
                        ],
                        name: 'eventVoteData',
                        type: 'tuple',
                    },
                    {name: 'configuration', type: 'address'},
                ],
                outputs: [],
            },
            {
                name: 'deployProcessor',
                inputs: [
                    {
                        components: [
                            {name: 'eventTransaction', type: 'uint256'},
                            {name: 'eventIndex', type: 'uint32'},
                            {name: 'eventData', type: 'cell'},
                            {name: 'eventBlockNumber', type: 'uint32'},
                            {name: 'eventBlock', type: 'uint256'},
                        ],
                        name: 'eventVoteData',
                        type: 'tuple',
                    },
                    {name: 'configuration', type: 'address'},
                    {name: 'grams', type: 'uint128'},
                ],
                outputs: [],
            },
            {
                name: 'getCreditProcessorAddress',
                inputs: [
                    {name: 'answerId', type: 'uint32'},
                    {
                        components: [
                            {name: 'eventTransaction', type: 'uint256'},
                            {name: 'eventIndex', type: 'uint32'},
                            {name: 'eventData', type: 'cell'},
                            {name: 'eventBlockNumber', type: 'uint32'},
                            {name: 'eventBlock', type: 'uint256'},
                        ],
                        name: 'eventVoteData',
                        type: 'tuple',
                    },
                    {name: 'configuration', type: 'address'},
                ],
                outputs: [{name: 'value0', type: 'address'}],
            },
            {
                name: 'proxyTokensTransfer',
                inputs: [
                    {name: '_tokenWallet', type: 'address'},
                    {name: '_gasValue', type: 'uint128'},
                    {name: '_amount', type: 'uint128'},
                    {name: '_recipient', type: 'address'},
                    {name: '_deployWalletValue', type: 'uint128'},
                    {name: '_remainingGasTo', type: 'address'},
                    {name: '_notify', type: 'bool'},
                    {name: '_payload', type: 'cell'},
                ],
                outputs: [],
            },
            {
                name: 'sendGas',
                inputs: [
                    {name: 'to', type: 'address'},
                    {name: 'value_', type: 'uint128'},
                    {name: 'flag_', type: 'uint16'},
                ],
                outputs: [],
            },
            {
                name: 'runRevertRemainderGas',
                inputs: [{name: 'creditProcessor', type: 'address'}],
                outputs: [],
            },
            {
                name: 'runProcess',
                inputs: [{name: 'creditProcessor', type: 'address'}],
                outputs: [],
            },
            {
                name: 'runDeriveEventAddress',
                inputs: [
                    {name: 'creditProcessor', type: 'address'},
                    {name: 'grams', type: 'uint128'},
                ],
                outputs: [],
            },
            {
                name: 'runRequestEventConfigDetails',
                inputs: [
                    {name: 'creditProcessor', type: 'address'},
                    {name: 'grams', type: 'uint128'},
                ],
                outputs: [],
            },
            {
                name: 'runDeployEvent',
                inputs: [
                    {name: 'creditProcessor', type: 'address'},
                    {name: 'grams', type: 'uint128'},
                ],
                outputs: [],
            },
            {
                name: 'runRequestTokenEventProxyConfig',
                inputs: [
                    {name: 'creditProcessor', type: 'address'},
                    {name: 'grams', type: 'uint128'},
                ],
                outputs: [],
            },
            {
                name: 'runRequestDexPairAddress',
                inputs: [
                    {name: 'creditProcessor', type: 'address'},
                    {name: 'grams', type: 'uint128'},
                ],
                outputs: [],
            },
            {
                name: 'runRequestDexVault',
                inputs: [
                    {name: 'creditProcessor', type: 'address'},
                    {name: 'grams', type: 'uint128'},
                ],
                outputs: [],
            },
            {
                name: 'runCheckEventStatus',
                inputs: [
                    {name: 'creditProcessor', type: 'address'},
                    {name: 'grams', type: 'uint128'},
                ],
                outputs: [],
            },
            {
                name: 'runRetryUnwrap',
                inputs: [
                    {name: 'creditProcessor', type: 'address'},
                    {name: 'grams', type: 'uint128'},
                ],
                outputs: [],
            },
            {
                name: 'runRetrySwap',
                inputs: [
                    {name: 'creditProcessor', type: 'address'},
                    {name: 'grams', type: 'uint128'},
                ],
                outputs: [],
            },
            {
                name: 'runSetSlippage',
                inputs: [
                    {name: 'creditProcessor', type: 'address'},
                    {name: 'grams', type: 'uint128'},
                    {
                        components: [
                            {name: 'numerator', type: 'uint128'},
                            {name: 'denominator', type: 'uint128'},
                        ],
                        name: 'slippage',
                        type: 'tuple',
                    },
                ],
                outputs: [],
            },
            {
                name: 'upgrade',
                inputs: [{name: 'code', type: 'cell'}],
                outputs: [],
            },
            {
                name: 'addOwner',
                inputs: [{name: 'newOwner', type: 'uint256'}],
                outputs: [],
            },
            {
                name: 'resetOwners',
                inputs: [],
                outputs: [],
            },
            {
                name: '_randomNonce',
                inputs: [],
                outputs: [{name: '_randomNonce', type: 'uint256'}],
            },
            {
                name: 'admin',
                inputs: [],
                outputs: [{name: 'admin', type: 'address'}],
            },
            {
                name: 'owners',
                inputs: [],
                outputs: [{name: 'owners', type: 'uint256[]'}],
            },
            {
                name: 'version',
                inputs: [],
                outputs: [{name: 'version', type: 'uint32'}],
            },
        ],
        data: [{key: 1, name: '_randomNonce', type: 'uint256'}],
        events: [
            {
                name: 'OwnerAdded',
                inputs: [{name: 'newOwner', type: 'uint256'}],
                outputs: [],
            },
            {
                name: 'FeeChanged',
                inputs: [{name: 'value', type: 'uint128'}],
                outputs: [],
            },
            {
                name: 'CreditProcessorCodeChanged',
                inputs: [{name: 'hash', type: 'uint256'}],
                outputs: [],
            },
            {
                name: 'DeployProcessorForUserCalled',
                inputs: [
                    {
                        components: [
                            {name: 'eventTransaction', type: 'uint256'},
                            {name: 'eventIndex', type: 'uint32'},
                            {name: 'eventData', type: 'cell'},
                            {name: 'eventBlockNumber', type: 'uint32'},
                            {name: 'eventBlock', type: 'uint256'},
                        ],
                        name: 'eventVoteData',
                        type: 'tuple',
                    },
                    {name: 'configuration', type: 'address'},
                    {name: 'sender', type: 'address'},
                ],
                outputs: [],
            },
        ],
        fields: [
            {name: '_pubkey', type: 'uint256'},
            {name: '_timestamp', type: 'uint64'},
            {name: '_constructorFlag', type: 'bool'},
            {name: '_randomNonce', type: 'uint256'},
            {name: 'admin', type: 'address'},
            {name: 'owners', type: 'uint256[]'},
            {name: 'version', type: 'uint32'},
            {name: 'fee_', type: 'uint128'},
            {name: 'creditProcessorCode', type: 'cell'},
        ],
    } as const;
}

export class DexAbi {
    static Root = {
        'ABI version': 2,
        version: '2.2',
        header: ['pubkey', 'time', 'expire'],
        functions: [
            {
                name: 'constructor',
                inputs: [
                    {name: 'initial_owner', type: 'address'},
                    {name: 'initial_vault', type: 'address'},
                ],
                outputs: [],
            },
            {
                name: 'installPlatformOnce',
                inputs: [{name: 'code', type: 'cell'}],
                outputs: [],
            },
            {
                name: 'installOrUpdateAccountCode',
                inputs: [{name: 'code', type: 'cell'}],
                outputs: [],
            },
            {
                name: 'installOrUpdatePairCode',
                inputs: [{name: 'code', type: 'cell'}],
                outputs: [],
            },
            {
                name: 'getAccountVersion',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [{name: 'value0', type: 'uint32'}],
            },
            {
                name: 'getPairVersion',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [{name: 'value0', type: 'uint32'}],
            },
            {
                name: 'setVaultOnce',
                inputs: [{name: 'new_vault', type: 'address'}],
                outputs: [],
            },
            {
                name: 'getVault',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [{name: 'value0', type: 'address'}],
            },
            {
                name: 'setActive',
                inputs: [{name: 'new_active', type: 'bool'}],
                outputs: [],
            },
            {
                name: 'isActive',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [{name: 'value0', type: 'bool'}],
            },
            {
                name: 'upgrade',
                inputs: [{name: 'code', type: 'cell'}],
                outputs: [],
            },
            {
                name: 'requestUpgradeAccount',
                inputs: [
                    {name: 'current_version', type: 'uint32'},
                    {name: 'send_gas_to', type: 'address'},
                    {name: 'account_owner', type: 'address'},
                ],
                outputs: [],
            },
            {
                name: 'forceUpgradeAccount',
                inputs: [
                    {name: 'account_owner', type: 'address'},
                    {name: 'send_gas_to', type: 'address'},
                ],
                outputs: [],
            },
            {
                name: 'upgradePair',
                inputs: [
                    {name: 'left_root', type: 'address'},
                    {name: 'right_root', type: 'address'},
                    {name: 'send_gas_to', type: 'address'},
                ],
                outputs: [],
            },
            {
                name: 'resetGas',
                inputs: [{name: 'receiver', type: 'address'}],
                outputs: [],
            },
            {
                name: 'resetTargetGas',
                inputs: [
                    {name: 'target', type: 'address'},
                    {name: 'receiver', type: 'address'},
                ],
                outputs: [],
            },
            {
                name: 'getOwner',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [{name: 'dex_owner', type: 'address'}],
            },
            {
                name: 'getPendingOwner',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [{name: 'dex_pending_owner', type: 'address'}],
            },
            {
                name: 'transferOwner',
                inputs: [{name: 'new_owner', type: 'address'}],
                outputs: [],
            },
            {
                name: 'acceptOwner',
                inputs: [],
                outputs: [],
            },
            {
                name: 'getExpectedAccountAddress',
                inputs: [
                    {name: 'answerId', type: 'uint32'},
                    {name: 'account_owner', type: 'address'},
                ],
                outputs: [{name: 'value0', type: 'address'}],
            },
            {
                name: 'getExpectedPairAddress',
                inputs: [
                    {name: 'answerId', type: 'uint32'},
                    {name: 'left_root', type: 'address'},
                    {name: 'right_root', type: 'address'},
                ],
                outputs: [{name: 'value0', type: 'address'}],
            },
            {
                name: 'deployAccount',
                inputs: [
                    {name: 'account_owner', type: 'address'},
                    {name: 'send_gas_to', type: 'address'},
                ],
                outputs: [],
            },
            {
                name: 'deployPair',
                inputs: [
                    {name: 'left_root', type: 'address'},
                    {name: 'right_root', type: 'address'},
                    {name: 'send_gas_to', type: 'address'},
                ],
                outputs: [],
            },
            {
                name: 'onPairCreated',
                inputs: [
                    {name: 'left_root', type: 'address'},
                    {name: 'right_root', type: 'address'},
                    {name: 'send_gas_to', type: 'address'},
                ],
                outputs: [],
            },
            {
                name: 'platform_code',
                inputs: [],
                outputs: [{name: 'platform_code', type: 'cell'}],
            },
            {
                name: 'account_code',
                inputs: [],
                outputs: [{name: 'account_code', type: 'cell'}],
            },
            {
                name: 'pair_code',
                inputs: [],
                outputs: [{name: 'pair_code', type: 'cell'}],
            },
        ],
        data: [{key: 1, name: '_nonce', type: 'uint32'}],
        events: [
            {
                name: 'AccountCodeUpgraded',
                inputs: [{name: 'version', type: 'uint32'}],
                outputs: [],
            },
            {
                name: 'PairCodeUpgraded',
                inputs: [{name: 'version', type: 'uint32'}],
                outputs: [],
            },
            {
                name: 'RootCodeUpgraded',
                inputs: [],
                outputs: [],
            },
            {
                name: 'ActiveUpdated',
                inputs: [{name: 'new_active', type: 'bool'}],
                outputs: [],
            },
            {
                name: 'RequestedPairUpgrade',
                inputs: [
                    {name: 'left_root', type: 'address'},
                    {name: 'right_root', type: 'address'},
                ],
                outputs: [],
            },
            {
                name: 'RequestedForceAccountUpgrade',
                inputs: [{name: 'account_owner', type: 'address'}],
                outputs: [],
            },
            {
                name: 'RequestedOwnerTransfer',
                inputs: [
                    {name: 'old_owner', type: 'address'},
                    {name: 'new_owner', type: 'address'},
                ],
                outputs: [],
            },
            {
                name: 'OwnerTransferAccepted',
                inputs: [
                    {name: 'old_owner', type: 'address'},
                    {name: 'new_owner', type: 'address'},
                ],
                outputs: [],
            },
            {
                name: 'NewPairCreated',
                inputs: [
                    {name: 'left_root', type: 'address'},
                    {name: 'right_root', type: 'address'},
                ],
                outputs: [],
            },
        ],
        fields: [
            {name: '_pubkey', type: 'uint256'},
            {name: '_timestamp', type: 'uint64'},
            {name: '_constructorFlag', type: 'bool'},
            {name: 'platform_code', type: 'cell'},
            {name: '_nonce', type: 'uint32'},
            {name: 'account_code', type: 'cell'},
            {name: 'account_version', type: 'uint32'},
            {name: 'pair_code', type: 'cell'},
            {name: 'pair_version', type: 'uint32'},
            {name: 'active', type: 'bool'},
            {name: 'owner', type: 'address'},
            {name: 'vault', type: 'address'},
            {name: 'pending_owner', type: 'address'},
        ],
    } as const;

    static Pair = {
        'ABI version': 2,
        version: '2.2',
        header: ['pubkey', 'time', 'expire'],
        functions: [
            {
                name: 'constructor',
                inputs: [],
                outputs: [],
            },
            {
                name: 'resetGas',
                inputs: [{name: 'receiver', type: 'address'}],
                outputs: [],
            },
            {
                name: 'getRoot',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [{name: 'dex_root', type: 'address'}],
            },
            {
                name: 'getTokenRoots',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [
                    {name: 'left', type: 'address'},
                    {name: 'right', type: 'address'},
                    {name: 'lp', type: 'address'},
                ],
            },
            {
                name: 'getTokenWallets',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [
                    {name: 'left', type: 'address'},
                    {name: 'right', type: 'address'},
                    {name: 'lp', type: 'address'},
                ],
            },
            {
                name: 'getVersion',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [{name: 'version', type: 'uint32'}],
            },
            {
                name: 'getVault',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [{name: 'dex_vault', type: 'address'}],
            },
            {
                name: 'getVaultWallets',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [
                    {name: 'left', type: 'address'},
                    {name: 'right', type: 'address'},
                ],
            },
            {
                name: 'setFeeParams',
                inputs: [
                    {name: 'numerator', type: 'uint16'},
                    {name: 'denominator', type: 'uint16'},
                ],
                outputs: [],
            },
            {
                name: 'getFeeParams',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [
                    {name: 'numerator', type: 'uint16'},
                    {name: 'denominator', type: 'uint16'},
                ],
            },
            {
                name: 'isActive',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [{name: 'value0', type: 'bool'}],
            },
            {
                name: 'getBalances',
                inputs: [{name: 'answerId', type: 'uint32'}],
                outputs: [
                    {
                        components: [
                            {name: 'lp_supply', type: 'uint128'},
                            {name: 'left_balance', type: 'uint128'},
                            {name: 'right_balance', type: 'uint128'},
                        ],
                        name: 'value0',
                        type: 'tuple',
                    },
                ],
            },
            {
                name: 'buildExchangePayload',
                inputs: [
                    {name: 'id', type: 'uint64'},
                    {name: 'deploy_wallet_grams', type: 'uint128'},
                    {name: 'expected_amount', type: 'uint128'},
                ],
                outputs: [{name: 'value0', type: 'cell'}],
            },
            {
                name: 'buildDepositLiquidityPayload',
                inputs: [
                    {name: 'id', type: 'uint64'},
                    {name: 'deploy_wallet_grams', type: 'uint128'},
                ],
                outputs: [{name: 'value0', type: 'cell'}],
            },
            {
                name: 'buildWithdrawLiquidityPayload',
                inputs: [
                    {name: 'id', type: 'uint64'},
                    {name: 'deploy_wallet_grams', type: 'uint128'},
                ],
                outputs: [{name: 'value0', type: 'cell'}],
            },
            {
                name: 'buildCrossPairExchangePayload',
                inputs: [
                    {name: 'id', type: 'uint64'},
                    {name: 'deploy_wallet_grams', type: 'uint128'},
                    {name: 'expected_amount', type: 'uint128'},
                    {
                        components: [
                            {name: 'amount', type: 'uint128'},
                            {name: 'root', type: 'address'},
                        ],
                        name: 'steps',
                        type: 'tuple[]',
                    },
                ],
                outputs: [{name: 'value0', type: 'cell'}],
            },
            {
                name: 'onAcceptTokensTransfer',
                inputs: [
                    {name: 'token_root', type: 'address'},
                    {name: 'tokens_amount', type: 'uint128'},
                    {name: 'sender_address', type: 'address'},
                    {name: 'sender_wallet', type: 'address'},
                    {name: 'original_gas_to', type: 'address'},
                    {name: 'payload', type: 'cell'},
                ],
                outputs: [],
            },
            {
                name: 'expectedDepositLiquidity',
                inputs: [
                    {name: 'answerId', type: 'uint32'},
                    {name: 'left_amount', type: 'uint128'},
                    {name: 'right_amount', type: 'uint128'},
                    {name: 'auto_change', type: 'bool'},
                ],
                outputs: [
                    {
                        components: [
                            {name: 'step_1_left_deposit', type: 'uint128'},
                            {name: 'step_1_right_deposit', type: 'uint128'},
                            {name: 'step_1_lp_reward', type: 'uint128'},
                            {name: 'step_2_left_to_right', type: 'bool'},
                            {name: 'step_2_right_to_left', type: 'bool'},
                            {name: 'step_2_spent', type: 'uint128'},
                            {name: 'step_2_fee', type: 'uint128'},
                            {name: 'step_2_received', type: 'uint128'},
                            {name: 'step_3_left_deposit', type: 'uint128'},
                            {name: 'step_3_right_deposit', type: 'uint128'},
                            {name: 'step_3_lp_reward', type: 'uint128'},
                        ],
                        name: 'value0',
                        type: 'tuple',
                    },
                ],
            },
            {
                name: 'depositLiquidity',
                inputs: [
                    {name: 'call_id', type: 'uint64'},
                    {name: 'left_amount', type: 'uint128'},
                    {name: 'right_amount', type: 'uint128'},
                    {name: 'expected_lp_root', type: 'address'},
                    {name: 'auto_change', type: 'bool'},
                    {name: 'account_owner', type: 'address'},
                    {name: 'value6', type: 'uint32'},
                    {name: 'send_gas_to', type: 'address'},
                ],
                outputs: [],
            },
            {
                name: 'expectedWithdrawLiquidity',
                inputs: [
                    {name: 'answerId', type: 'uint32'},
                    {name: 'lp_amount', type: 'uint128'},
                ],
                outputs: [
                    {name: 'expected_left_amount', type: 'uint128'},
                    {name: 'expected_right_amount', type: 'uint128'},
                ],
            },
            {
                name: 'withdrawLiquidity',
                inputs: [
                    {name: 'call_id', type: 'uint64'},
                    {name: 'lp_amount', type: 'uint128'},
                    {name: 'expected_lp_root', type: 'address'},
                    {name: 'account_owner', type: 'address'},
                    {name: 'value4', type: 'uint32'},
                    {name: 'send_gas_to', type: 'address'},
                ],
                outputs: [],
            },
            {
                name: 'expectedExchange',
                inputs: [
                    {name: 'answerId', type: 'uint32'},
                    {name: 'amount', type: 'uint128'},
                    {name: 'spent_token_root', type: 'address'},
                ],
                outputs: [
                    {name: 'expected_amount', type: 'uint128'},
                    {name: 'expected_fee', type: 'uint128'},
                ],
            },
            {
                name: 'expectedSpendAmount',
                inputs: [
                    {name: 'answerId', type: 'uint32'},
                    {name: 'receive_amount', type: 'uint128'},
                    {name: 'receive_token_root', type: 'address'},
                ],
                outputs: [
                    {name: 'expected_amount', type: 'uint128'},
                    {name: 'expected_fee', type: 'uint128'},
                ],
            },
            {
                name: 'exchange',
                inputs: [
                    {name: 'call_id', type: 'uint64'},
                    {name: 'spent_amount', type: 'uint128'},
                    {name: 'spent_token_root', type: 'address'},
                    {name: 'receive_token_root', type: 'address'},
                    {name: 'expected_amount', type: 'uint128'},
                    {name: 'account_owner', type: 'address'},
                    {name: 'value6', type: 'uint32'},
                    {name: 'send_gas_to', type: 'address'},
                ],
                outputs: [],
            },
            {
                name: 'crossPairExchange',
                inputs: [
                    {name: 'id', type: 'uint64'},
                    {name: 'value1', type: 'uint32'},
                    {name: 'prev_pair_left_root', type: 'address'},
                    {name: 'prev_pair_right_root', type: 'address'},
                    {name: 'spent_token_root', type: 'address'},
                    {name: 'spent_amount', type: 'uint128'},
                    {name: 'sender_address', type: 'address'},
                    {name: 'original_gas_to', type: 'address'},
                    {name: 'deploy_wallet_grams', type: 'uint128'},
                    {name: 'payload', type: 'cell'},
                ],
                outputs: [],
            },
            {
                name: 'checkPair',
                inputs: [
                    {name: 'account_owner', type: 'address'},
                    {name: 'value1', type: 'uint32'},
                ],
                outputs: [],
            },
            {
                name: 'upgrade',
                inputs: [
                    {name: 'code', type: 'cell'},
                    {name: 'new_version', type: 'uint32'},
                    {name: 'send_gas_to', type: 'address'},
                ],
                outputs: [],
            },
            {
                name: 'onTokenWallet',
                inputs: [{name: 'wallet', type: 'address'}],
                outputs: [],
            },
            {
                name: 'onVaultTokenWallet',
                inputs: [{name: 'wallet', type: 'address'}],
                outputs: [],
            },
            {
                name: 'liquidityTokenRootDeployed',
                inputs: [
                    {name: 'lp_root_', type: 'address'},
                    {name: 'send_gas_to', type: 'address'},
                ],
                outputs: [],
            },
            {
                name: 'liquidityTokenRootNotDeployed',
                inputs: [
                    {name: 'value0', type: 'address'},
                    {name: 'send_gas_to', type: 'address'},
                ],
                outputs: [],
            },
            {
                name: 'platform_code',
                inputs: [],
                outputs: [{name: 'platform_code', type: 'cell'}],
            },
            {
                name: 'lp_wallet',
                inputs: [],
                outputs: [{name: 'lp_wallet', type: 'address'}],
            },
            {
                name: 'left_wallet',
                inputs: [],
                outputs: [{name: 'left_wallet', type: 'address'}],
            },
            {
                name: 'right_wallet',
                inputs: [],
                outputs: [{name: 'right_wallet', type: 'address'}],
            },
            {
                name: 'vault_left_wallet',
                inputs: [],
                outputs: [{name: 'vault_left_wallet', type: 'address'}],
            },
            {
                name: 'vault_right_wallet',
                inputs: [],
                outputs: [{name: 'vault_right_wallet', type: 'address'}],
            },
            {
                name: 'lp_root',
                inputs: [],
                outputs: [{name: 'lp_root', type: 'address'}],
            },
            {
                name: 'lp_supply',
                inputs: [],
                outputs: [{name: 'lp_supply', type: 'uint128'}],
            },
            {
                name: 'left_balance',
                inputs: [],
                outputs: [{name: 'left_balance', type: 'uint128'}],
            },
            {
                name: 'right_balance',
                inputs: [],
                outputs: [{name: 'right_balance', type: 'uint128'}],
            },
        ],
        data: [],
        events: [
            {
                name: 'PairCodeUpgraded',
                inputs: [{name: 'version', type: 'uint32'}],
                outputs: [],
            },
            {
                name: 'FeesParamsUpdated',
                inputs: [
                    {name: 'numerator', type: 'uint16'},
                    {name: 'denominator', type: 'uint16'},
                ],
                outputs: [],
            },
            {
                name: 'DepositLiquidity',
                inputs: [
                    {name: 'left', type: 'uint128'},
                    {name: 'right', type: 'uint128'},
                    {name: 'lp', type: 'uint128'},
                ],
                outputs: [],
            },
            {
                name: 'WithdrawLiquidity',
                inputs: [
                    {name: 'lp', type: 'uint128'},
                    {name: 'left', type: 'uint128'},
                    {name: 'right', type: 'uint128'},
                ],
                outputs: [],
            },
            {
                name: 'ExchangeLeftToRight',
                inputs: [
                    {name: 'left', type: 'uint128'},
                    {name: 'fee', type: 'uint128'},
                    {name: 'right', type: 'uint128'},
                ],
                outputs: [],
            },
            {
                name: 'ExchangeRightToLeft',
                inputs: [
                    {name: 'right', type: 'uint128'},
                    {name: 'fee', type: 'uint128'},
                    {name: 'left', type: 'uint128'},
                ],
                outputs: [],
            },
        ],
        fields: [
            {name: '_pubkey', type: 'uint256'},
            {name: '_timestamp', type: 'uint64'},
            {name: '_constructorFlag', type: 'bool'},
            {name: 'platform_code', type: 'cell'},
            {name: 'root', type: 'address'},
            {name: 'vault', type: 'address'},
            {name: 'current_version', type: 'uint32'},
            {name: 'left_root', type: 'address'},
            {name: 'right_root', type: 'address'},
            {name: 'active', type: 'bool'},
            {name: 'lp_wallet', type: 'address'},
            {name: 'left_wallet', type: 'address'},
            {name: 'right_wallet', type: 'address'},
            {name: 'vault_left_wallet', type: 'address'},
            {name: 'vault_right_wallet', type: 'address'},
            {name: 'lp_root', type: 'address'},
            {name: 'lp_supply', type: 'uint128'},
            {name: 'left_balance', type: 'uint128'},
            {name: 'right_balance', type: 'uint128'},
            {name: 'fee_numerator', type: 'uint16'},
            {name: 'fee_denominator', type: 'uint16'},
        ],
    } as const;
}
