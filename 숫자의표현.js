function solution() {
    var answer = [];
    var n = 15
    var sum = 0
    var temp = []
    for(var i=1; i<=n; i++){
       var pointer = i
       sum = pointer
       if(sum==n){
           answer.push([pointer])
           break
       }
       for(var j=i+1; j<=n; j++){
           sum = sum+j
           if(sum == n){
               answer.push([pointer, j])
               break
           } else if (sum>n){
               break;
           }
       }
    }
    console.log(answer.length)
}



solution()

