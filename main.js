"use strict";

/*===== HOMEWORK 4 =====*/

// ----- 1 ----- //

let array2 = [14, 150, 'css', null, 'javascript', 25];

let newArray2 = array2.map(function(x) {
    if(typeof x === 'number'){
        return x * 2;
    }else if (typeof x === 'string'){
        return x.toUpperCase();
    }
    return x;
});

console.log(newArray2);


// ----- 2 ----- //

let info = 'good day';

let wordinfo = info.slice(5);
console.log(wordinfo);


// ----- 3 ----- //
function getStringLength(string){
    return string.length;
}

let str = "Welcome to JS!";
let stringResult = getStringLength(str);
console.log(stringResult);

// ----- 4 ----- //
// let capital = prompt("What is the Capital of Georgia?")

// let answer = "georgia"

// if(capital.toLowerCase() === answer) {
//     alert("It's correct")
// }else {
//     alert("Error. Please try again")
// }


// ----- 5 ----- //
let fruits = ['apple', 'mango', 'avocado', 'kiwi']

let newFruit = fruits.splice(2,1 , 'strawberry');
console.log(fruits);


// ----- 6 ----- //
let numbers = [5, 25, 89, 120, 36];

numbers.push('javascript', 'python');
numbers.splice(0, 0, 'html', 'css');
//console.log(numbers.length)

let newarray = numbers.slice(1,8);

console.log(newarray);


// ----- 7 ----- //
let fruits2 = ['orange', 'banana', 'kiwi'];

console.log(fruits2.length , fruits2);

fruits2.push('apple' , 'pineapple');
fruits2.splice(0, 0, 'waterlemon');

console.log(fruits2.length , fruits2);

fruits2.splice(2, 0, 'mango')
console.log(fruits2.length , fruits2);


// ----- 8 ----- //
let array3 = [1, 2, 3, 4, 5];

let abc = array3.splice(3, 0, 'a', 'b', 'c');
console.log(array3);


// ----- 9 ----- //
let  array5 = [12, 25, 3, 6, 8, 14, 7, 23];

// let newArray5 = array5.map(function (x) {
//     return x / 3
// })

let newArray6 = array5.map((x) => x / 3) ;

console.log(newArray6);


// ----- 10 ----- //
let array7 =  [15, 100, 25, 10, 36];

let remElement = array7.splice(3, 1);
console.log(array7);


// ----- 11 ----- //
let array8 = [1, 2, 3 , 4 , 5];

let word = array8.splice(2, 1, 'three');
console.log(array8);


// ----- 12 ----- //
let array1 =['hello1', 14, 24, 'hello2'];

let newarray1 = array1.filter((element) => typeof element === 'number');
console.log(newarray1);


// ----- 13 ----- //
let array4 = [1, 2, 3, 4, 5];
let sumArray4 = 0;

let sum = array4.forEach((item) => sumArray4 += item);
console.log(sumArray4);


// ----- 14 ----- //
let languages = ['html', 'css', 'javascript', 'python', 'php'];

let filtered = languages.filter((item) => item.length > 3);
console.log(filtered);


// ----- 15 ----- //
let words = ['madrid', 'rome', 'milan', 'berlin'];

let m = words.filter((item) => item.includes('m'));
console.log(m);
//////////////////////////////////////////////////////////////////////////////////