function solution(){
    var brown = 8
    var red = 1
    var sum = brown + red
    var temp = []
    for(var i=1; i<=red; i++){
        if(temp.some(e=> e[0] == i+2)) continue
        if(Number.isInteger(red/i)){
            temp.push([red/i+2, i+2].sort((a,b) => b-a))
        }
    }
    // console.log(temp)
    temp = temp.filter(e => {
        if(e.reduce((a,b) => a*b) == sum){
            return e
        }
    })
    console.log(temp.shift())
    
}

solution()