function solution(){
    var answer = 0
    var n = 121
    var rt_n = Math.sqrt(n)
    if(Number.isInteger(rt_n)){
        // 121의 제곱근이 정수면
        answer = Math.pow(rt_n, 2)
    } else {
        // 제곱근이 정수가 아니면
        answer = -1
    }

    console.log(answer)
}

solution()