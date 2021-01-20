function solution(){
    var num = 626331
    var count = 0
    while(true){
      
        if(num%2 === 0){
            num = num/2
            console.log("num%2: " + num)
            count++
        }
        if(num === 1){
            break;
        }
        if(num%2 !== 0){
            num = num*3+1
            console.log("num%2 !== 0: " + num)
            count++
        }
        if(count>=500){
            count = -1
            console.log("500: " + num)
            break
        }

    }

    console.log(count)
}
solution()