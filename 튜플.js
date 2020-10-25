function solution() {
    var answer = [];
    var s = '{{4,2,3},{3},{2,3,4,1},{2,3,4,1,43},{2,3}}'
    s = s.replace(/{/g, '')
    console.log(s)
    s = s.split('}')
    console.log(s)
    s = s.sort((a, b) => a.length - b.length)
    console.log(s)
    s = s.filter((e) => e !== '')
    console.log(s)
    s = s.map((e) => {
        if(e[0] == ','){
            e = e.replace(',', '')
        }
        return e.split(',')
    })
    console.log(s)
    if (s.length > 1) {
        answer.push(s[0].join('') / 1)
        for (var i = 1; i < s.length; i++) {
            answer.push(difference(s[i], s[i-1]))
        }
        // return answer
        console.log(answer)
    } 
    
    if(s.length == 1){
        s[0] = s[0].join('') / 1
        console.log(s)
    }

}
solution()

function difference(arr1, arr2) {
    let difference = arr1.filter(e => !arr2.includes(e))
    console.log(difference)
    return difference.join('') / 1
}