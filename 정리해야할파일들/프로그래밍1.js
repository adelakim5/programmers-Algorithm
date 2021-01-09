function solution(numbers, hand) {
    var left_numbers = [1, 4, 7]
    var right_numbers = [3, 6, 9]
    var result = []
    var answer = ''
    for (var i = 0; i < numbers.length; i++) {
        if (left_numbers.includes(numbers[i])) {
            result.push({
                dir: "L",
                num: numbers[i]
            })
        } else if (right_numbers.includes(numbers[i])) {
            result.push({
                dir: "R",
                num: numbers[i]
            })
        } else {
            if (result.length == 0) {
                if (hand == 'left') {
                    result.push({
                        dir: "L",
                        num: numbers[i]
                    })
                } else {
                    result.push({
                        dir: "R",
                        num: numbers[i]
                    })
                }
            }
            if (result.length > 0) {
                if (result.every(e => e.dir == 'L')) {
                    var val = Math.abs(numbers[i] - result[result - 1].num)
                    if (numbers[i] == 0) {
                        result.push({
                            dir: "R",
                            num: numbers[i]
                        })
                    } else if (numbers[i] == 8) {
                        if (val != 1) {
                            if (val == 4 && hand == 'right') {
                                result.push({
                                    dir: "R",
                                    num: numbers[i]
                                })
                            } else if (val == 4 && hand == 'left') {
                                result.push({
                                    dir: "L",
                                    num: numbers[i]
                                })
                            } else {
                                result.push({
                                    dir: "R",
                                    num: numbers[i]
                                })
                            }
                        } else {
                            result.push({
                                dir: "L",
                                num: numbers[i]
                            })
                        }
                    } // 2,5 라면 
                    else {
                        result.push({
                            dir: "L",
                            num: numbers[i]
                        })
                    }
                } else if (result.every(e => e.dir == 'R')) {
                    var val = Math.abs(numbers[i] - result[result - 1].num)
                    if (numbers[i] == 0) {
                        result.push({
                            dir: "L",
                            num: numbers[i]
                        })
                    } else if (numbers[i] == 8) {
                        if (val != 1) {
                            if (val == 2 && hand == 'left') {
                                result.push({
                                    dir: "L",
                                    num: numbers[i]
                                })
                            } else if (val == 2 && hand == 'right') {
                                result.push({
                                    dir: "R",
                                    num: numbers[i]
                                })
                            } else {
                                result.push({
                                    dir: "L",
                                    num: numbers[i]
                                })
                            }
                        } else {
                            result.push({
                                dir: "R",
                                num: numbers[i]
                            })
                        }
                    } else { // 2,5 라면 
                        result.push({
                            dir: "R",
                            num: numbers[i]
                        })
                    }
                } else {
                    var temp = result.slice()
                    temp = temp.reverse()
                    var val1 = temp.find((e) => e.dir == 'L').num
                    var val2 = temp.find((e) => e.dir == 'R').num
                    var abval1 = Math.abs(numbers[i] - val1)
                    var abval2 = Math.abs(numbers[i] - val2)
                    if (abval1 == 3 || 1) {
                        abval1 = 1
                    } else if (abval1 == 4 || 2 || 6) {
                        abval1 = 2
                    } else if (abval1 == 7 || 5) {
                        abval1 = 3
                    }

                    if (abval2 == 3 || 1) {
                        abval2 = 1
                    } else if (abval2 == 4 || 2 || 6) {
                        abval2 = 2
                    } else if (abval2 == 7 || 5) {
                        abval2 = 3
                    }

                    if (abval1 > abval2) {
                        result.push({
                            dir: "R",
                            num: numbers[i]
                        })
                    } else if (abval1 < abval2) {
                        result.push({
                            dir: "L",
                            num: numbers[i]
                        })
                    } else {
                        if (hand == 'right') {
                            result.push({
                                dir: "R",
                                num: numbers[i]
                            })
                        } else {
                            result.push({
                                dir: "L",
                                num: numbers[i]
                            })
                        }
                    }
                }
            }
        }

    }
    for (var k = 0; k < result.length; k++) {
        answer += result[k].dir
    }
    console.log(answer)
}

solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right")



function sol(numbers){
    var result = []
    for(var i=0; i<numbers.length; i++){
        
    }
}