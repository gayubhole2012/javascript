//rest operator puts the same of some specific user-supplied values into a javascript array.
//spread operator expands iteratbles into individual elements.Andit also helps to expand the object expression.
//var var_name = [...iterable];

var array = [10,20,30,40];
var array2 = [60,70,80,90];
var array3 = [...array,...array2];
console.log(array3);//[10, 20, 30, 40, 60, 70, 80, 90]

var arr1 = [10,20,30,40,50];
var arr2 = [...arr1, 60];
console.log(arr2);//[ 10, 20, 30, 40, 50, 60 ]

const obj = {
    firstname: 'Divi',
    lastname: 'pati',
};
const obj1= {
    firstname1 : 'mini',
    lastname1: 'loki',
};
const obj2 = {...obj, ...obj1};
console.log(obj2);//{firstname: 'Divi',lastname: 'pati', firstname1: 'mini',lastname1: 'loki'}

let arr4 = [1,2,3];
let arrcopy = [...arr4];
console.log(JSON.stringify(arr4) === JSON.stringify(arrcopy));//true
console.log(arr4 === arrcopy);//false
arr4.push(4);
console.log(arr4);//[1,2,3,4]
console.log(arrcopy);//[1,2,3]

//rest paramerter
function myFun(one,two, ...manyMoreArgs){
    console.log('one:',one);
    console.log('two:',two);
    console.log('manyMoreArgs:' ,manyMoreArgs);
    }
    myFun('HTML','CSS','JavaScript');//one: HTML  two: CSS   manyMoreArgs: [ 'JavaScript' ]
    

function myBio(firstname,lastname, ...otherInfo){
    return otherInfo;
}
console.log(
    myBio('Sally','Ferry','coding','web Develpoer','Male')
    );//[ 'coding', 'web Develpoer', 'Male' ]
