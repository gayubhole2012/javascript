//object reference and  copying
let user = {
    name: 'Jhon'
};
let admin = user; //copy the reference
admin.name = 'pete';//change by admin reference 
console.log(user.name); //pete,chnages are seen from user reference

//eg.   if we had a cabinet with two keys and used one of them (admin) to get into it and make changes. 
//Then, if we later use another key (user), we are still opening the same cabinet and can access the changed contents.
  

//comparison by reference
let a = {};
let b = a;  //copy the reference
console.log(a == b);//true
console.log( a === b);//true

//two independant object are not equal
let a1 ={};
let b1 ={};// two independent objects
console.log(a1 == b1);//false


//const object can be modified
const user1 = {
    name1: 'Peter'
};
user.name1 = 'Sally'
console.log(user.name1);//Sally,The value of user is constant it must always refernce the same object,but properties of that object are free to change 


//cloning and merging, object.assign
let user2 = {
    name2: 'Merry',
    age: 30 
};
let clone  = {}; //new empty object 
//lets copy all user property into it
for(let key in user2){
    clone[key] = user2[key];
}
clone.name2 = 'Sania';
console.log(user2.name2);//Merry,still Marry is the original object

//object.assign
//syntax: Object.assign(dest, ...source) dest is target object and second argument list of source object

let user3 = {
    name3: 'Monica'
};
let permission1 = {
    canView: true
};
let permission2 = {
    canEdit: true
};
//copying all properties from permission1, permission2 into user
Object.assign(user3, permission1,permission2);
console.log(user3.name3);//Monica
console.log(user3.canView);//true
console.log(user3.canEdit);//true

//example object.assign
let user4 = {
    name4: 'Stone',
    age4: 12
};
let clone1 = Object.assign({},user4);
console.log(clone1.name4);//Stone
console.log(clone1.age4);//12,here copies all property of user4 into empty object and retrun it

//nested cloning
let user5 = {
    name5: 'Vera',
    sizes: {
        height: 156,
        width: 50
    }
};
let clone2 = Object.assign({}, user5);
console.log(user5.sizes === clone2.sizes)//true,same object
//user and clone share sizes
user5.sizes.width = 60;
console.log(clone2.sizes.width);//60

//structuredclone(object)
let user6 = {
    name6: 'Sofia',
    sizes1: {
        height1: 140,
        width1:40
       }
};
let clone3 = structuredClone(user6);
console.log(user6.sizes1 === clone3.sizes1);//false,differnt object
//user6 and clone3 are totally unrelated
user6.sizes1.width1 = 45;
console.log(clone3.sizes1.width1);//40

//structuredClone method can clone most data types, such as objects, arrays, primitive values.

let user7 ={};
user7.me = user7;
let clone4 = structuredClone(user7);
console.log(clone.me === clone4);//true

//to make a real copy(a clone) we can use Object.assgin for called shallow copy.
//nested object are copied by reference or deep cloning use structuredClone

//shallow copy example
 //for shallow copy use sprade operator before ECS15 use Object.assign


 //eg
 const person = {
    firstName: 'Peter',
    lastNanme: 'Doe'
 };
let clone5 = {...person};
console.log(clone5);//{ firstName: 'Peter', lastNanme: 'Doe' }

const person1 = {
    fisrtName1: 'Nia',
    lastName1: 'Sal'
};
let clone6 = Object.assign({},person1);
console.log(clone6);//{ fisrtName1: 'Nia', lastName1: 'Sal' }

//Deep copy
let person2 = {
    firstName2: 'Avon',
    lastName2: 'Ferry',
    address:{
        street:'North 1st street',
        city: 'san Jose',
        state:'CA',
        country:'USA'
    }
};
let clone7 = JSON.parse(JSON.stringify(person2));
clone7.firstName2 = 'Flody';
clone7.address.street = 'Amphitheatre Parkway';
clone7.address.city = 'Mountain View';
console.log(person2);//{
    //firstName2: 'Avon',
    //lastName2: 'Ferry',
    //address: {
      //street: 'North 1st street',
      //city: 'san Jose',
      //state: 'CA',
      //country: 'USA'
  
  
      //To create a shallow copy, we can use the following methods:
          //Spread syntax […] {…}
          //Object.assign()
         //Array.from()
          //Object.create()
         //Array.prototype.concat()
         
// And to create a deep copy, we can use:

//JSON.parse(JSON.stringify())
//structuredClone()
//Third party libraries like Lodash