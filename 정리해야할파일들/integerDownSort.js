function solution() {
    var n = 1187372
    var answer = 0;
    n = (n+"").split('').sort((a,b) => {return b-a})
    console.log(n.join('')/1)
    // return answer;
}

solution()