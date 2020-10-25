function solution() {
    // var numbers = [45, 454, 3, 30, 34, 5, 9, 12, 121, 40, 404]
    var answer = '';
    var numbers = [12, 121]
    var copy_numbers = numbers.slice()
    var copy_array = []
    var mok = 0
    var nmg = 0
    var nmg2 = 0
    var answer_array = []
    for (var i = 0; i < copy_numbers.length; i++) {
        if (10 <= copy_numbers[i] && 100 > copy_numbers[i]) {
            mok = Math.floor(copy_numbers[i] / 10)
            nmg = copy_numbers[i] % 10
            nmg2 = -1
            copy_numbers[i] = mok
        } else if (100 <= copy_numbers[i] && 1000 > copy_numbers[i]) {
            mok = Math.floor(copy_numbers[i] / 100)
            nmg = copy_numbers[i] % 100
            if (nmg < 10) {
                nmg2 = nmg % 10
                nmg = 0
            } else {
                nmg2 = nmg % 10
                nmg = Math.floor(nmg / 10)
            }
            copy_numbers[i] = mok
        } else if (1000 == copy_numbers[i]) {
            nmg = 0
            copy_numbers[i] = 1
            nmg2 = -1
        } else {
            nmg = copy_numbers[i] % 10
            nmg2 = -1
        }
        copy_array.push({
            idx: i,
            val: copy_numbers[i],
            nmg: nmg,
            nmg2: nmg2
        })
    }
    console.log(copy_array)

    copy_array.sort((a, b) => {
        if (b.val == a.val) {
            if (b.nmg == a.nmg) {
                if (a.nmg2 > b.nmg2) {
                    if (a.nmg > a.nmg2) {
                        return a.nmg2 - b.nmg2
                    } else if (a.nmg2 >= a.val) {
                        return b.nmg2-a.nmg2
                    } else {
                        return a.nmg2 - b.nmg2
                    }
                } else {
                    if (b.nmg > b.nmg2) {
                        return a.nmg2 - b.nmg2
                    } else if (b.nmg2 >= b.val) {
                        return b.nmg2-a.nmg2
                    } else {
                        return a.nmg2-b.nmg2
                    }
                }
            } else {
                return b.nmg - a.nmg
            }
        } else {
            return b.val - a.val
        }
    })
    console.log(copy_array)


    for (var j = 0; j < numbers.length; j++) {
        answer_array.push(numbers[copy_array[j].idx])
    }

    // console.log(answer_array)
    if(!answer_array.some((e)=> e !== 0)){
        answer = '0'
    } else {
        answer = answer_array.join('')
    }
    console.log(answer)
}

solution2()


function solution2(){
    var numbers = [121, 12]
    var answer = numbers.map(c => c + "")
    // .sort((a,b) => (b+a) - (a+b))
    // 12121 - 12112 = 양수 
    // 12112 - 12121 = 음수

    // .join('')
    var test = (answer[0] + answer[1]) - (answer[1]+answer[0])
    console.log(test)
}