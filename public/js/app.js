/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/pages/binary-search-traversal.js":
/*!*******************************************************!*\
  !*** ./resources/js/pages/binary-search-traversal.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function Node(data) {
  var left = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var right = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  _classCallCheck(this, Node);

  this.data = data;
  this.right = left;
  this.left = right;
};

var binarySearch = /*#__PURE__*/function () {
  function binarySearch() {
    _classCallCheck(this, binarySearch);

    this.root = null;
  }

  _createClass(binarySearch, [{
    key: "add",
    value: function add(data) {
      var node = this.root;

      if (node === null) {
        this.root = new Node(data);
        return;
      } else {
        var search = function search(node) {
          if (data < node.data) {
            if (node.left == null) {
              node.left = new Node(data);
              return;
            } else if (node.left !== null) {
              return search(node.left);
            }
          } else if (data > node.data) {
            if (node.right == null) {
              node.right = new Node(data);
              return;
            } else if (node.right !== null) {
              return search(node.right);
            }
          } else {
            return null;
          }
        };

        return search(node);
      }
    }
  }, {
    key: "inorder",
    value: function inorder() {
      if (this.root == null) {
        return null;
      } else {
        var traversalInOrder = function traversalInOrder(node) {
          node.left && traversalInOrder(node.left);
          result.push(node);
          node.right && traversalInOrder(node.right);
        };

        var result = [];
        traversalInOrder(this.root);
        return result;
      }
    }
  }, {
    key: "preorder",
    value: function preorder() {
      if (this.root == null) {
        return null;
      } else {
        var traversalPreOrder = function traversalPreOrder(node) {
          result.push(node);
          node.left && traversalPreOrder(node.left);
          node.right && traversalPreOrder(node.right);
        };

        var result = [];
        traversalPreOrder(this.root);
        return result;
      }
    }
  }, {
    key: "postorder",
    value: function postorder() {
      if (this.root == null) {
        return null;
      } else {
        var traversalPostOrder = function traversalPostOrder(node) {
          node.left && traversalPostOrder(node.left);
          node.right && traversalPostOrder(node.right);
          result.push(node);
        };

        var result = [];
        traversalPostOrder(this.root);
        return result;
      }
    }
  }, {
    key: "levelOrder",
    value: function levelOrder() {
      var result = [];
      var queue = [];

      if (this.root != null) {
        queue.push(this.root);

        while (queue.length > 0) {
          var node = queue.shift();
          result.push(node.data);

          if (node.left != null) {
            queue.push(node.left);
          }

          if (node.right != null) {
            queue.push(node.right);
          }
        }

        return result;
      } else {
        return null;
      }
    }
  }]);

  return binarySearch;
}();
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

/***/ }),

/***/ "./resources/js/pages/binary-search.js":
/*!*********************************************!*\
  !*** ./resources/js/pages/binary-search.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function Node(data) {
  var left = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var right = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  _classCallCheck(this, Node);

  this.data = data;
  this.right = left;
  this.left = right;
};

var binarySearch = /*#__PURE__*/function () {
  function binarySearch() {
    _classCallCheck(this, binarySearch);

    this.root = null;
  }

  _createClass(binarySearch, [{
    key: "add",
    value: function add(data) {
      var node = this.root;

      if (node === null) {
        this.root = new Node(data);
        return;
      } else {
        var search = function search(node) {
          if (data < node.data) {
            if (node.left == null) {
              node.left = new Node(data);
              return;
            } else if (node.left !== null) {
              return search(node.left);
            }
          } else if (data > node.data) {
            if (node.right == null) {
              node.right = new Node(data);
              return;
            } else if (node.right !== null) {
              return search(node.right);
            }
          } else {
            return null;
          }
        };

        return search(node);
      }
    }
  }, {
    key: "find",
    value: function find(data) {
      var current = this.root;

      while (current.data !== data) {
        if (data < current.data) {
          current = current.left;
        } else if (data > current.data) {
          current = current.right;
        }
      }

      if (current === null) {
        return null;
      }

      return current;
    }
  }, {
    key: "remove",
    value: function remove(data) {
      var removeNode = function removeNode(node, data) {
        //console.log("node");
        //console.log(node);
        if (node == null) {
          return null;
        }

        if (node.data == data) {
          // node has no children
          if (node.left == null && node.right == null) {
            return null;
          } //node has no right children


          if (node.right == null) {
            return node.left;
          } // node has no left children


          if (node.left == null) {
            return node.right;
          } // node has two children


          var tempNode = node.right;

          while (node.left != null) {
            tempNode = tempNode.left;
          }

          node.data = tempNode.data;
          node.right = removeNode(node.right, tempNode.data);
          return node;
        } else if (data < node.data) {
          node.left = removeNode(node.left, data);
          return node;
        } else {
          node.right = removeNode(node.right, data);
          return node;
        }
      };

      this.root = removeNode(this.root, data);
    }
  }, {
    key: "findMinHeight",
    value: function findMinHeight() {
      var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.root;

      if (node == null) {
        return -1;
      }

      var left = this.findMinHeight(node.left); //console.log("Left : "+left);

      var right = this.findMinHeight(node.right); //console.log("Right : "+right);

      if (left < right) {
        return left + 1;
      } else {
        return right + 1;
      }
    }
  }, {
    key: "findMaxHeight",
    value: function findMaxHeight() {
      var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.root;

      if (node == null) {
        return -1;
      }

      var left = this.findMaxHeight(node.left); //console.log("Left : "+left);

      var right = this.findMaxHeight(node.right); //console.log("Right : "+right);

      if (left > right) {
        return left + 1;
      } else {
        return right + 1;
      }
    }
  }, {
    key: "isBalanced",
    value: function isBalanced() {
      return this.findMinHeight() >= this.findMaxHeight() - 1;
    }
  }]);

  return binarySearch;
}();
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
console.log("Find");
console.log(myTree.find(50));
console.log(myTree.find(70));
console.log("Remove 70");
console.log(myTree.remove(70));
console.log(myTree);
console.log("Min Height : "+myTree.findMinHeight());
console.log("Max Height : "+myTree.findMaxHeight());
console.log("isBalanced : "+myTree.isBalanced());
*/

