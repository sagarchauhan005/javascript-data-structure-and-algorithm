@extends('layouts.app')
@section('content')
    <div class="row">
        <div id="about-code">
            <h4><b>Queue</b></h4>
            <p>A queue is another linear data structure which follows the FIFO principle. A queue allows two basic
                operations on the collection. The first one is enqueue which allows us to add an item to the back of the
                queue. The second one is dequeue which allows us to remove an item from the front of the queue</p>
            <p>Below mentioned is the list of methods written.</p>
            <ul>
                <li>Print: prints a queue</li>
                <li>Enqueue: add a queue</li>
                <li>Dequeue: remove a queue</li>
                <li>Latest: returns latest active queue</li>
                <li>Size: returns size of the queue</li>
                <li>isEmpty: checks if the queue is empty or not</li>
            </ul>
        </div>

        <div id="about-project">
            <pre>
<code>
let priorityQueue = function () {
    let collection = [];

    this.print = function () {
        console.log(collection);
    };

    this.empty = function () {
        return (collection.length===0);
    };

    this.enqueue = function (value) {
        if(this.empty()){
            collection.push(value);
        }else{
            let added = false;
            for (let i = 0; i <\collection.length ; i++) {
                //console.log(collection[i]);
                if(value[1]<\collection[i][1]){
                    collection.splice(i,0, value);
                    added = true;
                    break;
                }
            }

            if(!added){
                collection.push(value);
            }
        }
    };

    this.dequeue = function () {
        if(!this.empty()) {
            return collection.shift();
        }
    };

    this.latest = function () {
        if(!this.empty()){
            return collection[0];
        }

        return "empty queue";
    };

    this.size = function () {
        return collection.length;
    }
};

// Console test commands

let myQ = new priorityQueue();
console.log("Empty");
console.log(myQ.empty());
myQ.enqueue(["sagar",1]);
myQ.enqueue(["chauhan",3]);
console.log(myQ.print());
console.log("Size");
console.log(myQ.size());
myQ.enqueue(["sanjay",2]);
console.log(myQ.print());
myQ.enqueue(["sheetal",4]);
myQ.enqueue(["kulbhushan",6]);
myQ.enqueue(["vasudeva",5]);
console.log("Size");
console.log(myQ.size());
myQ.enqueue(["vasudeva",2]);
console.log("Latest");
console.log(myQ.latest());
console.log("Dequeue");
console.log(myQ.dequeue());
console.log("Size");
console.log(myQ.size());
console.log("FINAL");
console.log(myQ.print());

</code>
            </pre>
        </div>
        <hr>
    </div>
@endsection
