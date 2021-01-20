function solution(){
    var s = "qwer"
    var answer = ''
    var i = s.length
    console.log(i)
    if(i % 2 ==0){
        var j = i/2
        answer = s[j-1] + s[j]
        console.log(answer)
    }else{
        answer = s[parseInt(i/2)]
        console.log(answer)
    }
    console.log(answer)

}
solution()