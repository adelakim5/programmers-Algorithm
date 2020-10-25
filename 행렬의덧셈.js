function solution() {
    var arr1 = [
        [1],
        [2]
    ]
    var arr2 = [
        [3],
        [4]
    ]
    var answer = Array(arr1.length).fill(null).map(()=> Array())

    for(var i=0; i<arr1.length; i++){
        for(var j=0; j<arr1[i].length; j++){
            answer[i].push(arr1[i][j] + arr2[i][j])
        }
    }
    console.log(answer);
}

solution()