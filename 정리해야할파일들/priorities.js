function solution() {
    var priorities = [6, 5, 3, 6, 3, 1]
    var location = 2
    var temp = 0
    var answer = 0

    for (var i = 0; i < priorities.length; i++) {
        if (i == location) {
            priorities[i] = {
                key: priorities[i],
                target: '0'
            }
        } else {
            priorities[i] = {
                key: priorities[i],
                target: '1'
            }
        }
    }
    var a
    while (a != '0') {

        temp = priorities[0].key
        var max = priorities.some((e) => e.key > temp)
        console.log("max: " + max)
        if (max == true) {
            priorities.push(priorities.shift())
        } else {
            a = priorities.shift().target
            answer++
        }
    }
    console.log(answer)
}


solution()