function solution() {
    // var s = "try hello world"
    var s = "JOOYOUNG PARK"
    var answer = '';
    // for(var i=0; i<s.length; i+=2){
    //     s[i] = s.toLocaleUpperCase()
    // }
    var newWord = []
    s = s.split(' ')
    console.log(s);
    for(var i=0; i<s.length; i++){
        var word = s[i].split('')
        for(var j=0; j<word.length; j+=2){
            word[j] = word[j].toLocaleUpperCase()
        }
        for(var k=1; k<word.length; k+=2){
            word[k] = word[k].toLocaleLowerCase()
        }
        word = word.join('')
        newWord.push(word)
    }
    // for(var i=0; i<s.length; i+=2){
    //     s[i] = s[i].toUpperCase()
    // }
    // s = s.join(' ')
    answer = newWord.join(' ')
    console.log(answer)
    
}
solution2()

function solution2(){
    var s = "try hello world"
    var index = 0
    var answer = ''

    for(var i=0; i<s.length; i++){
        if(s.charAt(i) === ' '){
            index = 0
            answer += " "
        } else if(index%2 === 0){
            // 홀수면
            answer += (s.charAt(i).toLocaleUpperCase())
            index++
        } else {
            answer += (s.charAt(i).toLocaleLowerCase())
            index++
        }
    }

    console.log(answer)
}