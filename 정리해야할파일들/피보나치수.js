function solution(n) {
    var answer = [];
    for(var i=0; i<=n; i++){
        if(i==0) answer.push(0);
        if(i==1) answer.push(1);
        if(i>=2){
            var sum = (answer[i-2] % 1234567 + answer[i-1] % 1234567);
            answer.push(sum % 1234567)
        }
    }
   console.log(answer)
   var result = answer[n] 
    // return result;
    console.log(result)
}

solution(10)