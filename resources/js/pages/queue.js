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
            for (let i = 0; i <collection.length ; i++) {
                //console.log(collection[i]);
                if(value[1]<collection[i][1]){
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

/*
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
*/
