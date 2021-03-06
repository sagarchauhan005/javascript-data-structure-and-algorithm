@extends('layouts.app')
@section('content')
    <div class="row">
        <div id="about-code">
            <h4><b>Sets</b></h4>
            <p>A set is an abstract data type which is used to store certain values. These values are not stored in any
                particular order but there should not be any repeated values in the set. Set is not used like a collection
                where we retrieve a specific value from it; a set is used to check the existence of a value inside it.
                Sometimes a set data structure can be sorted and we call it an ordered set</p>
            <p>Below mentioned is the list of methods written.</p>
            <ul>
                <li>Has: set has value</li>
                <li>Values: returns all the values</li>
                <li>Add: add a value</li>
                <li>Unions: returns union of two sets</li>
                <li>Intersection: returns intersection of two sets</li>
                <li>Difference: returns difference of two sets</li>
                <li>Subset: returns subset of two sets</li>
            </ul>
        </div>

        <div id="about-project">
            <pre>
<code>
var mySet = function () {
    this.data = [];

    //checks if the set has a value or not
    this.has = function (value) {
        return (this.data.indexOf(value) !== -1);
    };

    // adds new values to set
    this.add = function (value) {
        if(!this.has(value)){
            this.data.push(value);
        }
    };

    //returns all the values
    this.values = function () {
        return this.data;
    };

    //returns union set
    this.union = function (ogSet) {
        let newSet = new mySet();
        this.data.forEach(function (val) {
            newSet.add(val);
        });

        ogSet.data.forEach(function (val) {
            newSet.add(val);
        });

        return newSet.values();
    };

    //returns intersection set
    this.intersection = function (ogSet) {
        let newSet = new mySet();
        this.data.forEach(function (val) {
            if(ogSet.has(val)){
                newSet.add(val);
            }
        });

        return newSet.values();
    };

    //returns difference of the two set
    this.diff = function (ogSet) {
        let newSet = new mySet();
        this.data.forEach(function (val) {
            if(!ogSet.has(val)){
                newSet.add(val);
            }
        });

        return newSet.values();
    };

    //returns subset of two sets
    this.subset = function (ogSet) {
        return this.data.every(function (val) {
            return ogSet.has(val);
        });
    }

};

// Console test commands
var obj = new mySet();
obj.add('1');
obj.add('2');
obj.add('3');
obj.add('2');
var obj1 = new mySet();
obj1.add('1');
obj1.add('2');
obj1.add('3');
obj1.add('4');
console.log(obj.values());
console.log(obj1.values());
console.log("Union");
console.log(obj.union(obj1));
console.log("Intersection");
console.log(obj.intersection(obj1));
console.log("Difference");
console.log(obj.diff(obj1));
console.log("Subset");
console.log(obj.subset(obj1));

</code>
            </pre>
        </div>
        <hr>
    </div>
@endsection
