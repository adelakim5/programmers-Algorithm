function solution() {
    var array = [1, 5, 2, 6, 3, 7, 4]
    var commands = [
        [2, 5, 3],
        [4, 4, 1],
        [1, 7, 3]
    ]
    var answer = []
    console.log(commands[0][0])
    for(var i=0; i<commands.length; i++){
        var arr1 = array.slice(commands[i][0]-1, commands[i][1]).sort(function(a,b){
            return a-b
        })
        answer.push(arr1[commands[i][2]-1])
    }

    // var arr1 = array.slice(commands[1][0])
    console.log(arr1)
    console.log(answer)
}

solution()