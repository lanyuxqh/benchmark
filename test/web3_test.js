const Web3 = require('web3');

// console.info(Web3.givenProvider)

// const web3 = new Web3('https://ropsten.infura.io/');
//
// web3.eth.getBlockNumber().then(console.log);
//
// web3.eth.getBlock(10).then(console.log);
//
// async function test() {
//     let block = await web3.eth.getBlock(10);
//     console.info(block)
// }

const {
    setIntervalAsync,
    clearIntervalAsync
} = require('set-interval-async/dynamic');

setIntervalAsync(
    async() => console.log('Hello'),
    1000
)

