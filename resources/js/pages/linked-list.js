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
        while (count<index){
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
            while (currentIndex<index){
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
