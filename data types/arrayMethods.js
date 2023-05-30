//delete
//in below example element was removed but array still 3 elements
let arr = ['I','go','home'];
delete arr[1];//remove go
console.log(arr[1]);//undefined
//now array is['I', <1 empty item>, 'home' ]
console.log(arr.length);//3

//splice
//arr/splice(start[, deleteCount,elem1,....,elemN])
let arr2 = ['I','study','javascript'];
arr2.splice(1,1);
console.log(arr2);//[ 'I', 'javascript' ]
console.log(arr2.length);//2

//splice -add and remove item 
let arr3 = ['I','Study','Javascript','right','now'];
arr3.splice(0,3,"let's", 'dance');
console.log(arr3);//[ "let's", 'dance', 'right', 'now' ]

let arr4 = ['I','Study','Everyday'];
arr4.splice(2,0,'complex','language');
console.log(arr4);//[ 'I', 'Study', 'complex', 'language', 'Everyday' ]

//slice-similar like slice
//arr.slice([start],[end])
let arr5 = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(arr5.slice(2,4));//[ 'camel', 'duck' ]
console.log(arr5.slice());//[ 'ant', 'bison', 'camel', 'duck', 'elephant' ]

//concat
const arr6 = ['a','b','c'];
const arr7 = ['x','y','z'];
console.log(arr6.concat(arr7,'r','s'));   //['a', 'b', 'c', 'x', 'y', 'z','r', 's']

const arr8 = [4,5,6,7];
const numeric = arr8.concat(0,4,6);
console.log(numeric);//[4, 5, 6, 7,0, 4, 6]

const arr9 = [1,2];
const arrayLike = {
    1:'Something',
    2: 'else'
};
console.log(arr9.concat(arrayLike));//[ 1, 2, { '1': 'Something', '2': 'else' } ]

//fotEach
//arr.forEach methods allowed to run a function for every element of the array
//arr.forEach(function(item,index,array){...})
//you want print single number or item instade of array  then use forEach.
const words = ['one','two','three','four'];
words.forEach((word)=>{
    console.log(word);
    if(word === 'two'){
        words.shift();
    }
});
console.log(words);//[ 'two', 'three', 'four' ]

const nums = [41,45,63,76,23,54];
nums.forEach((n)=>{
    console.log(n);// 41  45 63 76 23  54
});

const nums2 = [7,9,23,14,56,78];
nums2.forEach((n,i,nums) =>{
    console.log(n,i,nums);
});//7 0 [ 7, 9, 23, 14, 56, 78 ]
//9 1 [ 7, 9, 23, 14, 56, 78 ]
//23 2 [ 7, 9, 23, 14, 56, 78 ]
//14 3 [ 7, 9, 23, 14, 56, 78 ]
//56 4 [ 7, 9, 23, 14, 56, 78 ]
//78 5 [ 7, 9, 23, 14, 56, 78 ]

//indexOf and includes
//arr.indexOf(item,from)-looks for item startingfrom index, from return the index where it was found otherwise -1
//arr.includes(item,from)-looks for item starting from index from, returns true if found.
const arr10 = [1,0,false];
console.log(arr10.indexOf(0));//1
console.log(arr10.indexOf(false));//2
console.log(arr10.indexOf(null));//-1
console.log(arr10.includes(1));//true

const arr11 = [NaN];
console.log(arr11.indexOf(NaN));//-1 , wrong should be 0
console.log(arr11.includes(NaN));//true, correct

//find and findIndex
//arr.find(fn)
//let result = arr.find(function(item,index,array))

let users = [
    {id:1, name:'Jhon'},
    {id:2, name: 'Merry'},
    {id:3, name: 'Sally'},
    {id:4, name: 'Jhon'},
];
let data = users.find(item => item.id == 2);
console.log(users.findIndex(data => data.name == 'Sally'));//2
console.log(data.name);//Merry

//*filter
const restuarant = ['willy','Chiily','Deccan','houseDosa'];
const restuarantTime = ['10','9','8:30','9'];
const filtered = restuarantTime.filter(time => time >=9 );
console.log(filtered);//[ '10', '9', '9' ]

const restuarant1 = ['willy','Chiily','Deccan','houseDosa'];
const restuarantTime1 = ['10','9','8:30','9'];
const filtered1 = restuarant1.concat(restuarantTime1.filter(x => x >= 9));
console.log(filtered1);//[ 'willy', 'Chiily', 'Deccan', 'houseDosa', '10', '9', '9' ]

//map-map method creates an new array populated with the result of calling a provide function on every element in the calling array
//arr.map(callback function(currentValue,index,array),this.Arg)
const length = ['Bilbo','Gandolf','Nazgul'].map(item=>item.length);
console.log(length);//[ 5, 7, 6 ]

const numArr = [2,4,6,3,7];
const numArrMult = numArr.map(function numMul(num,index){
return num*index;
})
console.log(numArrMult);//[ 0, 4, 12, 9, 28 ]

//sort
const arr12 = [40,4,90,7,9];
arr12.sort();
console.log(arr12);//[ 4, 40, 7, 9, 90 ]

const month = ['March','Jan','July','Dec','Feb'];
month.sort();
console.log(month);//[ 'Dec', 'Feb', 'Jan', 'July', 'March' ];

//reverse
let arr13 = [1,4,5,7,8];
arr13.reverse();
console.log(arr13);//[ 8, 7, 5, 4, 1 ]

//join- join method creates and return a new string by concatenating all of the element in an array seprated by commasor specified separtor string
const element = ['fire','Air','water'];
console.log(element.join());//fire,Air,water
console.log(element.join('-'));//fire-Air-water

//split- split method takes a pattern and divides a string into order
const str = 'You are very Brave Girl';
const words2= str.split(' ');
console.log(words2[3]);//Brave
const chars = str.split('');
console.log(chars[8]);//v

//.filter(), .map(), .reduce()
const elem =  [1,2,3,4,5,6,7];
const newArr = elem.filter((x)=> x % 2 === 0);
console.log(newArr);//[ 2, 4, 6 ]

const elem1 =  [4,5,6,7,8];
const output = elem1.map((x)=> x.toString(2));
console.log(output);//[ '100', '101', '110', '111', '1000' ]

const elem2= [5,1,2,3,6];
const output1 = elem2.reduce(function(acc,curr){
    acc= acc + curr;
    return acc;
},0);
console.log(output1);//17

//arr.reduce(function(accumulator,current){//...},[initial])
const elem3 = [5,8,3,2,6];
const output2 = elem3.reduce(function(max,curr1){
    if(curr1 > max){
        max = curr1;
    }
    return max;
    },0);
    console.log(output2);//8

const users2 = [
    {firstName: 'Sally',lastName:'Dose', age:26},
    {firstName: 'Peter',lastName:'Jonas', age:75},
    {firstName: 'Sofia',lastName:'Housee', age:50},
    {firstName: 'Lidiya',lastName:'Mark', age:26},
];
const output3 = users2.map((x) => x.firstName +" " + x.lastName);
console.log(output3);//[ 'Sally Dose', 'Peter Jonas', 'Sofia Housee', 'Lidiya Mark' ]

//do ypu have an array an iterate only single value then use reuce method
const output4 = users2.reduce(function(acc1,curr1){
    if(acc1[curr1.age]){
        acc1[curr1.age] = ++acc1[curr1.age];
    }
    else{
        acc1[curr1.age] = 1;
    }
    return acc1;
}, {})
console.log(output4);//{ '26': 2, '50': 1, '75': 1 }

const output5 = users2.filter((x) => x.age < 30).map((x) => x.firstName);
console.log(output5);//[ 'Sally', 'Lidiya' ]


const output6 = users2.reduce(function(acc4, curr4){
    if(curr4.age < 30 ){
    acc4.push(curr4.firstName)
    }
return acc4;
}, [])
console.log(output6);
// [ 'Sally', 'Lidiya' ]