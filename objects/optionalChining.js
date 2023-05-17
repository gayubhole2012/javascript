//javascript optional chining is uused to access nested object rpoperties.
//suppose there is an object with lot of nested properties,and we neeed to access a nested property.
//syntax chaining parameter "?""
//obj.value?.property  -works as a value.property if value exists,else return NULL
//obj.value?.expression  -work as value.expression ig the value existes,else return NULL

//eg
const student = {
    address: {
        postcode:'123'
    }
}
if(student && student.address != null && student.address.postcode != null){
    return student.address.postcode;
}

//eg
const student1 = {
    name: 'Sally',
    address: {
        postcode : 123
    },
    grades: {
        physics: 100,
        chemistry: 99,
        maths: 82

    },
};
console.log(student1?.address?.postcode);