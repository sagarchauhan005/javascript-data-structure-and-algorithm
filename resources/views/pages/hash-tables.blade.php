@extends('layouts.app')
@section('content')
    <div class="row">
        <div id="about-code">
            <h4><b>Hash Tables</b></h4>
            <p>In programming language, a hash table is a data structure which is used to make an array associative. It
                means we can use keys to map values instead of using an index. A hash table must use a hash function to
                compute an index into an array of buckets or slots, from which the desired value can be found</p>
            <ul>
                <li>Add: add a value</li>
                <li>Remove: remove a value</li>
                <li>Lookup: finds a value</li>
            </ul>
        </div>

        <div id="about-project">
            <pre>
<code>

function hash(string, max){
    if(max>0){
        var hash = 0;
        for (let i = 0; i <\string.length ; i++) {
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
            for (let i = 0; i <\storage[index].length ; i++) {
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
            for (let i = 0; i <\storage[index].length ; i++) {
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
            for (let i = 0; i <\storage[index].length ; i++) {
                if(storage[index][i][0]===key){
                    return storage[index][i];
                }
            }
        }
    }

};

let ht = new HashTable();
ht.add('beau', 'person');
ht.add('fido', 'dog');
ht.add('rex', 'dinosour');
ht.add('tux', 'penguin');
console.log("Print");
console.log(ht.print());
console.log(ht.lookup('rex'));

</code>
            </pre>
        </div>
        <hr>
    </div>
@endsection
