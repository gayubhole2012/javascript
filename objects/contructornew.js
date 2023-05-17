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
function Calculator(){
            this.read = function(){
            this.value1 = +prompt('Enter the first value1', 0);
            this.value2 = +prompt('Enter the second vlaue2' ,0);
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
          alert('sum=' + calculator.sum() );
          alert('mul=' + calculator.mul() );