//Function Statement,function declaration
a();//called a
function a(){
    console.log('called a');
}
a();//called a
//above example if you call a() before we declare output is "called a"

//Function Expression
var b = function(){
    console.log('called b');
}
b();
//above example does not hoist because  b is treated like vaiable and when function expression excutes line by line when they reaches var b then output is "called b"
//difference between function statement and function expression is major differnce is hoisting.

//Anonomus function
//anonomus function used in where function are used as value
//function (){

//}

//Named function expression
var c = function xyz(){
console.log('balled b');
}
//xyz();//ReferenceError: xyz is not defined
//xyz() is local function it can not read outside scope

//differciate between parameter and argument
//below example param1 and param2 is parameter
var d = function(param1, param2){
    console.log("called d");
}
//below d pass an argument 2 and 4
d(2,4);//called d

//First Class Function/First Class Citizan
//ability to of function to be as values and passed as argument and return to function that ability first class function
var t = function(param1){
    return function(){

    }
}
console.log(t());//[Function (anonymous)]

//Arrow Function:- convert anonomus function to arrow function help of arrow keyowrd
let greet = () => {
    console.log('hello');//hello
    return 2;
}
console.log(greet());//2

//Arrow function
let greet1 = (user) => {
    console.log('Hello',user);//Hello Navin
    return 4;
}
console.log(greet1('Navin'));//4

//normal function example\
let add = (num1 ,num2) => 
{ 
    return num1 + num2;
}
let sum = add;
let result = sum(5,6);
console.log(result);//11

//arrow function
let add1 = (num3,num4) => num3 + num4;
let result2 = add(4,3);
console.log(result2);//7
