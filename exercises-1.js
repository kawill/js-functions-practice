/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

var max = function max(x,y){
        "use strict";

        if (x > y) {
        return (x);
        }
        else {
        return ("Choose a different set of numbers");
        }
    //...
    }

console.log(max(400,200));

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

var maxOfThree = function maxOfThree(x,y,z){
    "use strict";
    if (x > y && x > z) {
        return (x);
    }
    else {
        return ("Choose a different set of numbers");
    }
    //...
}

console.log (maxOfThree(80, 10, 30));

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

var isVowel = function isVowel(char){
    "use strict";
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        return true;
    }
    else {
        return false;
    }
    //...
}

console.log(isVowel("i"));
console.log(isVowel("h"));
// ---------------------
// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

//var isConsonant = function isConsonant(char) {
    //"use strict";
    //return !isVowel(char);
//}

var rovarspraket = function rovarspraket(phrase){
    "use strict";
    var result = "";
    for(var i = 0; i < phrase.length; i++){
        if( isVowel(phrase[i]) ){
            result += phrase[i];
        }

        else if(phrase[i] != ' ' && phrase[i]!= ".") {
            result += phrase[i] + "o" + phrase[i];
        }

        else {
            result += phrase[i];
        }

    }
    return result;
}

console.log( rovarspraket("The eyes of Texas are upon you.") );

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------
// var values = {0: 1, 1: 2, 2: 3, 3: 4}

// function sum(values) {
    // "use strict";
    // var keys = sum.keys(values);

    // for (var sum = 0; i = 0; i < values.length) {
        // sum += values[keys[i]];
    // }
    // return sum;
    //...
// }

// for (var i = 1; i<5; i++){}

// console.log(sum("1", "2", "3", "4"));

// var values = {0: 1, 1: 2, 2: 3, 3: 4}
// while (var sum = 0; i = 0; i < values.length) {
    // function sum (values) {
    // "use strict";
    // sum += values[keys[i]];
// }
// }

function sum(parameters) {
    "use strict";
    var sum = 0;
    for ( var i=0; k = parameters.length; i < k; i++) {
        sum += parameters[i];
    }
    return sum;
}
console.log(sum(1,2,3,4));


function multiply(parameters){
    "use strict";
    var multiply=0;
    for (var i=0; k = parameters.length; i < k; i++) {
        multiply * parameters[i];
    }
    return multiply;
    //...
}

console.log(multiply(1,2,3,4));

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(){
    "use strict";
    //...
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    "use strict";
    //...
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    "use strict";
    //...
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    "use strict";
    //...
}
