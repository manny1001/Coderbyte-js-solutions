var highestNumber = 0;
var highestCardObj = {};
let sumOfCards = 0;

function Blackjack(array) {
    let posibilities = [
        { 2: "two" },
        { 3: "three" },
        { 4: "four" },
        { 5: "five" },
        { 6: "six" },
        { 7: "seven" },
        { 8: "eight" },
        { 9: "nine" },
        { 10: "ten" },
        { 10: "jack" },
        { 10: "queen" },
        { 10: "king" },
        { 11: "ace" },
    ];

    let output = ["low", "above", "blackjack"];

    let blackjackTototal = 21;
    let blackJackfound = false;
    var cardsArray = [];
    posibilities.map((val) => {
        for (var i = 0; i < array.length; i++) {
            if (array[i] === Object.values(val).toString()) {
                cardsArray.push(val);
            }
        }
    });
    sumOfCards = CountCards(cardsArray);
    return result = DisplayOutPut();

}
var array = ["two", "three", "ace", "king"];

console.log(Blackjack(array));

function CountCards(array) {
    let counter = 0;
    for (var i = 0; i < array.length; i++) {
        counter += parseInt(Object.keys(array[i]).toString())
        if (parseInt(Object.keys(array[i]).toString()) > highestNumber) {
            console.log(Object.values((array[i])).toString() === "ace")
            highestNumber = parseInt(Object.keys(array[i]).toString());
            if (Object.values((array[i])).toString() === "ace" && sumOfCards > 21) { }

            highestCardObj = Object(array[i])
        }
    }
    console.log(highestCardObj)
    return counter;
}

function DisplayOutPut() {
 
    if (sumOfCards < 21) {
        return result = "BELOW " + Object.values(highestCardObj).toString()
    }
    if (sumOfCards > 21 && array.includes("ace")) {
        /* sumOfCards = sumOfCards - 10
        DisplayOutPut(); */
        return result = "ABOVE " + Object.values(highestCardObj).toString()
    }
    else if (sumOfCards > 21) {
        return result = "ABOVE " + Object.values(highestCardObj).toString()
    }
    if (sumOfCards == 21) {
        return result = "BLACKJACK";
    }
}
