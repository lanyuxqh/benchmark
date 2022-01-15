var Tx = require('ethereumjs-tx');

var _ = require('underscore');

var web3;
var wallet;

function init(_web3, _wallet) {
    web3 = _web3;
    wallet = _wallet;
}

async function transfer(_from, _to, _amount,_nonce) {

    var gasPrice = "18000000000";

    // var nonce = await web3.eth.getTransactionCount(_from, 'pending');

    var amount = web3.utils.toWei(_amount, "ether");

    var rawTx = {
        from: _from,
        to: _to,
        value: web3.utils.toHex(amount),
        nonce: web3.utils.toHex(_nonce),
        gasPrice: web3.utils.toHex(gasPrice)
    };


    rawTx = _.extend(rawTx, {gasLimit: web3.utils.toHex(21000)});

    var tx = new Tx(rawTx);

    let privateKey = wallet.getPrivateKey();
    tx.sign(privateKey);

    var serializedTx = tx.serialize();

    web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'), function (err, hash) {
        if (!err) {
            console.log(hash);
        } else {
            console.log(err)
        }
    });
}



exports.init = init;
exports.transfer = transfer;