function solution() {
    var n = 30
    var lost = [3,5,7]
    var reserve = [2,4,6]
    var answer = n-lost.length
    // 일단 잃어버렸으면 체육 못한다고 가정 
    var already = []    
    var count = 0

    lost.map((e)=>{
        if(reserve.some((e1) => e == e1)){
            // lost를 돌면서 lost의 e가 reserve의 el과 같으면 
            already.push(e)
            // 여벌 갖고 온 도둑맞은 애들 -> 빌리지않음, 빌려줄 수 없음 
            // already애들은 체육 나가는 애들; 끝난 애들
            answer++
            // 체육 나가는 애 추가
        }
    })
    for (var i = 0; i < lost.length; i++) {
        if(!already.some((e)=> e === lost[i])){
            // 일단 잃어버린 애들 중에 already에 있나 없나 확인. 없어야 함 => lost = [4,5] / reserve = [1,5]의 경우를 생각해야 함
            for(var j=0; j<reserve.length; j++){
                if((reserve[j] === lost[i]+1 || reserve[j] === lost[i]-1) && !already.some((e)=> e === reserve[j])){
                    // -1 혹은 +1 이고, 빌려줄수 없는 애들이 아니면 
                    already.push(lost[i])
                    // 빌려감 
                    answer++
                    // 체육 나가는 애 추가 
                    already.push(reserve[j])
                    // 빌려줬으니까 더 이상 빌려줄 수 없음.
                    break
                }
            }
        }
       
               
    }
     console.log("total: " + answer)

}

solution()