function solution() {
    var number = '1231234'
    var k = 3
    var answer = ''
    var length = number.length - k

    for (let i = 0; i < number.length;) {
        var pointer = number[i]
        if (answer.length == length) {
            break
        }
        if(pointer == 9){
            answer += pointer.toString()
            i++
            continue
        }
        var bigNum = biggerNumber(number, i)
        if (bigNum.val == -1) {
            answer += pointer.toString()
            console.log("i : ", i, "-1 answer: " + answer)
            i++
        } else {
            var pointer_len = bigNum.idx - i
            if (pointer_len <= k) {
                k = k - pointer_len
                i = bigNum.idx
            } else {
                answer += pointer.toString()
                console.log("i: ", i, " answer", answer)
                i++
            }
        }

    }


    console.log(answer)

}

function biggerNumber(number, pointerIndex) {
    let value = 0
    let idx = 0
    for (let i = pointerIndex; i < number.length; i++) {
        if (number[i] > number[pointerIndex]) {
            value = number[i]
            idx = i
            break
        } else {
            value = -1
        }
    }
    return {
        val: value,
        idx: idx
    }
}


solution()