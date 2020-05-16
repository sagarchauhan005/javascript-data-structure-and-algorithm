
function hash(string, max){
    if(max>0){
        var hash = 0;
        for (let i = 0; i <string.length ; i++) {
            //console.log(string.charCodeAt(i));
            hash += string.charCodeAt(i);
            //console.log(hash);
        }
        return hash % max;
    }
    return null;
}

var HashTable = function(){

    let storage = [];
    let limit = 14;

    this.print = function() {
        console.log(storage);
    };

    this.add = function (key, value) {
        var index = hash(key, limit);
        if(storage[index]===undefined){
            storage[index] = [
                [key, value],
            ];
        }else{
            //console.log(storage);
            var inserted = false;
            for (let i = 0; i <storage[index].length ; i++) {
                if(storage[index][i][0]===key){
                    storage[index][i][1] = value;
                    inserted = true;
                }
            }

            if(!inserted){
                storage[index].push([key, value]);
            }
        }
    };

    this.remove = function (key, value) {
        var index = hash(key, limit);
        if(storage[index].length===1 && storage[0][0]===key){
            delete storage[index];
        }else{
            for (let i = 0; i <storage[index].length ; i++) {
                if(storage[index][i][0]===key){
                    delete storage[index][i];
                }
            }
        }
    };

    this.lookup = function (key) {
        var index = hash(key, limit);
        if(storage[index]===undefined){
            return undefined;
        }else{
            for (let i = 0; i <storage[index].length ; i++) {
                if(storage[index][i][0]===key){
                    return storage[index][i];
                }
            }
        }
    }

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
