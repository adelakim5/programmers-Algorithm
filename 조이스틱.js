function solution() {
    var name = "JEROEN"
    var atom = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M']
    var ntoz = [null, 'Z', 'Y', 'X', 'W', 'V', 'U', 'T', 'S', 'R', 'Q', 'P', 'O', 'N']
    var temp = []
    var cursor_array = []
    var aaaa = []
    var ssss = []
    var answer = 0
    for (let i = 0; i < name.length; i++) {
        if (atom.includes(name[i])) {
            temp.push({
                string_index: atom.indexOf(name[i]),
                move: i
            })
        } else {
            temp.push({
                string_index: ntoz.indexOf(name[i]),
                move: i
            })
        }
    }
    temp = temp.map((e) => {
        var sum = e.string_index + e.move
        return {
            string_index: e.string_index,
            move: e.move,
            sum: sum
        }
    })
    console.log(temp)
    // 처음 
    for (var j = 0; j < Math.ceil(temp.length / 2); j++) {
        temp[j].move = j
        temp[j].sum = temp[j].string_index + temp[j].move
    }

    for (var k = temp.length - 1; k >= Math.ceil(temp.length / 2); k--) {
        temp[k].move = temp.length - k
        temp[k].sum = temp[k].string_index + temp[k].move
    }
    console.log(temp)
    if (!temp.some((e) => e.string_index !== 0)) {
        answer = 0
    } else {

        cursor_array.push(temp.shift())

        for (var q = 0; q < temp.length - 1; q++) {
            aaaa.push(temp[q])
        }
        console.log("aaaa: " + aaaa)


        if (!aaaa.some((e) => e.string_index !== 0)) {
            cursor_array.push(temp[temp.length - 1])
            console.log("cursor_array" + cursor_array)
        } else {
            while (temp.length > 0) {

                //    if(!aaaa.some(e => e.string_index !== ))

                // 작은애 비교해서 뺌
                if (temp[0].sum <= temp[temp.length - 1].sum) {
                    cursor_array.push(temp.shift())
                } else {
                    cursor_array.push(temp.pop())
                }
                console.log(cursor_array)

                console.log(temp)
                // 뺀 후 move정리해주기 
                // 첫번째 원소의 move는 1이 되어야 함. 

                for (var b = 0; b < Math.ceil(temp.length / 2); b++) {
                    temp[b].move = b + 1
                    temp[b].sum = temp[b].string_index + temp[b].move
                }

                for (var c = temp.length - 1; c >= Math.ceil(temp.length / 2); c--) {
                    temp[c].move = temp.length - c
                    temp[c].sum = temp[c].string_index + temp[c].move
                }
                console.log(temp)

            }
        }
        for (var d = 0; d < cursor_array.length; d++) {
            answer += cursor_array[d].sum
        }
    }

    console.log(answer)
}




solution()