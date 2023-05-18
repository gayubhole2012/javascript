//.at(pos) method has benefits of following negative position.
//so .at(-1) means the lat character, and .at(-2)is the one before it
let str1= `Good`;
console.log(str1[str1.length -1])//d


let str = `Hello`;
console.log(str[-2]);//undefined
console.log(str.at(-2));//l
console.log(str.at(-5));//H

let str2 = 'Morning';
str2 = 'm' + str2[1];
console.log(str2);//mo

//changing the case 
console.log('Interface'.toUpperCase());//INTERFACE
console.log('Interface'.toLowerCase());//interface
console.log('Interface'[2].toLowerCase());//t

//searching for a substring
//str.indexOf(substr,pos); substr in str starting from the given position.-1 if nothing cab be found
let str3 = 'Widget with id';
console.log(str3.indexOf('Widget'));//0
console.log(str3.indexOf('id'));//1
console.log(str3.indexOf('with'));

//includes,startsWih,endsWith
//str.includes(substr,pos)return true or false
console.log('Widget with id'.includes('Widget'));//true
console.log('Heloo'.includes('bye'));//false

//the methods str.startsWith and str.endsWith
console.log('Widget'.startsWith('get'));//false
console.log('Widget'.endsWith('get'));//true

//getting a substring:- 3 methods in javascript to get a substring: substring, substr and slice
let str4 = 'stringify';
console.log(str4.slice(0,5));//strin, the substring from 0 to 5 (not includes 5)
console.log(str4.slice(0,1));//s ,form 0 to 1 but not including 1
console.log(str4.slice(2));//ringify,form 2nd position till the end
console.log(str4.slice(-4,-1));//gif,start at the 4th position from the right ,end at the 1st form the right
console.log(str4.slice(6,2));//empty string

//substring
let str5 = 'stringify';
console.log(str5.substring(2,6));//ring
console.log(str5.substring(6,2));//ring

//substr
let str6 = 'stringify';
console.log(str6.substr(2,4));//ring ,from the 2nd position get 4 character
console.log(str6.substr(2,6));//ringif

//task
function ucFirst(str7){
    if(!str7) return str7;

return str7[0].toLocaleUpperCase() + str7.slice(1);
}
console.log(ucFirst('john'));//Jhon

function checkSpam(str8){
let lowstr = str8.toLowerCase();
return lowstr.includes('somia') || lowstr.includes('janet');
}
console.log(checkSpam('buy SoMiA'));//true
console.log(checkSpam('free ascr'));//false
console.log(checkSpam('janet io'));//true