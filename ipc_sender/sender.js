const {
    setIntervalAsync,
    clearIntervalAsync
} = require('set-interval-async/dynamic');

var Coin = require('./coin');

var Web3 = require("web3");

var Wallet = require('../lib/wallet');


//

async function start(web3, pause = 50, wallet_Private, toArr) {

    let coin = new Coin(web3, wallet_Private);

    let nonce = await web3.eth.getTransactionCount(wallet_Private.getAddressString(), 'pending');

    let count = 0;
    let toLen = toArr.length;

    let timer = setIntervalAsync(
        async () => {

            let to = toArr[count % toLen];
            count = count + 1;

            let amount = '0.00000000000001'; //ether

            coin.transfer(wallet_Private.getAddressString(), to.getAddressString(), amount, nonce, (err) => {
                console.info(`${err}`);
                clearIntervalAsync(timer);
            });
            nonce = nonce + 1;
        },
        pause
    );
}


module.exports = start;
