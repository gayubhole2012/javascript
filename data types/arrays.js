//object allow you to store keyed collection of values

let fruits = ['Apple','orange','plum'];
console.log(fruits[0]);//Apple
console.log(fruits[1]);//orange
console.log(fruits[2]);//plum
 fruits[2] = 'pear';
 console.log(fruits[2]);//pear
 console.log(fruits);//[ 'Apple', 'orange', 'pear' ]
console.log(fruits.length);//3

let arr = ['Apple', {name: 'John'}, true,function(){console.log('Hello')}];
console.log(arr[1].name);//John
arr[3]();//Hello

//get last elements with "at"
let fruits1 = ['Apple','Orange','Plum'];
console.log(fruits1[fruits1.length - 2]);//Orange

//methods pop/push,shift/unshift
//push adds an element to the end
//push and pop is trate like stack LIFO 
//unshift and shift is trate like queue FIFO

let fruits3 = ['Banana','grapes','blueberry'];
fruits3.push('watermelon');
console.log(fruits3);//[ 'Banana', 'grapes', 'blueberry', 'watermelon' ]

//pop takes an elemnet from the end
console.log(fruits3.pop());
console.log(fruits);//[ 'Apple', 'orange', 'pear' ]

//shift first element of the array and return it
let fruits4 = ['apple','pear','orange'];
console.log(fruits4.shift());//apple,remove apple 
console.log(fruits4);//[ 'pear', 'orange']

//unshift add the elemnet to the begining of the array
let fruits5 = ['Straberry','banana','canaloap'];
fruits5.unshift('apple');
console.log(fruits5);//[ 'apple', 'Straberry', 'banana', 'canaloap' ]

let fruits6 = ['goldenPear'];
fruits6.push('pomogranet','blueberry');
fruits6.unshift('grapes','banana');
console.log(fruits6);// ['grapes', 'banana', 'goldenPear', 'pomogranet', 'blueberry' ]

let fruits7 = ['Banana'];
let array = fruits7;//copy by reference (two varable reference the same array)
console.log(array === fruits7);//true
array.push('Pear');// modify the array by reference
console.log(fruits7);//[ 'Banana', 'Pear' ]

//Loops
let array2 = ['Suger', 'salt','lemon'];
for(let i = 0; i < array2.length; i++){
    console.log(array2[i]);
}//Suger  salt  lemon

//for of- for of doesn't give access to the number of the current element
let fruits8 = ['Apple','Orange','Pear'];
for(let fruit of fruits8){
    console.log(fruit);//Apple Orange  Pear
}


let fruits9 = ['Apple','Orange','Pear'];
for(let key in fruits9){
    console.log(fruits9[key]);
}//Apple Orange  Pear

//What is this code going to show?
let fruits10 = ['Apples','Pear','Orange'];
let shoppingCart = fruits10;
shoppingCart.push('Banana');
console.log(fruits10.length);//4

//Create an array styles with items “Jazz” and “Blues”.
//Append “Rock-n-Roll” to the end.
//Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
//Strip off the first value of the array and show it.
//Prepend Rap and Reggae to the array.
let styles = ['Jazz', 'Blues'];
styles.push('Rock-n-Roll');
console.log(styles);//[ 'Jazz', 'Blues', 'Rock-n-Roll' ]
styles[Math.floor((styles.length)-1)/2] = 'Classics';
console.log(styles);//[ 'Jazz', 'Classics', 'Rock-n-Roll' ]
console.log(styles.shift());//Jazz
styles.unshift('Rap','Raggae');
console.log(styles);//[ 'Rap', 'Raggae', 'Classics', 'Rock-n-Roll' ]


//What is the result? Why?
let arr4 =['a','b'];
arr4.push(function(){
    console.log(this);
});
arr4[2]();//[ 'a', 'b', [Function (anonymous)]]

//The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].
//The task is: find the contiguous subarray of arr with the maximal sum of items.
//Write the function getMaxSubSum(arr) that will return that sum.
function getMaxSubSum(arr){
    let maxSum = 0;
    let partialSum = 0;
    for (let item of arr){
        partialSum += item;
        maxSum = Math.max(maxSum,partialSum);
        if(partialSum < 0 )partialSum = 0;
    }
    return maxSum;
}
console.log(getMaxSubSum([-1, 2, 3, -9]));//5
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));//11
console.log(getMaxSubSum([-2, -1, 1, 2]));//3
console.log(getMaxSubSum([100, -9, 2, -3, 5]));//100
console.log( getMaxSubSum([1, 2, 3]) ); //6
console.log( getMaxSubSum([-1, -2, -3]));//0


