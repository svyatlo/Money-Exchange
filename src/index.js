// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let coinValueBox = {
        "H" : 50,
        "Q" : 25,
        "D" : 10,
        "N" : 5,
        "P" : 1
    };
    let wallet = {}; 
    
    if (currency <= 0) {
        return wallet = {};
    } else if (currency >= 10000) {
        return wallet = {
            error: "You are rich, my friend! We don't have so much coins for exchange"
        }
    }

    for (let key in coinValueBox) {
        let numberOfCoin = Math.floor(currency / coinValueBox[key]);
       
        if (numberOfCoin == 0) continue;
        
        wallet[key] = numberOfCoin;
        currency %= coinValueBox[key];
    }

    return wallet;
}
