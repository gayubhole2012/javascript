//There are 7 primitive types:- string,number,btight,boolean,null,undefined,symbol
//An object of storing multiple values as properties.

//In object we can store a function as one of properties.
//eg
let buddy = {
name: 'Buddy',
sayHi: function(){
    console.log('Good Morning');
    }
};
buddy.sayHi();//Good Morning

//task
let str = "hello";
str.test = 5;
console.log(str.test);//undefined
