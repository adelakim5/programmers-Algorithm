function solution() {
    var progresses = [93, 30, 55]
    var speeds = [1, 30, 5]
    var answer = []
    var days = []

    for(var i=0; i<progresses.length; i++){
        days.push(Math.ceil((100-progresses[i])/speeds[i]))
    }

    while(days.length>0){
        var count = 0
        count++
        for(var i=1; i<days.length; i++){
            if(days[0]>=days[i]){
                count++;
            } else {
                break;
            }
        }
        for(var j=0; j<count; j++){
            days.shift()
        }
        if(count>0){
            answer.push(count)
        }
    }
    console.log(answer)

}
solution()