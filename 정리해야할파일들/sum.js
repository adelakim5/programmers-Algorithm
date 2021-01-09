function solution(){
    var answer = 0
    n = 123
    n = n.toString().split('')
    for(var i=0; i<n.length; i++){
        answer += n[i]/1
    }
    console.log(answer)
}
solution()

function solution2(){
    var answer = 0
    n = 123
    n = n + ""
    n = n.split('')
    for(var i=0; i<n.length; i++){
        answer += n[i]/1
    }
    console.log(answer)
}