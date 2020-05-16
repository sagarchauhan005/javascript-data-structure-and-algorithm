@extends('layouts.app')
@section('content')
    <div class="row">
        <div id="about-code">
            <h4><b>Sets</b></h4>
            <p>A linked list is a linear data structure which is a collection of data elements also known as nodes and can
                have varying sizes. Usually, listed items are connected through a pointer which is known as a link and
                hence it is known as a linked list. In a linked list, one list element links to the next element through a
                pointer</p>
            <p>Below mentioned is the list of methods written.</p>
            <ul>
                <li>Add</li>
                <li>Remove</li>
                <li>IndexOf</li>
                <li>Size</li>
                <li>isEmpty</li>
                <li>ElementAt</li>
                <li>RemoveAt</li>
            </ul>
        </div>

        <div id="about-project">
            <pre>
<code>
var LinkedList = function () {
    var length = 0;
    var head = null;

    var Node = function (data) {
        this.data = data;
        this.next = null;
    };

    this.head = function () {
        return head;
    };

    this.add = function (data) {
        let node = new Node(data);
        if(head===null){
            head = node;
        }else{
            var current = head;
            while(current.next !=null){
                current = current.next;
            }
            current.next = node;
        }
        length++;
    };

    this.remove = function (data) {
        let current = head;
        let previousNode;
        if(current.data ===data){
            current.next = head;
        }else{
            while(current.data !== data){
                previousNode = current;
                current = current.next;
            }
            previousNode.next = current.next;
        }
        length --;
    };

    this.size = function () {
        return length;
    };

    this.isEmpty = function () {
      return (length === 0);
    };

    this.indexOf = function (data) {
        var current = head;
        let index = -1;
        while (current.next !=null){
            index++;
            if(current.data===data){
                return index;
            }

            current = current.next;
        }

        return -1;
    };

    this.elementAt = function (index) {
        var current = head;
        let count = 0;
        while (count<\index){
            count++;
            current = current.next;
        }

        return current.data;
    };

    this.removeAt = function (index) {
        var current = head;
        var previous;
        var currentIndex = 0;

        if(index<0 || index>length){
            return null;
        }

        if(index===0){
            head = current.next;
        }
        else{
            while (currentIndex<\index){
                currentIndex++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        length--;
        return current.data;
    };

};


let linked = new LinkedList();
linked.add("Sagar");
linked.add("Sheetal");
linked.add("Uday");
linked.add("Vrinda");
linked.add("Vaibhav");
console.log(linked.size());
//console.log("Removing Vrinda");
//linked.remove("Vrinda");
console.log(linked.head());
console.log(linked.elementAt(3));
console.log(linked.indexOf("Uday"));
console.log(linked.removeAt(3));
console.log(linked.head());

</code>
            </pre>
        </div>
        <hr>
    </div>
@endsection
