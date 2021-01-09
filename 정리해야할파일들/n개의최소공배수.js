function solution(arr) {
    var answer = 0;
    var i = 1
    arr = arr.sort((a,b) => a-b)
    while(true){
        var ptr = arr[arr.length-1]
        var result = []
        for(var j=0; j<arr.length; j++){
            result.push((ptr*i)%arr[j])
        }
        if(result.every(e => e===0)){
            answer = ptr*i
            break
        } else {
            i++
        }
    }
    console.log(answer)
    // return answer;
}

solution([2,6,8,14])