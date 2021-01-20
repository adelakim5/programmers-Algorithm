function solution(){
    var N = 5
    var stages = [2,3,4,4,4,2,1]
    var answer = []
    var count = 0
    var fail_array = new Array
    var stages_length = stages.length

    stages.sort((a,b)=> {return a-b})
    for(var i=1; i<=N; i++){
        for(var j=0; j<stages.length; j++){
            if(i===stages[j]){
                count++
            } 
        }
        if(stages_length === 0){
            fail_array.push({stage: i, fail: 0})
        } else {
            fail_array.push({stage: i, fail: count/stages_length})
            stages_length = stages_length-count
            count = 0
        }
    }

    fail_array.sort((a,b)=>{
        var ans = b.fail - a.fail
        if(ans == 0){
            return a.stage - b.stage
        } else {
            return ans
        }
    })

    for(var k=0; k<fail_array.length; k++){
        answer.push(fail_array[k].stage)
    }
    


    console.log(stages)
    console.log(fail_array)
    console.log(answer)



    // [1,2,2,2,3,3,4,6]
    /*
    1번 스테이지 실패율 = 1(의 개수)/stages.length
    2번 스테이지 실패율 = (2의 개수)3 / stages.length - 1의 개수
    3번 스테이지 실패율 = (3의 개수)2 / stages.length - 1의 개수 - 2의 개수
    4번 스테이지 실패율 = (4의 개수)4 / stages.length - 1의 개수 - 2의 개수 - 3의 개수

    */
 
}

solution()