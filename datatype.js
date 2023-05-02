//Number
let n = 123;
n = 12.343;
console.log(n);//12.343

//BigInt
const bigInt = 1234567890;
console.log(bigInt);//1234567890

//string
let str = "Hello";
let str2 = 'single quotes are ok';
let phrase = `backticks ${str}`;
console.log(str);//Hello
console.log(str2);//single quotes are ok
console.log(phrase);//backticks Hello

//boolean(logical type)
let nameFieldChecked = true;
let ageFieldChecked = false;
console.log(nameFieldChecked);//true
console.log(ageFieldChecked);//flase

//typeof operator
    //typeof undefined 
    //typeof 0 // "number"
    //typeof 10n // "bigint"
    //typeof true // "boolean"
    //typeof "foo" //string
    //typeof Math // "object" (1)
    //typeof null // "object" (2)
    //typeof alert // "function"

    //task
    let name1 = "Ilya";
    alert(`hello ${1}`);//hello 1
    alert(`hello ${"name"}`);//hello name
    alert(`hello ${name1}`);//hello Ilya