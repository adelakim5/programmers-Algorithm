function solution(){
    var arrangement = "()(((()())(())()))(())"
    var a = []
    var answer = 0
    for(var i=0; i<arrangement.length; i++){
        if(arrangement[i] === '('){
            a.push(arrangement[i])
        } else {
            a.pop()
            if(arrangement[i-1] === '('){
                // 레이저로 쪼개니까 막대 개수만큼 늘어남
                answer = answer + a.length
            } else {
                answer += 1
                // 막대 끝난 만큼 하나씩 조각 개수 늘어나니까 뺄때마다 1씩 증가
            }
        } 
    }
    console.log(answer)
}

solution()