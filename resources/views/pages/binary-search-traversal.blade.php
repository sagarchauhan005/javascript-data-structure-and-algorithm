@extends('layouts.app')
@section('content')
    <div class="row">
        <div id="about-code">
            <h4><b>Binary Search Tree : Traversal</b></h4>
            <p>A queue is another linear data structure which follows the FIFO principle. A queue allows two basic
                operations on the collection. The first one is enqueue which allows us to add an item to the back of the
                queue. The second one is dequeue which allows us to remove an item from the front of the queue</p>
            <p>Below mentioned is the list of methods written.</p>
            <ul>
                <li>In-order: When all the numbers are in order from left to right</li>
                <li>Pre-order: Root nodes are explored first and then the leaf-nodes</li>
                <li>Post-order: All the leaf nodes are processed first</li>
                <li>Level-order: The ordering is done by each level</li>
            </ul>
        </div>

        <div id="about-project">
            <pre>
<code>
class Node {
    constructor(data, left=null, right=null) {
        this.data = data;
        this.right = left;
        this.left = right;
    }
}

class binarySearch {
    constructor() {
        this.root = null;
    }

    add(data){
        const node = this.root;
        if(node===null){
            this.root = new Node(data);
            return;
        }else{
            const search = function (node) {
                if(data<\node.data){
                    if(node.left==null){
                        node.left = new Node(data);
                        return;
                    }else if(node.left !==null){
                        return search(node.left);
                    }
                }else if(data > node.data){
                    if(node.right==null){
                        node.right = new Node(data);
                        return;
                    }else if(node.right !==null){
                        return search(node.right);
                    }
                }else{
                    return null;
                }
            };

            return search(node);
        }
    }

    inorder(){
        if(this.root==null){
            return null;
        }else{
            var result = [];
            function traversalInOrder(node) {
                node.left && traversalInOrder(node.left);
                result.push(node);
                node.right && traversalInOrder(node.right);
            }
            traversalInOrder(this.root);
            return result;
        }
    }

    preorder(){
        if(this.root==null){
            return null;
        }else{
            var result = [];
            function traversalPreOrder(node) {
                result.push(node);
                node.left && traversalPreOrder(node.left);
                node.right && traversalPreOrder(node.right);
            }
            traversalPreOrder(this.root);
            return result;
        }
    }

    postorder(){
        if(this.root==null){
            return null;
        }else{
            var result = [];
            function traversalPostOrder(node) {
                node.left && traversalPostOrder(node.left);
                node.right && traversalPostOrder(node.right);
                result.push(node);
            }
            traversalPostOrder(this.root);
            return result;
        }
    }

    levelOrder(){
        let result = [];
        let queue = [];
        if(this.root!=null){
                queue.push(this.root);
                while (queue.length>0){
                    let node = queue.shift();
                    result.push(node.data);
                    if(node.left!=null){
                        queue.push(node.left);
                    }
                    if(node.right!=null){
                        queue.push(node.right);
                    }
                }
            return result;
        }else{
            return null;
        }
    }

}

let myTree = new binarySearch();
console.log(myTree);
myTree.add(100);
myTree.add(70);
myTree.add(200);
myTree.add(50);
myTree.add(40);
myTree.add(345);
myTree.add(150);
myTree.add(210);
myTree.add(250);
console.log(myTree);
console.log(myTree.inorder());
console.log(myTree.preorder());
console.log(myTree.postorder());
console.log(myTree.levelOrder());

</code>
            </pre>
        </div>
        <hr>
    </div>
@endsection
