require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea climb flee skull guard render remember erosion grid process bubble skate'; 
let testAccounts = [
"0xbb7e601433a1df2636554526acd64da1c8ea7683273acdbefa78711f8e5b5440",
"0x7bfb9d4507c1200f8c3b47a77a338f7f0825f0b3cc417246af6ba555edfc7c59",
"0x4def8ec04d8dbc12b5b4d43aeab6e273e0fd758575ee4ba90b1cedfc4d4ee151",
"0x87ab945efb781b36e9d74f6608da8637704cf2df5b5fc40917fea6d178b8a5da",
"0x93781e1cf6f99b3c7dff788243a4d75e217d2aac0e7d8a1695f5f0ba11383ff4",
"0x0e8ca7dab2c83263a0b6ea86758643a06c9f695ea6cde511f49693aaaf6db4b2",
"0xfb69a99b4c79a3a64438f79277ea5b3cef5b0b3db7aba63ff46edb6d0ef3f04c",
"0xf159f642e96379333864e0b77b1426c9b0a799eee50d56e7e5ec0c15980342a2",
"0x9167ec9e5e42ab52fbe7578578dcd26b358bdffee77af4ad0f58e502c5e8ec72",
"0xa3cde1efa381542cbc9fc13b7d5210493d71f72c4209874f6de60dec2cb76be9"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
