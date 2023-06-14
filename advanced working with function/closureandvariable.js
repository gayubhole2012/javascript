//Three way to decalre a variable: let,const and var

function variable(){
let message = 'Hello';
console.log(message);//Hello
}
variable();
//console.log(message);//message is not defined

let message1 = 'Hello';
console.log(message1);
//let message2 = 'GoodDay';
//console.log(message2);//Identifier 'message1' has already been declared

if(true){
    let pharse = 'Good';
    console.log(pharse);//Good
}
//console.log(pharse);//pharse is not defined

for(let i=0; i<3; i++){
    console.log(i);//0 1 2
}
//console.log(i);// i is not defined

function makeCounter(){
    let count = 0;
    return function(){
        return count++;
    };
}
let counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());

//lexical environment:- Lexical scope means variable define outside of scope and automatically available inside scope
//lexical scope first find local scope menas find in finction c() first then if does not find then goes parent lexical scope means which is a()
function a(){
    var b =11;
    c();
    function c(){
        console.log(b);
    }
}
 a();
//console.log(b);

//The function sayHi uses an external variable name. When the function runs, which value is it going to use?
let name = 'John';
function sayHi(){
    console.log('Hi,'+ name);
}
name = 'Pete';
sayHi();

//task
function makeWorker(){
    let name = 'Sally';
    return function(){
        console.log(name);//Sally
    };
}
let name1 = 'Soni';
let work = makeWorker();
work();

//closure:- clouseris function bind together with lexical environment
function human(){
    const name = 'Peter';
    function sayHi(){
        console.log(`My name is ${name}`);
    }
        function sayFeelGood(){
            console.log(`${name} is feeling good!`);
        }
        sayHi();
        sayFeelGood();
    }
human();

//whenever functio  is return ,even if its vanished in execution but still it remember the refernce it was pinonting
function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    return y;
}
var z = x();
console.log(z);//function y
z();//7


function d(){
    var g = 3;
    function u(){
        console.log(g);
    }
    g = 22;
    return u;
}
var t = d();
console.log(t);//function u 
t();//22 beacuse g is reference memory location and now g value is 22

//closure is used in
//-Module design pattern
//currying
//memoize
//maintain state in async world
//steTimeouts
//Iterators