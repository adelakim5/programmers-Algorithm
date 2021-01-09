function solution() {
    var arr = [2, 36, 1, 3]
    var divisor = 1
    var answer = []
    var arr2 = arr.filter((e) => {
        return e % divisor == 0
    })

    if (arr2.length == 0) {
        answer.push(-1)
    } else {
        arr2.map((e) => {
            answer.push(e)
        })
    }
    answer.sort(function (a, b) {
        return a - b
    })

    console.log(answer)
}

solution()