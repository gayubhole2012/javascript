//ES6- symbol
//symbol is not constructor.Symbol is primitive type
//there are 5 types of primitive type and 6th is object and 7th is symbol
// symbol is used that time symbol genrate new primitive type
const sym1 = Symbol('my identifire');
const sym2 = Symbol('my identifire');
console.log(sym1 === sym2);//false

const key1 = Symbol();
const key2 =Symbol();
myObj = {};
myObj[key1] = "Harry";
myObj [key2] = "Somia";
myObj['name'] = 'good';

console.log(myObj);
console.log(myObj[key1]);
console.log(myObj[key2]);
console.log(myObj.k1);//undefined //cannot do this to get Somia because it is same as myObj["k1"]

//symbols are ignored in for in loop
for(k1 in myObj){
    console.log(k1, myObj[k1]); //name good
}
//stingyfy
console.log(JSON.stringify(myObj));//{"name": "good"}

