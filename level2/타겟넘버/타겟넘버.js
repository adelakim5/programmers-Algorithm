/*
function solution() {
    var numbers = [2, 3, 5, 7, 9]
    var target = 2
    var answer = 0
    var newNumbers = arrayIntoArray(numbers)
    // console.log(newNumbers)
    let b = recursion(newNumbers, [], newNumbers.length)
    let t = meetToTarget(target, b)
    console.log("t", t)
    var tempset = []
    for (var i = 0; i < t.length; i++) {
        let temp = t[i].join('')
        tempset.push(temp)
    }
    console.log("tempset", tempset)
    answer = [...new Set(tempset)].length

    console.log(answer)
}

solution()

function arrayIntoArray(numbers) {
    var copy = numbers.slice()
    copy = copy.map((e) => e = - +e)
    var array = []
    for (var i = 0; i < copy.length; i++) {
        array.push([numbers[i].toString(), copy[i].toString()])
    }
    return array
}


function recursion(numbers, temp, dep) {
    // var sum = 0
    // var tempResult = []
    return numbers.reduce((com, el, index) => {
        var newArr = numbers.slice(index + 1, numbers.length)
        // console.log("newArr", newArr)
        for (var i = 0; i < el.length; i++) {
            // if (temp.includes(el[i])) continue
            temp.push(el[i])
            // console.log("temp", temp)
            let result = recursion(newArr, temp, dep)
            // console.log("result", result)
            if (result.length == 0 && temp.length == dep) {
                com.push([...temp])
                temp.pop()
            } else {
                com.push(...result)
                temp.pop()
            }
        }
        // console.log("com", com)
        return com
    }, [], 0)
}

function meetToTarget(target, com) {
    com = com.filter((e) => {
        var sum = e.reduce((a, b) => a / 1 + b / 1)
        if (sum == target) {
            return e
        }
    })
    return com
}
*/
function dfs(numbers, target, num, answer){
    let newArr = [...numbers]
    let temp = newArr.pop()
    if(numbers.length == 0){
        if(target == num){
            answer++
        }
        return answer
    } else {
        answer = dfs(numbers, target, num+temp, answer) + dfs(numbers, target, num-temp, answer)
    }
    return answer
}

