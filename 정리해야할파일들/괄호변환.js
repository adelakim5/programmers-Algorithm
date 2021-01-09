function solution(p) {
    // var p = "()))((()"
    var answer = ''
    if (p === '') {  
        return '' 
    } 
    let u = separate(p).u
    let v = separate(p).v
    if(isRight(u)){
        v = solution(v)
        return u+v
    } else {
        v = solution(v)
        answer = "(" + v + ")" + turnSide(u)
        return answer
    }
    
}

function isRight(p) {
    var stack_array = []
    for (let i = 0; i < p.length; i++) {
        if (p[i] == ')' && stack_array[stack_array.length - 1] == '(') {
            stack_array.pop()
        } else {
            stack_array.push(p[i])
        }
    }
    if (stack_array.length == 0) {
        return true
    } else {
        return false
    }

}

function separate(p) {
    var p_stack = p.split('')
    var u = ''
    var v = ''
    let count_a = 0
    let count_b = 0
    for (let i = 0; i < p.length; i++) {
        if (p[i] == '(') {
            u += p_stack.shift()
            count_a++
        } else {
            u += p_stack.shift()
            count_b++
        }
        if (count_a == count_b) {
            break
        }
    }
    v += p_stack.join('')
    return {
        u: u,
        v: v
    }

}

function turnSide(u){
    var temp = u.split('')
    temp.shift()
    temp.pop()
    temp = temp.map((e) => { // map은 새로운 배열을 반환하기 때문에 변수에 담아줘야함 
        if(e == '(') {
            return ')'
        } else {
            return '('
        }
    })
    return temp.join('')
}

var p = "()))((()"

solution(p)
// separate()