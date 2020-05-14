@extends('layouts.app')
@section('content')
    <div class="row">
        <div id="about-code">
            <h4><b>Stacks</b></h4>
            <p>The stack is a linear data structure that follows the Last-In, First-Out (LIFO) principle. This means that
                there is only one end for the stack, which is used to add items and remove items from the structure. The
                addition of new items in the stack is known as push, and push whilst removing an item is known as pop.</p>
            <p>Below mentioned is the list of methods written.</p>
            <ul>
                <li>Push: add an item at the top of the stack.</li>
                <li>Pop: remove the top item of the stack.</li>
                <li>Top: returns the top item of the stack. It is not the same as pop, as it does not remove the item, it just
                    gets the value for us.</li>
                <li>isEmpty: checks whether the stack is empty or not.</li>
            </ul>
        </div>

        <div id="about-project">
            <pre>
<code>
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
stack.pop();
console.log("Is empty : "+stack.isEmpty());
</code>
            </pre>
        </div>
        <hr>
    </div>
@endsection
