require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drink frame suspect notice crime remain horn gesture narrow frame security'; 
let testAccounts = [
"0x33eaa5cb19aa7fb7275afbb0badb97ab65711cc4c83ba0cc444598a63ca26290",
"0x36d33852bfa2b6d56fc389f357d99fa45434923e6d50ee2d5b2041369213836f",
"0x328ec21e6cbf258f32b8505edd4df9b13876897fa3ec2365d1fd3b93658a957f",
"0xb42854d9227d462646452f77b9151f701576de8210c0a073f014baf4f1a0a06e",
"0x1b9aaeacbb34f17bc3cc1007f2af99e7ee96439e3a97d543ef4c7bf43325ef2d",
"0xdd1040416a01ad7ea24b3458c2e9e9c68d0509f75fc7edb793f69c6f3e1ff3da",
"0xea392f7c5dd1860d69642001301bf9e40df3dfef495bfa0f8990143c816221bd",
"0x9900279f31b5e1c1cac547ee8300ce06eb473fc4ac2f665d677611876efbba7b",
"0xa865bc13ff25621f63147006454e58063b1c41acba275b5c1c12ba5ad3b44a3b",
"0x91dec831dec42696910dc896451f4bf0b82385ce2e5fe3b7d200e3b5d8625c0e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