/***/ }),

/***/ "./resources/js/pages/graph-search.js":
/*!********************************************!*\
  !*** ./resources/js/pages/graph-search.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function bfs(graph, root) {
  var nodesLen = {};

  for (var i = 0; i < graph.length; i++) {
    nodesLen[i] = Infinity;
  }

  nodesLen[root] = 0;
  var queue = [root];
  var current;

  while (queue.length !== 0) {
    current = queue.shift(); //console.log("Current : "+current);

    var curConnected = graph[current];
    var neighborsId = [];
    var connectIndex = curConnected.indexOf(1);

    while (connectIndex !== -1) {
      neighborsId.push(connectIndex);
      connectIndex = curConnected.indexOf(1, connectIndex + 1);
    }

    for (var j = 0; j < neighborsId.length; j++) {
      if (nodesLen[neighborsId[j]] === Infinity) {
        //console.log("Before");
        //console.log(nodesLen);
        nodesLen[neighborsId[j]] = nodesLen[current] + 1; //console.log("After");
        //console.log(nodesLen);
        //console.log("NeiId : "+neighborsId[j]);

        queue.push(neighborsId[j]);
        break;
      }
    }
  }

  return nodesLen;
}

var exBFSGraph = [[0, 1, 1, 1, 0], [0, 0, 1, 0, 0], [1, 1, 0, 0, 0], [0, 0, 0, 1, 0], [0, 1, 0, 0, 0]]; //console.log(bfs(exBFSGraph, 1));

/***/ }),

/***/ "./resources/js/pages/hash-tables.js":
/*!*******************************************!*\
  !*** ./resources/js/pages/hash-tables.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function hash(string, max) {
  if (max > 0) {
    var hash = 0;

    for (var i = 0; i < string.length; i++) {
      //console.log(string.charCodeAt(i));
      hash += string.charCodeAt(i); //console.log(hash);
    }

    return hash % max;
  }

  return null;
}

var HashTable = function HashTable() {
  var storage = [];
  var limit = 14;

  this.print = function () {
    console.log(storage);
  };

  this.add = function (key, value) {
    var index = hash(key, limit);

    if (storage[index] === undefined) {
      storage[index] = [[key, value]];
    } else {
      //console.log(storage);
      var inserted = false;

      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          storage[index][i][1] = value;
          inserted = true;
        }
      }

      if (!inserted) {
        storage[index].push([key, value]);
      }
    }
  };

  this.remove = function (key, value) {
    var index = hash(key, limit);

    if (storage[index].length === 1 && storage[0][0] === key) {
      delete storage[index];
    } else {
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          delete storage[index][i];
        }
      }
    }
  };

  this.lookup = function (key) {
    var index = hash(key, limit);

    if (storage[index] === undefined) {
      return undefined;
    } else {
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          return storage[index][i];
        }
      }
    }
  };
};
/*
let ht = new HashTable();
ht.add('beau', 'person');
ht.add('fido', 'dog');
ht.add('rex', 'dinosour');
ht.add('tux', 'penguin');
console.log("Print");
console.log(ht.print());
console.log(ht.lookup('rex'));
*/

