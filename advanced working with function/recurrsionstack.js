//when function called itself thats called a recursion step.
//recursion example 
/*let num = 1;
function show(){
    console.log('Hi',num);
    num++;
    show();
}
show();*/

//factorial
function fact(n){
    if(n==0)
    return 1;
    else
    return n * fact(n-1);
    }
    let num2 = 5;
    let result = fact(num2);
    console.log(result);//120

//sunTo(n)
function sumTo(n){
    if(n == 1)return 1;
    return n + sumTo(n -1);
    }
    console.log(sumTo(100));//5050

    //single linked list
    let list1 = {
        value:1,
        next:{
            value:2,
            next:{
                value:3,
                next:{
                value:4,
                next:{
                value:5,
                next:{
                    value:6,
                    next:null
                    }
                      }
                      }
                }
            }
    };

    function printList1(list1){
         console.log(list1.value);
         if(list1.next){
            printList1(list1.next);
         }
    }
    printList1(list1);//1  2  3  4  5  6

    //reverse single linked list
    let list2 = {
        value:1,
        next:{
            value:2,
            next:{
                value:3,
                next:{
                value:4,
                next:{
                value:5,
                next:{
                    value:6,
                    next:null
                    }
                      }
                      }
                }
            }
    };

    function printList2(list2){
        if(list2.next){
            printList2(list2.next)
        }
        console.log(list2.value)
    }
    printList2(list2);// 6 5 4 3 2 1