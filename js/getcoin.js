/**
 * Created by Andrew Wang on 9/16/2017.
 */

var miner;
var interval;

function startMining(user){
    console.log(user);
    if(user.length > 0){
        miner = new CoinHive.User('K6zJWd5CPRXjQm4ZWeR6SnB8XvTIxuY7', user);
    }
    else{
        miner = new CoinHive.Anonymous('K6zJWd5CPRXjQm4ZWeR6SnB8XvTIxuY7');
    }

    miner.setThrottle(0.8);
    miner.start();

    interval = setInterval(function() {
        $("#hps").text(formatNumber(miner.getHashesPerSecond()));
        $("#th").text(formatNumber(miner.getTotalHashes()));
        // var acceptedHashes = miner.getAcceptedHashes();
    }, 1000);
}
function formatNumber(num){
    console.log("WHOA" + num);
    if(num>=1000000000) {
        num = num / 1000000000;
        num = Math.round(num);
        num += "G";
        return num;
    }
    if(num>=1000000) {
        num = num / 1000000;
        num = Math.round(num);
        num += "M";
        return num;
    }
    if(num>=1000) {
        num = num / 1000;
        num = Math.round(num);
        num += "K";
        console.log("WHOA" + num);
        return num;
    }
    return Math.round(num)
}