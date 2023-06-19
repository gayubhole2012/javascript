//The apply() method calls a specific function with the given value and arugument provide as an array.
//func.apply(thisObj,[arg1,arg2,...])
 
let name = {
    firstname:'John',
    lastname:'Tratt',
    printFullName: function(){
        console.log(this.firstname + ' ' + this.lastname);
    }
}
name.printFullName();//John Tratt

let name2 = {
    firstname: 'Sachin',
    lastname: 'Gill',
    printFullName: function(){
        console.log(this.firstname + ' ' + this.lastname);
    }
}
name2.printFullName();//Sachin Gill
// above code is not good way now that where call method is used
//Using call method we can use function borrowing

let name3 = {
    firstname: 'Sally',
    lastname: 'Josh',
    }
let printFullName = function(){
console.log(this.firstname + ' '  + this.lastname);
    }
printFullName.call(name3);//Sally Josh

let name4 = {
    firstname:'Lydia',
    lastname: 'Bgaha',
}
printFullName.call(name4);// Lydia Bgaha

//we can pass more parameter in function
let name5 = {
    firstname: 'Mokil',
    lastname: 'Joshi',
    }
let printFullName2 = function(hometown,state){
console.log(this.firstname + ' ' + this.lastname  + ' ' +  'from'  +  ' ' + hometown  +' ' + state);
}
//first param will always refernce to this variable and leter arguement
printFullName2.call(name5, 'pune', 'Maharashatra');//Mokil Joshi from pune Maharashatra
let name6 = {
    firstname: 'Marium',
    lastname: 'Lim',
    }
printFullName2.call(name6, 'Singapore','Singapore');//Marium Lim from Singapore Singapore

//difference call and apply method
//call method we passing arg individully seperated by comma
//apply method we pass 2nd arg  is list of array  here below example

printFullName2.apply(name6,['Singapore','Malaysia']);//Marium Lim from Singapore  Malaysia

//bind method: - bind method crates a  new function
//instaed of calling directly above example call and apply 
//create a copy of printFullName and it will bind that name to object and return function 

let printMyName = printFullName2.bind(name6,'pune' , 'Maharashatra');
console.log(printMyName);//[Function: bound printFullName2]
//this is function which can invoked later
printMyName();//Marium Lim from pune Maharashatra


//call method which is uesd to invoked function directly by passing on the reference which this ponits this varible inside the method
//similar like call method apply only differnce is second arugument which pass as an list of array
//bind method does not directly invoked method but gives a copy of exacly same method which can invoked later 
//plyfill bind and function currying related to call,apply and bind

//polyfill bind
let name7 = {
    firstname: 'Dolly',
    lastname: 'kohli',
}
let ptintFullName = function(){
    console.log(this.fisrtname + ' ' + this.lastname); 
} 
Function.prototype.mybind = function(){
    return function(){
     printFullName();
    }
}

//currying function
//Currying is the process of taking function with multiple arguments and turning into sequence of function each with only single argument.
//Curying function are using to grate code reusability and functional composition.
//currying function is using bind method.
//Why’s currying function is useful?
 //-currying function helps to avoid passing same variable again and again
 //- it helps to create a higher order function.
let multiply = function(x,y){
    console.log(x * y);
}
//multiplyByTwo1 method exactly same as multiplyByTwo
let multiplyByTwo = function (y){
let x = 2;
console.log(x * y);
}

let multiplyByTwo1= multiply.bind(this,2,3);
multiplyByTwo(5);//10

let multiplyByThree= multiply.bind(this,4);
multiplyByThree(5);//20

//one more way to explore  currying function is function clousre.
let multiply1 = function(x){
    return function(y){
        console.log(x*y);
    }
}
let multiplyByTwo2 =multiply1(5);
multiplyByTwo2(5);//25