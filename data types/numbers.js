//toString
let num = 255;
console.log(num.toString(16));//ff
console.log(num.toString(2));//11111111

//Rounding
//Math.floor -Round down 3.1 becaomes 3 and -1.1 becomes -2.
//Math.ceil -Round up 3.1 becomes 4 and -1.1 becoames -1.
//Math.round - round to the nearest integer;3.1 becomes 3,3.6 becomes 4

let num1 = 1.23456;
console.log(Math.round(num1 *100)/100);//1.23

let num2 =12.34;
console.log(num2.toFixed(1));//12.3

let num3 = 12.36;
console.log(num3.toFixed(4));//12.3600

//task
//Create a script that prompts the visitor to enter two numbers and then shows their sum.
let number1 = 3;
let number2 = 5;
console.log(number1 + number2);//8

//
num4 = 1.35;
console.log(num4.toFixed(1));//1.4
 
num5= 6.35;
console.log(num5.toFixed(1));//6.3