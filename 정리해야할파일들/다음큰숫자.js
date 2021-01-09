function solution() {
    var n = 78;
    var binN = n.toString(2)
    var count = 0
    for (var i = 0; i < binN.length; i++) {
        if (binN[i] == '1') {
            count++
        }
    }
    var answer = 0
    while (true) {
        n = n + 1
        binN = n.toString(2)
        var answerCount = 0
        for (var j = 0; j < binN.length; j++) {
            if (binN[j] == '1') {
                answerCount++
            }
        }
        if (answerCount == count) {
            answer = n
            break;
        }
    }
    console.log(answer)
}

solution()