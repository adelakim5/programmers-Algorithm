function solution(){
    var answer = false 
    var x = 18
    var x_array = x.toString().split('')
    console.log(x_array)
    var sum = x_array.reduce((a,b)=>{ return a/1 + b/1})
    console.log(sum)
    if(x%sum===0){
        answer = true
    } 
    console.log(answer)
}

solution()