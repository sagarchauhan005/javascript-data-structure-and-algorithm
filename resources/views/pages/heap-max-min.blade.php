@extends('layouts.app')
@section('content')
    <div class="row">
        <div id="about-code">
            <h4><b>Heap : Min and Max</b></h4>
            <p>By definition, a heap is a specialized tree data structure that supports a heap property. A heap property is
                defined in such a way that the root of a heap structure will be either smaller or larger than its child nodes.
                If the parent node is greater than the child nodes, then it is known as max-heap and if the parent node is
                smaller than the child nodes then it is known as min-heap</p>
            <p>Below mentioned is the list of methods written.</p>
            <ul>
                <li>Insert: insert data into heap</li>
            </ul>
        </div>

        <div id="about-project">
            <pre>
<code>
// left child: i * 2
// right child: i * 2 + 1
// parent: i / 2

let MinHeap = function () {
    let heap = [null];

    this.insert = function (data) {
        heap.push(data);
        if(heap.length>2){
            let last = heap.length - 1;
            console.log("Last Outside : "+last);
            while (heap[last]<heap[Math.floor(last/2)]){
                console.log("Last Inside : "+last);
                if(last>=1){
                    [heap[Math.floor(last/2)],heap[last]] = [heap[last], heap[Math.floor(last/2)]];
                    if(Math.floor(last/2)>1){
                        last = Math.floor(last/2);
                        console.log("Last Inside if : "+last);
                    }else{
                        break;
                    }
                }
            }
        }
    };

    this.print = function () {
        console.log(heap);
    }
};

let MaxHeap = function () {
    let heap = [null];

    this.insert = function (data) {
        heap.push(data);
        if(heap.length>2){
            let last = heap.length - 1;

            //let parent = Math.floor(last/2);
            while (heap[last]>heap[Math.floor(last/2)]){
                if(last>=1){
                    [heap[Math.floor(last/2)],heap[last]] = [heap[last], heap[Math.floor(last/2)]];
                    if(Math.floor(last/2)>1){
                        last = Math.floor(last/2);
                    }else{
                        break;
                    }
                }
            }
        }
    };

    this.print = function () {
        console.log(heap);
    }
};

let newMin = new MinHeap();
newMin.insert(100);
newMin.insert(50);
newMin.insert(120);
newMin.insert(10);
newMin.insert(250);
newMin.insert(70);
newMin.insert(75);
console.log("Print Min Heap");
newMin.print();

let newMax = new MaxHeap();
newMax.insert(100);
newMax.insert(50);
newMax.insert(120);
newMax.insert(10);
newMax.insert(250);
newMax.insert(70);
newMax.insert(75);
console.log("Print Max Heap");
newMax.print();

</code>
            </pre>
        </div>
        <hr>
    </div>
@endsection
