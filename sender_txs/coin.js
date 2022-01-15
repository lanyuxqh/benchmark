var Tx = require('ethereumjs-tx');

var _ = require('underscore');

class Coin {
    constructor(_web3, _wallet) {
        this.web3 = _web3;
        this.wallet = _wallet;
    }

    async transfer(_from, _to, _amount, _nonce,errcb) {

        var gasPrice = "18000000000";

        // var nonce = await web3.eth.getTransactionCount(_from, 'pending');

        var amount = this.web3.utils.toWei(_amount, "ether");

        var rawTx = {
            from: _from,
            to: _to,
            value: this.web3.utils.toHex(amount),
            nonce: this.web3.utils.toHex(_nonce),
            gasPrice: this.web3.utils.toHex(gasPrice)
        };


        rawTx = _.extend(rawTx, {gasLimit: this.web3.utils.toHex(21000)});

        var tx = new Tx(rawTx);

        let privateKey = this.wallet.getPrivateKey();
        tx.sign(privateKey);

        var serializedTx = tx.serialize();

        this.web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'), function (err, hash) {
            if (!err) {
                console.log(hash);
            } else {
                errcb(err);
            }
        });
    }
}

module.exports = Coin;
