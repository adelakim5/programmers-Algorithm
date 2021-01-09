function solution(answers) {
    var answer = [];
    var list = [
        [1,2,3,4,5],
        [2,1,2,3,2,4,2,5],
        [3,3,1,1,2,2,4,4,5,5]
    ]
    
    var count = [0,0,0]
    
    for(var i=0; i<answers.length; i++){
        if(answers[i]===list[0][i%5]){
            count[0]++
        }
        if(answer[i]===list[1][i%8]){
            count[1]++
        }
        if(answer[i]===list[2][i%10]){
            count[2]++
        }
    }
    
    var max = 0
    for(var j=0; j<count.length; j++){
        if(count[j]>max){
            max = count[j]
        }
    }
    
    for(var k=0; k<count.length; k++){
        if(count[k]===max){
            answer.push(k+1)
        }
    }
    
    return answer;
}