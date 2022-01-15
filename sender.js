const {
    setIntervalAsync,
    clearIntervalAsync
} = require('set-interval-async/dynamic');

var coin = require('./lib/coin');

var Web3 = require("web3");

var Wallet = require('./lib/wallet');


//

async function start(pause = 50) {
    const web3 = new Web3('http://10.211.55.8:8545');

    let wallet_Private = Wallet.fromV3(`{"address":"eb680f30715f347d4eb5cd03ac5eced297ac5046","crypto":{"cipher":"aes-128-ctr","ciphertext":"0a5993469b3546c8581abbb597ed15b2e14d14c8a55713b9f7fd276d5ef35c5b","cipherparams":{"iv":"9164453efdad36e06c2a36be5c522c24"},"kdf":"scrypt","kdfparams":{"dklen":32,"n":262144,"p":1,"r":8,"salt":"7618b02cbcac1127b57b1bc9c8b468cccf105e5724bdcd7ca50ec99434f29671"},"mac":"7b3c086d138b181e1baa6aab7c4f93e1fc220862181d835e9efb1a41d57c8e08"},"id":"3a7959b8-1c2f-42fe-b375-6a0a93d1dffc","version":3}`, "123456");

    coin.init(web3, wallet_Private);

    let nonce = await web3.eth.getTransactionCount(wallet_Private.getAddressString(), 'pending');

    setIntervalAsync(
        async () => {
            var to = "0xd3d4ba599218e795beed5f8886a5696aa00702f4";

            var amount = '0.00000000000001'; //ether

            coin.transfer(wallet_Private.getAddressString(), to, amount, nonce);
            nonce = nonce + 1;
        },
        pause
    );
}


start();
