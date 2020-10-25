function solution() {
    var answer = 0;
    var strike = 0
    var ball = 0
    var flag = true
    var num1 = ''
    var num2 = ''
    var baseball = [
        [123, 1, 1], [356, 1, 0], [327, 2, 0], [489, 0, 1]
    ]

    for(var i=123; i<=987; i++){
        num1 = i.toString()
        if(num1[0] == num1[1] || num1[1] == num1[2] || num1[0] == num1[2]) continue
        else if (num1[0] == '0' || num1[1] == '0' || num1[2] == '0') continue
        flag = true
        for(var j=0; j<baseball.length; j++){
            strike = 0
            ball = 0
            for(var a = 0; a<3; a++){
                for(var b=0; b<3; b++){
                    num2 = baseball[j][0].toString()
                    if(a == b && num1[a] == num2[b]){
                        strike++
                        console.log("num1: ", num1, "num2: ", num2, "strike: ", strike)
                        continue
                    }
                    if(a != b && num1[a] == num2[b]){
                        ball++
                        console.log("num1: ", num1, "num2: ", num2, "ball: ", ball)
                        
                        continue
                    }
                }
            }

            if(strike != baseball[j][1] || ball != baseball[j][2]){
                flag = false
                console.log("flag_false: ", "num1: ", num1, "num2: ", num2, "ball: ", ball, "strike: ", strike)
                break
            }
        }
        if(flag == true){
            console.log("flag_true: ", "num1: ", num1, "num2: ", num2, "ball: ", ball, "strike: ", strike)
                
            answer++
        }
    }
    return answer;
}

solution()