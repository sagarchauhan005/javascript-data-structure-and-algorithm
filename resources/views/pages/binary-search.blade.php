@extends('layouts.app')
@section('content')
    <div class="row">
        <div id="about-code">
            <h4><b>Sets</b></h4>
            <p>A binary search tree (BST) is a special type of binary tree where the nodes are stored in a sorted manner.
                It is sorted in such a way that at any given point, a node value must be greater than or equal to the left
                child node value and smaller than the right child node value. Each node has to satisfy this property to
                consider it as a binary search tree. Since the nodes are sorted in a particular order, the binary search
                algorithm can be applied to search items in a BST in logarithmic time.</p>
            <p>Below mentioned is the list of methods written.</p>
            <ul>
                <li>Add</li>
                <li>Find Min</li>
                <li>Find Max</li>
                <li>Find</li>
                <li>Remove</li>
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

    find(data){
        let current = this.root;
        while(current.data !== data){
            if(data<\current.data){
                current = current.left;
            }else if(data > current.data){
                current = current.right;
            }
        }

        if(current===null){
            return null;
        }

        return current;
    }

    remove(data){
        let removeNode = function (node, data) {
            //console.log("node");
            //console.log(node);
            if(node ==null){
                return null;
            }

            if(node.data == data){

                // node has no children
                if(node.left==null && node.right==null){
                    return null;
                }

                //node has no right children
                if(node.right ==null){
                    return node.left;
                }

                // node has no left children
                if(node.left==null){
                    return node.right;
                }

                // node has two children
                let tempNode = node.right;
                while(node.left !=null){
                    tempNode = tempNode.left;
                }

                node.data = tempNode.data;
                node.right = removeNode(node.right,tempNode.data);
                return node;

            }else if(data<\node.data){
                node.left = removeNode(node.left, data);
                return node;
            }else {
                node.right = removeNode(node.right, data);
                return node;
            }
        };
        this.root = removeNode(this.root, data);
    }

    findMinHeight(node=this.root) {
        if(node==null){
            return -1;
        }

        let left = this.findMinHeight(node.left);
        //console.log("Left : "+left);
        let right = this.findMinHeight(node.right);
        //console.log("Right : "+right);
        if(left<\right){
            return left+1;
        }else{
            return right+1;
        }
    };

    findMaxHeight(node=this.root) {
        if(node==null){
            return -1;
        }

        let left = this.findMaxHeight(node.left);
        console.log("Left : "+left);
        let right = this.findMaxHeight(node.right);
        console.log("Right : "+right);
        if(left>right){
            return left+1;
        }else{
            return right+1;
        }
    };

    isBalanced(){
        return (this.findMinHeight()>=(this.findMaxHeight()-1));
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
console.log("Find");
console.log(myTree.find(50));
console.log(myTree.find(70));
console.log("Remove 70");
console.log(myTree.remove(70));
console.log(myTree);
console.log("Min Height : "+myTree.findMinHeight());
console.log("Max Height : "+myTree.findMaxHeight());
console.log("isBalanced : "+myTree.isBalanced());

</code>
            </pre>
        </div>
        <hr>
    </div>
@endsection
