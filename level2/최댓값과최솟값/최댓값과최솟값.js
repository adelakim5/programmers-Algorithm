function solution() {
    var answer = [];
    var s = '-1 -2 -3 -4'
    s = s.split(' ').sort((a,b)=> a/1-b/1)
    console.log(s)
    answer.push(s[0], ' ', s[s.length-1])
    var result = answer.join('')
    console.log(result)
    return answer;
}

solution()