let user = {            //object
    name: 'Jhon',      //key "name" stored value "Jhon"
    age: 24            //key "age" stored value "30"
};

console.log(user.name);
console.log(user.age);

//"key" in object
let user1 = {
    name1: "Peter",
    age1: 28
};
console.log("age1" in user1);//true

//for in loop
let user2 = {
    name4:'devid',
    age4: 30,
    isAdmin : 'true' 
};
for(let key in user2){
    console.log(key);//name4 age4 isAdmin
   console.log(user2[key]);//devid 30 true
}

//task
let user3 = {};   // Create an empty object user.
user3.name3 = 'Sally';  //Add the property name with the value John.
user3.surname = 'Mario';   //Add the property surname with the value Smith.
user3.name3 = 'goldy';    //Change the value of the name to Pete.
delete user3.name3;      //Remove the property name from the object.
console.log(user3); //{ surname: 'Mario' }

//task2
//Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise
function isEmpty(obj){
    for(let key in obj){
        return false;
    }
    return true;
}
console.log(isEmpty);//true

//task 3
//Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
//If salaries is empty, then the result must be 0.
let salaries = {
    Jhon:100,
    Ann:160,
    Pete: 130
};
let sum = 0;
for(let key in salaries){
    sum += salaries[key];
}
console.log(sum);//390

//task4
function multiplyNumeric(obj){
for(let key in obj){
    if(typeof obj[key] === 'number'){
        obj[key] *= 2;
    }
}
}
console.log(multiplyNumeric);