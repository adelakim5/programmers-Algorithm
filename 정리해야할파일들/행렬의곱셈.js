function solution() {
    var answer = []
    var arr1 = [
        [2, 3, 2],
        [4, 2, 4],
        [3, 1, 4]
    ]
    var arr2 = [
        [5, 4, 3],
        [2, 4, 1],
        [3, 1, 1]
    ]
    var sum = 0
    var temp = []
    // for (var k = 0; k < arr2[0].length; k++) {
    //     for (var i = 0; i < arr1.length; i++) {
    //         for (var j = 0; j < arr1[0].length; j++) {
    //             sum = sum + arr1[i][j] * arr2[j][k]
    //         }
    //     }
    // }
    for(var i=0; i<arr1.length; i++){
        for(var k=0; k<arr2[0].length; k++){
            for(var j=0; j<arr2.length; j++){
                sum = sum + arr1[i][j] * arr2[j][k]
            }
            temp.push(sum)
            sum = 0
        }
        answer.push(temp)
        temp = []
    }
    console.log(answer)
}
solution()