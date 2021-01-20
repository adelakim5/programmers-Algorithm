function solution(s) {
    var answer = '';
    // var temp = s.toLowerCase().split(' ')
    // console.log(temp)
    // for (var i = 0; i < temp.length; i++) {
    //     var check_eng = /[a-zA-Z]/
    //     if(check_eng.test(temp[i])){
    //         temp[i] = temp[i].replace(temp[i][0], temp[i][0].toUpperCase())
    //         answer += ' ' + temp[i]
    //     }
    // }
    // answer = answer.slice(1)
    // console.log(answer)
    // return answer;
    var temp = s.toLowerCase().split('')
    console.log(temp)
    for (var i = 1; i < temp.length; i++) {
        var check_eng = /[a-zA-Z]/
        if (check_eng.test(temp[i])) {
            temp[0] = temp[0].toUpperCase()
            if (temp[i - 1] == ' ')
                temp[i] = temp[i].toUpperCase()
        }
    }
    console.log(temp)
    answer = temp.join('')
    console.log(answer)
}


solution("hello my  friend")