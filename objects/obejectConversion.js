//Object to primitive conversion
//converion rule- There no conversion to boolean .All object are true in boolean context.there exist only numeric and string conversion
//to do conversion ,javascript to find and call three object method
//call- obj[Symbol.toprimitive](hint)-the method with the symbolic key
 //-if hint is string = obj.toString() or obj.valueOf()
//- if hint is number or default - obj.valueOf() or obj.toString()
//Symbol.toPriimitve
//built in symbol named Symbol.toPrimitive  that should be used to name the conversion method
//string
let obj = {
    name: 'Java',
};
console.log(obj);//{ name: 'Java' }

//number
let obj1 = {
    name: 'Java',
};
let num = Number(obj1);
console.log(num);//NAN

//default
let obj2 = {
    name: 'Javawwe',
}
let result = obj1 +obj2;

//[Symbol.toprimitive](hint)
let user = {
    name1: 'Sally',
    money: 1000,
    [Symbol.toPrimitive](hint){
        console.log(`hint: ${hint}`);
        return hint === 'string' ? `{name: "${this.name1}"}` :this.money
    }
}
console.log(user);//hint: number   1000
console.log(+user);//hint: default
console.log(user +500);//1500

// toString
//historical reason if toString or valueOf retruns an object there is no error
let user1 = {
    name2: 'Addy',
    money1: 890,
    toString(){
        return { name2: '${this.name2}'}
    }
}
console.log(user1);
console.log(user1.valueOf === user1);

//eg
let obj3 = {
    toString(){
        return '2';
    }
};
console.log(obj3 + 2);//22 conversion primitive return a string = concatenation 

//valueOf example
let user5 = {
    name4: 'Sonia' 
};
console.log(user5);//{name4: sonia}
console.log(user5.valueOf() === user5);//true