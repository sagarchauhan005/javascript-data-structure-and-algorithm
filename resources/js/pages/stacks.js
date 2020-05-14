var Stack = function () {
    this.data = {};
    this.count = 0;

    // adds a new element in the stack
    this.add = function (value) {
        if(value!=null){
            this.data[this.count] = value;
            this.count++;
        }
        return null;
    };

    // returns the entire stack
    this.show = function () {
        return this.data;
    };

    // pops/remove the last entered stack element
    this.pop = function () {
        if(this.count===0){
            return undefined;
        }

        this.count--;
        delete this.data[this.count];
        return this.data;
    };

    //return the size of stack
    this.size= function () {
        return Object.keys(this.data).length;
    };

    // returns the top/last element of stack
    this.top =function () {
      let size = this.size();
      if(size>0){
          return this.data[size-1];
      }
      return "empty stack";
    };

    //checks if the stack is empty or not
    this.isEmpty = function () {
        return !(this.size());
    }
};

// Test commands in console
var stack = new Stack();
stack.add("sagar");
stack.add("chauhan");
stack.add("is");
stack.add("awesome");
console.log(stack.show());
console.log(stack.top());
console.log("Is empty : "+stack.isEmpty());
console.log("Start popping");
stack.pop();
stack.pop();
stack.pop();
stack.pop();
console.log("Is empty : "+stack.isEmpty());

