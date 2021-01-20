function solution() {
   var n = 6
   var count = 0
   var answer = 0
   while(true){
       if(n%2 !== 0){
           n = n-1
           count++
       } else {
           n = n/2
       }
       if(n == 1){
           break
       } 
   }
   if(count>0){
       answer = count+1
   } else {
       answer = 1
   }
   console.log(answer)
}

solution()