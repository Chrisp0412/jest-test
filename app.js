const sum =(a,b) =>{
    return a + b
}
console.log(sum(7,3))



// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
const fromDollarToYen = function(valueInDollar){
    let valueinYen = valueInDollar * 153.48
    return valueinYen}

    const fromYentoPound = function(valueInYen){
        let valueinPound = valueInYen * 159.875
        return valueinPound}
    
module.exports = { sum, fromEuroToDollar,fromDollarToYen,fromYentoPound}