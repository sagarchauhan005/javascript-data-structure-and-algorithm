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

/***/ "./resources/js/pages/sets.js":
/*!************************************!*\
  !*** ./resources/js/pages/sets.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var mySet = function mySet() {
  this.data = []; // adds new values to set

  this.add = function (value) {
    if (value != null) {
      this.data.push(value);
    }
  }; //checks if the set has a value or not


  this.has = function (value) {
    return this.data.indexOf(value) !== -1;
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
/*!***************************************************************************************************!*\
  !*** multi ./resources/js/pages/sets.js ./resources/js/pages/stacks.js ./resources/sass/app.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/sagar/Desktop/Sagar Projects/Data Structures and Algorithms/javascript-ds-and-algo/resources/js/pages/sets.js */"./resources/js/pages/sets.js");
__webpack_require__(/*! /home/sagar/Desktop/Sagar Projects/Data Structures and Algorithms/javascript-ds-and-algo/resources/js/pages/stacks.js */"./resources/js/pages/stacks.js");
module.exports = __webpack_require__(/*! /home/sagar/Desktop/Sagar Projects/Data Structures and Algorithms/javascript-ds-and-algo/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });