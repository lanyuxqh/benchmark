### 介绍

本项目用于测试以太坊的TPS

### 准备

下载项目：

```
git clone https://github.com/gcc2ge/blockchain_tps.git
```

npm安装依赖

```
npm install
```

### 测试TPS

`tps.js`用于测试，以太坊的TPS

```
node ./tps.js https://ropsten.infura.io/
```
输出：

```

Block  8  - waiting for something to happen
starting timer, at block 8 which has  106  transactions; at timecode 1555476030
block 57 | new #TX 487 / 11s = 44.27272727272727  TPS_current | total: #TX 23897 / 614s = 38.920195439739416 TPS_average
block 58 | new #TX 974 / 7s = 139.14285714285714  TPS_current | total: #TX 24871 / 621s = 40.049919484702095 TPS_average
block 60 | new #TX 975 / 18s = 54.166666666666664  TPS_current | total: #TX 25846 / 639s = 40.44757433489828 TPS_average
block 62 | new #TX 976 / 14s = 69.71428571428571  TPS_current | total: #TX 26822 / 653s = 41.0750382848392 TPS_average
block 64 | new #TX 488 / 18s = 27.11111111111111  TPS_current | total: #TX 27310 / 671s = 40.700447093889714 TPS_average
block 65 | new #TX 978 / 35s = 27.942857142857143  TPS_current | total: #TX 28288 / 706s = 40.06798866855524 TPS_average
block 67 | new #TX 978 / 6s = 163  TPS_current | total: #TX 29266 / 712s = 41.103932584269664 TPS_average
block 69 | new #TX 1960 / 24s = 81.66666666666667  TPS_current | total: #TX 31226 / 736s = 42.42663043478261 TPS_average
block 73 | new #TX 491 / 9s = 54.55555555555556  TPS_current | total: #TX 31717 / 745s = 42.573154362416105 TPS_average

```


### 发送测试交易脚本

为了测试TPS需要发送一些测试交易，以太坊执行交易是串行的，以下脚本是发送单个账户

```js
async function main() {
    await createAccounts();
    initBalance('http://10.211.55.8:8545');
    setTimeout(() => {
        // 配置多个节点
        startSendTx(['http://10.211.55.8:8545', 'http://10.211.55.8:8546', 'http://10.211.55.8:8547', 'http://10.211.55.8:8548']);
    }, 1 * 60 * 1000);
}
```
将上面方法中的变量改成你自己环境中的变量。

执行脚本：

```angular2html
node sender_txs/main.js
```