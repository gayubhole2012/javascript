//setTimeOut allows us to run a function once the interval of time
//setInterval allows us to run a function repeatedly,starting afetr interval of time,then repating continuosly at that interval.
//let timerId = setTimeout(funct|code,[delay],[arg1],[arg2],...)

function sayHi(){
    console.log('Hello');
}
setTimeout(sayHi,1000);


function sayHi1(a,b){
    console.log(a+ ',' + b);
}
setTimeout(sayHi1,1000,'Hello','John');

let timerId = setTimeout(()=> console.log('never happens'),1000);
console.log(timerId);
clearTimeout(timerId);
console.log(timerId);

//let timerId = setInterval(funct|code,[delay],[arg1],[arg2],...);

//let timerId1= setInterval(()=> console.log('tick'),2000);
setTimeout(()=>{ clearInterval(timerId);console.log('stop');},5000);

//The nested setTimeout is more flexible method than setInterval
function printNumber(from,to){
    let current = from;
    let timerId = setInterval(function(){
        console.log(current);
        if(current == to){
            clearInterval(timerId);
        }
        current++;
},1000);
}
printNumber(5,10);