//string conversion
let value = true;
alert(typeof value);//boolean

value = String(value);
alert(typeof value);//string

//Numeric conversion
alert("6" / "2");//3,string converted to number

let str = "123";
alert(typeof str);//string
let num = Number(str);
alert(typeof num);//number

let age = Number("string intead of a number");
alert(age);  //NaN, conversion failed


alert(Number ( "123" ));//123
alert(Number("123z"));//NaN (error reading a number at 'z')
alert(Number(true));//1
alert(Number(false));//0

//Boolean conversion
alert(Boolean(1));//true
alert(Boolean(0));//false
alert(Boolean('Hello'));//true
alert(Boolean(""));//false
alert(Boolean("0")); //true
alert(Boolean(" "));//spaces, also true