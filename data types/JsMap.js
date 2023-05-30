//The map is a collection of element where ecah element is stored as akey ,value pair.
//Map Object holds both objects and primitive values as either kay or value.
//const x = new Map(iterable_object)

let map1 = new Map([
    [1,10],[2,20],
    [3,30], [4,40], [5,50],
]);
console.log(map1);//Map(5) { 1 => 10, 2 => 20, 3 => 30, 4 => 40, 5 => 50 }

let arr = new Map([
    ['firstName', 'Savi'],['firstName','Sally'],
    ['lastName', 'power'],['lastName','Dosse'],
]);
console.log(arr);//Map(2) { 'firstName' => 'Sally', 'lastName' => 'Dosse' }


let map2 = new Map();
map2.set('firstName','Sally');
map2.set('lastName','Ghosh');
map2.set('website','Google')
     .set('friends','Sofia')
     .set('friend2','Arslan');
const itr = map2.entries();
console.log(itr.next.values);
console.log(map2);
console.log(map2.size);
console.log('map2 has website ?' + map2.has('website'));
console.log('map2 has friend3 ?' +map2.has('friend3'));
console.log('get value for key website' + map2.get('website'));
console.log('get value for key friend3' + map2.get('friend3'));
console.log('delete element with key website' + map2.delete('website'));
console.log('map2 has website ?' + map2.has('website'));
console.log('delete element with key website' + map2.delete('friend3'));
map2.clear();
console.log(map2);

//iteration over map 
//map.keys() - retruns an iterable for keys
//map.values() -returns an iterable value
//map.entries() -retruns an iterable for entries [key,value],its used bu default for...of loop
let recipeMap = new Map([
    ['cucumber',500],
    ['tomatoes',350],
    ['onion',50],
    ['ginger',40]
]);
//iterate over keys (vegetables)
for (let vegitable of recipeMap.keys()){
    console.log(vegitable);//cucumber  tomatoes onion  ginger
}
//iterate over values(amount)
for (let amount of recipeMap.values()){
 console.log(amount);//500  350  50 40
}
//iterate over [key, value] entries
for(let entry of recipeMap){
    console.log(entry);//[ 'cucumber', 500 ]  [ 'tomatoes', 350 ]   [ 'onion', 50 ]  [ 'ginger', 40 ]
}

//Set – is a collection of unique values.
//Iteration over Map and Set is always in the insertion order, so we can’t say that these collections are unordered, but we can’t reorder elements or directly get an element by its number.
//new Set([iterable])
//set.add(value) - add a value
//set.delete(value) - removes the value,retruns the true or false
//set.has(value) - retruns true if the value exists in the set, otherwise false
//set.clear()- removes everthing
//set.size-is the elememts count

//The Set object is similar to Map() but major difference is that elements in the set are unique and repeated addition of th same typeof elements is not possible.

let set = new Set();
let john = {name: 'John'};
let pete = {name: 'Pete'};
let mary = {name: 'Mary'};

set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);
console.log(set.size);//3
for(let user of set){
    console.log(user.name);//John  Pete  Mary
}

//plain object follwing methods
//Object.key(obj)- retruns an array of key
//Object.values(obj) - retruns an array of values
//Object.entreis(obj) - retruns an array of[key,value] pair

let user2 = {
    name:'Sona',
    age: 30
};
for(let value of Object.values(user2)){
    console.log(value);//Sona  30
}

//Objects lack many methods that exist for arrays, e.g. map, filter and others.
let prices = {
    banana: 1,
    orange: 2,
    meat: 4
};
let doublePrises = Object.fromEntries(
    Object.entries(prices).map(entry=> [entry[0], entry[1] * 2])
);
console.log(doublePrises);//{ banana: 2, orange: 4, meat: 8 }