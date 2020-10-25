function solution(){
    var arr = [-7, -6, -1, 0, 4, 7]
    var copy_arr = arr.slice()
    var answer = []
    var min = copy_arr.sort((a,b) => {return b-a}).pop()
    if(copy_arr.length === 0){
        answer.push(-1)
    } else {
        for(var i=0; i<arr.length; i++){
            if(arr[i]===min){
                arr[i] = null
            } else {
                answer.push(arr[i])
            }
        }
        // var number = arr.join('').replace(min,'').split('')
        // for(var i=0; i<number.length; i++){
        //     answer.push(number[i]/1)
        // }
    }
    console.log(answer)
}

solution()