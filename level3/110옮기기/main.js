function solution(s) {
    var answer = [];
    for(let str of s) {
        const stack = []
        let cnt = 0
        
        for(let char of str) { // 110 다 뽑기 
            if(char === "0") {
                if(stack[stack.length-1] === "1" && stack[stack.length-2] === "1") {
                    cnt++ // 110 개수 세어주기
                    stack.pop()
                    stack.pop()
                } else stack.push(char)
            }else stack.push(char)
        }
        
        if(cnt === 0) {
            answer.push(str)    
        
        } else {
            const temp = []
            
            while(stack.length) { // 남은 숫자들 
                if(stack[stack.length-1] === "1") temp.push(stack.pop()) // 끝 부터, 1이면 temp 담기
                else if(stack[stack.length-1] === "0") break // 0 이면 멈춤
            }
             
            answer.push(stack.join("") + "110".repeat(cnt) + temp.join("")) // stack에 남은 숫자들을 앞에 위치 + 110 엮은거 + temp와 엮은 후 answer에 넣기 
        }
    }
    return answer;
}