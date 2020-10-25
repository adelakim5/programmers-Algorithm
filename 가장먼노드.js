const {
    realpath
} = require("fs");

function solution() {
    var answer = 0;
    n = 7;
    edge = [
        [3, 6],
        [4, 3],
        [3, 2],
        [1, 3],
        [1, 2],
        [2, 4],
        [5, 2],
        [6, 7]
    ]
    var relationship = new Array(n)
    for (var j = 0; j < relationship.length; j++) {
        relationship[j] = [];
    }

    for (var i = 0; i < edge.length; i++) {
        var first = edge[i][0]
        var second = edge[i][1]
        relationship[first - 1].push(first, second)
        relationship[second - 1].push(second, first)
    }

    for (var k = 0; k < relationship.length; k++) {
        relationship[k] = [...new Set(relationship[k])]
    }

    var q = []
    var result = []
    // while(true){
    q.push(...relationship[0])
    for (var i = 1; i < q.length; i++) {
        var pointer = q[i]
        var temp = relationship[pointer - 1].filter(e => !q.includes(e))
        if (temp.length !== 0) {
            q.push(...temp)
        } else {
            result.push(pointer)
        }
    }
    console.log("q: ", q)
    // }

    console.log("result: ", result)
    answer = result.length; 

    console.log("rel: ", relationship)
    console.log("ans: ", answer)

}

solution()

function recursion(relationship, past, current, count) {
    var flag = false
    for (var i = 0; i < current.length; i++) {
        var pointer = current[i]
        if ((pointer !== 1) && (!past.includes(pointer))) {
            flag = true
            count = recursion(relationship, current, relationship[pointer - 1], count++)
        }
    }
    if (flag === false) {
        var answer = count;
    }
    return answer;
}