function bfs(rootNode, vertices, edges){
    rootNode.distance = 0
    queue = [rootNode]
    while (queue != 0) {
        let currentNode = queue.shift()
        let adjacentNodes = findAdjacent(currentNode.name, edges, vertices)
        for vertex in adjacentVeritices {
            markDistanceAndPredecessor(vertex)
            addToQueue(vertex)
        }
    }
}
function findAdjacent (nodeName, edges, vertices) {
    let adjacent = []
    for edge in edges {
        if edge.includes?(nodeName) {
            adjacent.push(edge)
        }
    }
    return adjacent
}
