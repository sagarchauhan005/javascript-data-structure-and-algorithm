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
                if(data<node.data){
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

/*
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
*/
