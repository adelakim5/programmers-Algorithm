function solution() {
    var participant = ["mislav", "stanko", "mislav", "ana"]
    var completion = ["stanko", "ana", "mislav"]
    var answer = ''

    participant.sort()
    completion.sort()

    for(var i=0; i<completion.length; i++){
        if(completion[i] != participant[i]){
            answer = participant[i]
            break;
        } else {
            if(i==completion.length-1){
                answer = participant.pop()
            }
            continue
        }
    }

    console.log(answer)
   
   
}
solution()