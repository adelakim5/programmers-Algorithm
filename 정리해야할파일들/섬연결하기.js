function solution(n, costs) {
    var answer = 0;
    costs.sort((a,b)=> a[2]-b[2])
    var cycleTable = Array(n).fill(0).map((element, index)=> index)
    
    while(!isOne(cycleTable)){
        var current = costs.shift()
        console.log("current", current)
        var one = current[0]
        var the_other = current[1]
        var cost = current[2]
        if(cycleTable[the_other] !== cycleTable[one]){
            cycleTable = changeCycleTableNumber(cycleTable, one, the_other)
            console.log("cycleTable:", cycleTable)
            answer+=cost
        }
    }
    return answer;
}

function changeCycleTableNumber(cycleTable, one, the_other){
    var cycleTheOther = cycleTable[the_other]
    var cycleOne = cycleTable[one]
    for(var i=0; i<cycleTable.length; i++){
        if(cycleTable[i] === cycleTheOther) cycleTable[i] = cycleOne
    }
    return cycleTable 
}
    
function isOne(cycleTable){
    for(var i=1; i<cycleTable.length; i++){
        if(cycleTable[i-1] !== cycleTable[i]) return false 
    }
    return true 
}
var n = 6
var costs = [[0, 1, 1], [2, 3, 1], [4, 5, 1], [0, 2, 2], [3, 5, 3]]
// var n = 5
// var costs = [[0, 1, 1], [3, 1, 1], [0, 2, 2], [0, 3, 2], [0, 4, 100]]
// var n = 5
// var costs =  [[0, 1, 1], [0, 2, 2], [1, 2, 5], [1, 3, 3], [2, 3, 8], [3, 4, 1]]
console.log(solution(n, costs))

/*
function solution(n, costs) {
    var answer = 0;
    costs.sort((a,b)=> a[2]-b[2])
    console.log("costs", costs)
    var cycleTable = Array(100).fill(-1)
    for(var i=0; i<costs.length; i++){
        if(!cycleTable.includes(costs[i][0])) cycleTable[costs[i][0]] = costs[i][0]
        if(!cycleTable.includes(costs[i][1])) cycleTable[costs[i][1]] = costs[i][1]
    }
    // console.log("cycleTable:", cycleTable)
    var count = 0
    for(var i=0; i<costs.length; i++){
        var current = costs[i]
        var one = current[0]
        var the_other = current[1]
        var cost = current[2]
        if(cycleTable[the_other] !== cycleTable[one]){
            cycleTable = changeCycleTableNumber(cycleTable, one, the_other)
            answer += cost
            count++
            // console.log("answer:", answer)
        }
        console.log("after cycleTable:",cycleTable)
    // if(cycleTable.every((e)=> e === e[0])) break
    if(count === n-1) break
    }
   
    return answer;
}
*/

/*
// function makeCycleTable(cycleTable){
//     for(var i=0; i<cycleTable.length; i++){
//         cycleTable[i] = i
//     }
//     return cycleTable
// }

function changeCycleTableNumber(cycleTable, one, the_other){
    for(var i=0; i<cycleTable.length; i++){
        if(cycleTable[i] === cycleTable[the_other]) cycleTable[i] = cycleTable[one] 
    }
    return cycleTable 
}

*/