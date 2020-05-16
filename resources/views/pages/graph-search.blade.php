@extends('layouts.app')
@section('content')
    <div class="row">
        <div id="about-code">
            <h4><b>Graphs</b></h4>
            <p>In a breadth first search,
                popularly known as BFS, we start from a node (mostly root node) and first visit all adjacent or neighbor
                nodes before visiting the other neighbor nodes. In other words, we have to move level by level while we
                are applying BFS. As we search level by level, this technique is known as breadth first search.</p>
            <p>Below mentioned is the list of methods written.</p>
            <ul>
                <li>Breadth First Search</li>
            </ul>
        </div>

        <div id="about-project">
            <pre>
<code>
function bfs(graph, root) {
    let nodesLen = {};
    for (let i = 0; i <\graph.length ; i++) {
        nodesLen[i] = Infinity;
        }
        nodesLen[root] = 0;
        var queue = [root];
        var current;

        while (queue.length!==0){
        current = queue.shift();
        //console.log("Current : "+current);
        var curConnected = graph[current];
        var neighborsId = [];
        var connectIndex = curConnected.indexOf(1);
        while (connectIndex!==-1){
            neighborsId.push(connectIndex);
            connectIndex = curConnected.indexOf(1,connectIndex+1);
        }
        for (let j = 0; j <\neighborsId.length ; j++) {
                if(nodesLen[neighborsId[j]]===Infinity){
                //console.log("Before");
                //console.log(nodesLen);
                nodesLen[neighborsId[j]] = nodesLen[current]+1;
                //console.log("After");
                //console.log(nodesLen);
                //console.log("NeiId : "+neighborsId[j]);
                queue.push(neighborsId[j]);
                break;
            }
        }
    }
    return nodesLen;
}

var exBFSGraph = [
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0]
];

console.log(bfs(exBFSGraph, 1));

</code>
            </pre>
        </div>
        <hr>
    </div>
@endsection
