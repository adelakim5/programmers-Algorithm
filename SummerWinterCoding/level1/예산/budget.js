function solution() {
    var answer = 0;
    var d = [2,2,3,3]
    var budget = 10

    d.sort((a,b)=>{return a-b})
    for(var i=0; i<d.length; i++){
        if(d[i]>budget){
            break
        } else {
            budget -= d[i]
            answer++
        }
    }

    console.log(answer);
}
solution()