function solution() {
    var dartResult = '1D2S3T*'
    var answer = 0;
    var score = []
    var test_array

    test_array = dartResult.split('')
    console.log(test_array)
    for (var k = 0; k < test_array.length; k++) {
        if (test_array[k - 1] === '1' && test_array[k] === '0') {
            test_array[k - 1] = '10'
            test_array[k] = test_array[k + 1]
            test_array[k+1] = ''
        }
    }

    // var test_array = []
    // test_array.push(dartResult)
    console.log(test_array)

    for (var i = 0; i < test_array.length; i++) {
        if(test_array[i] !== '*' && test_array[i] !== '#'){
            if (test_array[i] === 'S') {
                score.push(Math.pow(test_array[i - 1], 1))
    
            }
             else if (test_array[i] === 'D') {
                
                score.push(Math.pow(test_array[i - 1], 2))
    
            }
             else if (test_array[i] === 'T') {
                
                score.push(Math.pow(test_array[i - 1], 3))
                
            }
             else {
                 test_array[i] = test_array[i] / 1
             }
        }

    }
    console.log(test_array)
    console.log(score)

    for (var j = 0; j < test_array.length; j++) {
        if (test_array[j] === '*') {
            if (j == 2) {
                score[0] = score[0] * 2
                console.log("score1: " + score)
            } else if (j == 4 || j == 5) {
                score[0] = score[0] * 2
                score[1] = score[1] * 2
                console.log("score2: " + score)
            } else {
                score[1] = score[1] * 2
                score[2] = score[2] * 2
            }
        }
        if (test_array[j] === '#') {
            if (j == 2) {
                score[0] = score[0] * -1
            } else if (j == 4 || j == 5) {
                score[1] = score[1] * -1
            } else {
                score[2] = score[2] * -1
            }
        }
    }

    console.log(score)
    answer = score.reduce((a, b) => a + b)


    console.log(answer)
}

solution()

// 주영이 

function solution(dartResult) {
    var answer = 0;
    let resultNum = [];
    let num = 0;
    for(let i=0 ; i<dartResult.length ; i++){
        if (!Number.isNaN(Number(dartResult[i]))) {
            if(i > 0 && !Number.isNaN(Number(dartResult[i-1]))){
                num = num*10;
            }else{
                if(num !== 0){
                    resultNum.push(num);
                    num = Number(dartResult[i]);
                }else{
                    num = Number(dartResult[i]);
                }
            }
        }
        if (dartResult[i] === "S") num = Math.pow(num, 1);
        if (dartResult[i] === "D") num = Math.pow(num, 2);
        if (dartResult[i] === "T") num = Math.pow(num, 3);
        if(dartResult[i] ==="*"){
            num = num*2;
            if(resultNum.length !== 0){
                resultNum[resultNum.length-1] = resultNum[resultNum.length-1]*2;
            }
        }
        if(dartResult[i] ==="#"){
            num = num*-1;
        }
    }
    resultNum.push(num);
    answer = resultNum.reduce((acc,val)=> acc+val)

    return answer;
}

/*
dartResult가 0이 될때까지 숫자를 뽑음.
if(숫자면){
    숫자
}
if(S,D,T){
    숫자^1or2or3
}
if(*,#){
    현재 숫자 * 2 or -1
    if(전에 숫자 존재){
        전에 숫자 * 2 or -1
    }
}
*/