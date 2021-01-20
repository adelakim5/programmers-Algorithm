function solution() {
    var heights = [6, 9, 5, 7, 4]
    var answer = []
    var tail = heights.length - 1
    console.log(tail)
    while (tail >= 0) {
        for (var i = tail - 1; i >= 0; i--) {
            if (heights[i] > heights[tail]) {
                answer.push(i + 1)
                break;
            }
            if (i==0){
                answer.push(0)
            }
        }
        tail--;
        if(tail==0){
            answer.push(0)
        }
    }
    answer.reverse()
    console.log(answer)
}



solution()