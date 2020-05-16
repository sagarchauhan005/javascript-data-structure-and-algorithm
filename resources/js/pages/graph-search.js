function bfs(graph, root) {
    let nodesLen = {};
    for (let i = 0; i <graph.length ; i++) {
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
        for (let j = 0; j <neighborsId.length ; j++) {
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

//console.log(bfs(exBFSGraph, 1));