/***/ }),

/***/ "./resources/js/pages/heap-max-min.js":
/*!********************************************!*\
  !*** ./resources/js/pages/heap-max-min.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// left child: i * 2
// right child: i * 2 + 1
// parent: i / 2
var MinHeap = function MinHeap() {
  var heap = [null];

  this.insert = function (data) {
    heap.push(data);

    if (heap.length > 2) {
      var last = heap.length - 1;
      console.log("Last Outside : " + last);

      while (heap[last] < heap[Math.floor(last / 2)]) {
        console.log("Last Inside : " + last);

        if (last >= 1) {
          var _ref = [heap[last], heap[Math.floor(last / 2)]];
          heap[Math.floor(last / 2)] = _ref[0];
          heap[last] = _ref[1];

          if (Math.floor(last / 2) > 1) {
            last = Math.floor(last / 2);
            console.log("Last Inside if : " + last);
          } else {
            break;
          }
        }
      }
    }
  };

  this.print = function () {
    console.log(heap);
  };
};

var MaxHeap = function MaxHeap() {
  var heap = [null];

  this.insert = function (data) {
    heap.push(data);

    if (heap.length > 2) {
      var last = heap.length - 1; //let parent = Math.floor(last/2);

      while (heap[last] > heap[Math.floor(last / 2)]) {
        if (last >= 1) {
          var _ref2 = [heap[last], heap[Math.floor(last / 2)]];
          heap[Math.floor(last / 2)] = _ref2[0];
          heap[last] = _ref2[1];

          if (Math.floor(last / 2) > 1) {
            last = Math.floor(last / 2);
          } else {
            break;
          }
        }
      }
    }
  };

  this.print = function () {
    console.log(heap);
  };
};
/*let newMin = new MinHeap();
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
newMax.print();*/

/***/ }),

/***/ "./resources/js/pages/linked-list.js":
/*!*******************************************!*\
  !*** ./resources/js/pages/linked-list.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var LinkedList = function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function Node(data) {
    this.data = data;
    this.next = null;
  };

  this.head = function () {
    return head;
  };

  this.add = function (data) {
    var node = new Node(data);

    if (head === null) {
      head = node;
    } else {
      var current = head;

      while (current.next != null) {
        current = current.next;
      }

      current.next = node;
    }

    length++;
  };

  this.remove = function (data) {
    var current = head;
    var previousNode;

    if (current.data === data) {
      current.next = head;
    } else {
      while (current.data !== data) {
        previousNode = current;
        current = current.next;
      }

      previousNode.next = current.next;
    }

    length--;
  };

  this.size = function () {
    return length;
  };

  this.isEmpty = function () {
    return length === 0;
  };

  this.indexOf = function (data) {
    var current = head;
    var index = -1;

    while (current.next != null) {
      index++;

      if (current.data === data) {
        return index;
      }

      current = current.next;
    }

    return -1;
  };

  this.elementAt = function (index) {
    var current = head;
    var count = 0;

    while (count < index) {
      count++;
      current = current.next;
    }

    return current.data;
  };

  this.removeAt = function (index) {
    var current = head;
    var previous;
    var currentIndex = 0;

    if (index < 0 || index > length) {
      return null;
    }

    if (index === 0) {
      head = current.next;
    } else {
      while (currentIndex < index) {
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
/*let linked = new LinkedList();
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
console.log(linked.head());*/

/***/ }),

/***/ "./resources/js/pages/queue.js":
/*!*************************************!*\
  !*** ./resources/js/pages/queue.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var priorityQueue = function priorityQueue() {
  var collection = [];

  this.print = function () {
    console.log(collection);
  };

  this.empty = function () {
    return collection.length === 0;
  };

  this.enqueue = function (value) {
    if (this.empty()) {
      collection.push(value);
    } else {
      var added = false;

      for (var i = 0; i < collection.length; i++) {
        //console.log(collection[i]);
        if (value[1] < collection[i][1]) {
          collection.splice(i, 0, value);
          added = true;
          break;
        }
      }

      if (!added) {
        collection.push(value);
      }
    }
  };

  this.dequeue = function () {
    if (!this.empty()) {
      return collection.shift();
    }
  };

  this.latest = function () {
    if (!this.empty()) {
      return collection[0];
    }

    return "empty queue";
  };

  this.size = function () {
    return collection.length;
  };
}; // Console test commands

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

/***/ }),

