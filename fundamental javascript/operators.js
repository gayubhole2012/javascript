//unary,binary and oprand

//unary-it has a single oprand
let x= 1;
x = -x;
console.log(x);//-1

//binary 
let a = 2;
let b = 5;
console.log(b-a);//3

//remainder
console.log(5%2);//1
console.log(10%5)//0

//exponentiation
console.log(2 ** 2);//24
console.log(2 ** 3);//8
console.log(2 ** 4);//16

//string concatenation with binary
let s = "my" + "string";
console.log(s);//mystring

console.log('1' + 2);//12
console.log(2 + '1');//21
console.log(2+2+'1');//41,operator work one after another,first two + sums two number is 4 and then add string '1' ans is 41
console.log('1'+2 +2);//122,the first operand is a string, the compiler treats the other two operands as strings too. The 2 gets concatenated to '1', so it’s like '1' + 2 = "12" and "12" + 2 = "122"
console.log(6-'3');//3,converts 3 a number
console.log('10'/'5')//2 converts both operands to numbers.

//numeric conversion,unary +
let apples = "2";
let oranges = "3";
console.log(apples + oranges);//23 

let apples1 = "2";
let oranges1 = "3";
console.log(+apples1 + +oranges1);//5, both values converted to number before binary plus

//increment 
let counter = 1;
let a1 = counter++;
let b1 = ++counter;
console.log(a1);//1
console.log(b1);//2


let a2 = 2;
let x1 = 1 +(a2 *= 2);
console.log(x1);//5 a2 =4 and then calculated x1 = 1+4 and ans is 5

let a3 = prompt("first number?",2);
let b3 = prompt("second number?",4);
alert(a3+b3);//24 beacuse a3="2" b3 ="4" consider as string ans is 24
