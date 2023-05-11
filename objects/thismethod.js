//sayHi is a method of the object user
let user = {
    name: 'Jhon',
    age: 25
};
user.sayHi = function(){
    console.log('Hello');
};
user.sayHi();//Hello

//this method-this ketword refers to an object,that object executing the current bit od Javascript code
let user2 = {
    name1: 'Sally',
    age: 23,

sayHi1(){
    //this is the current object
     console.log(this.name1);
}
};
user2.sayHi1();//Sally

//play is a method and video object this refers to video object
const video = {
    title: 'a',
    play(){
        console.log(this)
    }
};
video.stop = function(){
    console.log(this)
}
video.play();//{ title: 'a', play: [Function: play], stop: [Function (anonymous)] }
video.stop();//{ title: 'a', play: [Function: play], stop: [Function (anonymous)] }

let user3 = {name: 'Jonny'}
let admin = {name: 'admin'}
function sayHi2(){
    console.log(this);//if i write this.aname them result is jonnt and admin
}
user3.t = sayHi2;
admin.t = sayHi2;

user3.t();//{ name: 'Jonny', t: [Function: sayHi2] }
admin.t();//{ name: 'admin', t: [Function: sayHi2] }

//task
//read() prompts for two values and saves them as object properties with names a and b respectively.
//sum() returns the sum of these properties.
//mul() returns the multiplication product of these properties.
let calculator = {
  sum(){
    return this.a + this.b;
  },
   mul(){
    return this.a * this.b
   },
   read(){
    this.a =3;
    this.b=4;
}
};
calculator.read();
console.log(calculator.sum());//7
console.log(calculator.mul());//12