/***/ "./resources/js/pages/sets.js":
/*!************************************!*\
  !*** ./resources/js/pages/sets.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var mySet = function mySet() {
  this.data = []; //checks if the set has a value or not

  this.has = function (value) {
    return this.data.indexOf(value) !== -1;
  }; // adds new values to set


  this.add = function (value) {
    if (!this.has(value)) {
      this.data.push(value);
    }
  }; //returns all the values


  this.values = function () {
    return this.data;
  }; //returns union set


  this.union = function (ogSet) {
    var newSet = new mySet();
    this.data.forEach(function (val) {
      newSet.add(val);
    });
    ogSet.data.forEach(function (val) {
      newSet.add(val);
    });
    return newSet.values();
  }; //returns intersection set


  this.intersection = function (ogSet) {
    var newSet = new mySet();
    this.data.forEach(function (val) {
      if (ogSet.has(val)) {
        newSet.add(val);
      }
    });
    return newSet.values();
  }; //returns difference of the two set


  this.diff = function (ogSet) {
    var newSet = new mySet();
    this.data.forEach(function (val) {
      if (!ogSet.has(val)) {
        newSet.add(val);
      }
    });
    return newSet.values();
  }; //returns subset of two sets


  this.subset = function (ogSet) {
    return this.data.every(function (val) {
      return ogSet.has(val);
    });
  };
}; // Console test commands

/*var obj = new mySet();
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
console.log(obj.subset(obj1));*/

/***/ }),

/***/ "./resources/js/pages/stacks.js":
/*!**************************************!*\
  !*** ./resources/js/pages/stacks.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var Stack = function Stack() {
  this.data = {};
  this.count = 0; // adds a new element in the stack

  this.add = function (value) {
    if (value != null) {
      this.data[this.count] = value;
      this.count++;
    }

    return null;
  }; // returns the entire stack


  this.show = function () {
    return this.data;
  }; // pops/remove the last entered stack element


  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    delete this.data[this.count];
    return this.data;
  }; //return the size of stack


  this.size = function () {
    return Object.keys(this.data).length;
  }; // returns the top/last element of stack


  this.top = function () {
    var size = this.size();

    if (size > 0) {
      return this.data[size - 1];
    }

    return "empty stack";
  }; //checks if the stack is empty or not


  this.isEmpty = function () {
    return !this.size();
  };
}; // Test commands in console

/*var stack = new Stack();
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
console.log("Is empty : "+stack.isEmpty());*/

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./resources/js/pages/binary-search-traversal.js ./resources/js/pages/binary-search.js ./resources/js/pages/graph-search.js ./resources/js/pages/hash-tables.js ./resources/js/pages/heap-max-min.js ./resources/js/pages/linked-list.js ./resources/js/pages/queue.js ./resources/js/pages/sets.js ./resources/js/pages/stacks.js ./resources/sass/app.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/sagar/Desktop/Sagar Projects/Data Structures and Algorithms/javascript-ds-and-algo/resources/js/pages/binary-search-traversal.js */"./resources/js/pages/binary-search-traversal.js");
__webpack_require__(/*! /home/sagar/Desktop/Sagar Projects/Data Structures and Algorithms/javascript-ds-and-algo/resources/js/pages/binary-search.js */"./resources/js/pages/binary-search.js");
__webpack_require__(/*! /home/sagar/Desktop/Sagar Projects/Data Structures and Algorithms/javascript-ds-and-algo/resources/js/pages/graph-search.js */"./resources/js/pages/graph-search.js");
__webpack_require__(/*! /home/sagar/Desktop/Sagar Projects/Data Structures and Algorithms/javascript-ds-and-algo/resources/js/pages/hash-tables.js */"./resources/js/pages/hash-tables.js");
__webpack_require__(/*! /home/sagar/Desktop/Sagar Projects/Data Structures and Algorithms/javascript-ds-and-algo/resources/js/pages/heap-max-min.js */"./resources/js/pages/heap-max-min.js");
__webpack_require__(/*! /home/sagar/Desktop/Sagar Projects/Data Structures and Algorithms/javascript-ds-and-algo/resources/js/pages/linked-list.js */"./resources/js/pages/linked-list.js");
__webpack_require__(/*! /home/sagar/Desktop/Sagar Projects/Data Structures and Algorithms/javascript-ds-and-algo/resources/js/pages/queue.js */"./resources/js/pages/queue.js");
__webpack_require__(/*! /home/sagar/Desktop/Sagar Projects/Data Structures and Algorithms/javascript-ds-and-algo/resources/js/pages/sets.js */"./resources/js/pages/sets.js");
__webpack_require__(/*! /home/sagar/Desktop/Sagar Projects/Data Structures and Algorithms/javascript-ds-and-algo/resources/js/pages/stacks.js */"./resources/js/pages/stacks.js");
module.exports = __webpack_require__(/*! /home/sagar/Desktop/Sagar Projects/Data Structures and Algorithms/javascript-ds-and-algo/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });