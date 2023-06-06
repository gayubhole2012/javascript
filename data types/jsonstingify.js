//JSON.stingify to convert objects into JSON.
//JSON.parse to convert JSON back into an object
//JSON.stringify can applied to primitive as well
//Object{...}, Arrays[...],
//primitives:- strings,numbers,boolean ,null

let student = {
    name:'Peter',
    age: 30,
    isAdmin: false,
    courses: ['html','css','js'],
    spouse: null
};
let json = JSON.stringify(student);
console.log(typeof json);//string
console.log(json);//{"name":"Peter","age":30,"isAdmin":false,"courses":["html","css","js"],"spouse":null}


let room = {
    number: 24,
};
let meetup = {
    title:'conference',
    date:new Date(Date.UTC(2023,2,20)),
    room
};
console.log(JSON.stringify(meetup));//{"title":"conference","date":"2023-03-20T00:00:00.000Z","room":{"number":24}}

//JSON.parse :- let value = JSON.parse(str,[reviver])
let numbers = '[0,1,2,3]';
numbers = JSON.parse(numbers);
console.log(numbers[2]);//2

let user1 = {
    name: 'David',
    age: 40
};
let user3 = JSON.parse(JSON.stringify(user1));
console.log(user3);//{ name: 'David', age: 40 }


let room1 = {
    number1: 56
};
let meetup1 = {
    titile: 'conference',
    occupiedBy: [{name:'Peter'},{name:'ALice'}],
    place:room1
};
room1.occupiedBy = meetup1;
meetup1.self= meetup1;
console.log(JSON.stringify(meetup1,function replacer(key,value){
return (key != '' && value == meetup1)? undefined : value;
}));// {"titile":"conference","occupiedBy":[{"name":"Peter"},{"name":"ALice"}],"place":{"number1":56}}
