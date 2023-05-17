//their are two type of function 1st factory function and consructor function
//In factory function is simple function that create the object and returns them 

const me = {
    name: 'Sally',
    talk(){
        return `Hello I am ${this.name}`
    }
}
const ben = {
    name:'Ben',
    talk(){
        return `Hello I am ${this.name}`
    }
}
console.log(me.talk());//Hello I am Sally
console.log(ben.talk());//Hello I am Ben
//above example we can two different object but many times create 100 oject and check one by one it can not possible thats why use factory function.

//factory function
  function personFactory(name){
    return {
        talk(){
            return `Hello I am ${name}`
        }
    }
  }
  const me1 = personFactory('Meena');
  console.log(me1.talk());//Hello I am Meena
  const bina = personFactory('Somia');
  console.log(bina.talk());//Hello I am Somia
  const sina = personFactory('Sina');
  console.log(sina.talk());//Hello I am Sina

  //consructor function -use new keyword and this
  function Person(name1){
    this.name1 = name1,
    this.talk = () =>{
         return `Hello I am ${this.name1}`
    }
  }
const mully = new Person('Mully');
console.log(mully.talk());//Hello I am Mully

//Is it possible to create functions A and B so that new A() == new B()?
let obj = {}
function A(){
    return obj;
    }
    function B(){
        return obj;
    }
    console.log(new A() == new B());//true

    //
function Calculator(read){
            this.read = function(){
            this.value1 =6;
            this.value2 = 4;
        };
        this.sum = function(){
            return (this.value1 + this.value2);  
        };
        this.mul = function(){
            return (this.value1 * this.value2);
        };
    }

          let calculator = new Calculator();
          calculator.read();
          console.log('sum=' + calculator.sum() );//10
       console.log('mul=' + calculator.mul() );