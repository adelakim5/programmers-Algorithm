function solution() {
    var n =0
    var answer = 0;
    var array = []
    if(n==0) answer = 0
    for(var i=1; i<=n; i++){
        for(var j=2; j<=n; j++){
            if(i*j===n && !array.some((e)=> e === i)){
                array.push(i); 
                if(i!==j){
                    array.push(j);
                }
            }
        }
    }
    array.map((e)=>{
        answer = answer+e
    })
    console.log("array: " + array )
    console.log(answer);
}

solution()