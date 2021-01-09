function solution() {
    var n = 10
    var count = []
    var answer = 0
    var number = new Array(n+1).fill(0)

    for(var k=2; k<=n; k++){
        number[k] = k
    }

    for(var i=2; i<=n; i++){
        if(number[i] === 0) continue
        for(var j = i*2; j<=n; j = j+i){
            number[j] = 0
        }
    }

    // number.map((e)=>{
    //     if(e!==0) answer++
    // })

    number = number.filter((e)=> e!==0)
    // filter는 return하기 때문에 변수에 담아줘야함 
    answer = number.length
    console.log(answer)
}

solution()