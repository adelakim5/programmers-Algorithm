function solution(){
    var s = 'a'
    // var a '= s.split('')
    // console.log("a: " + a)
    var n = 25
    var s_array = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    console.log("s_length: " + s_array.length)
    var S_Array = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    var answerArray = new Array(s.length)
    console.log("answer array: " + answerArray.length)
    var s_index = 0
    var answer = ''
    for(var i=0; i<s.length; i++){
        // AB중에서 A가 
        if(s_array.some((e)=>e===s[i])){
            // 만약 s_array에 있다면 
            // n만큼 더한 수의 인덱스 값을 가져와야 해 
            s_index = s_array.indexOf(s[i])
            if(s_index+n>=26) answerArray[i] = s_array[s_index+n-26]
            // if(s_index == 25) s_index = -1
            if(s_index+n<26) answerArray[i] = s_array[s_index+n]
        }
        if(S_Array.some((e)=>e===s[i])){
            s_index = S_Array.indexOf(s[i])
            if(s_index+n>=26) answerArray[i] = s_array[s_index+n-26]
            // if(s_index == 25) s_index = -1
            if(s_index+n<26) answerArray[i] = S_Array[s_index+n]
        }
        if(s[i] == ' ') answerArray[i] = ' ' 
    }
    answer = answerArray.join('')
    console.log(answer)
}
solution()

function solution(){
    var s = "skdn"
    for(var i=0; i<s.length; i++){
        let ascii = s[i].charCodeAt()
        if(ascii>=65 && ascii<=90){
            let nPlus = ascii+n
            if(nPlus>90){
                answer += String.fromCharCode(nPlus-26)
            } else {
                answer += String.fromCharCode(nPlus)
            }
        }

        if(ascii>=97 && ascii<=122){
            let nPlus = ascii + n
            if(nPlus>122){
                answer += String.fromCharCode(nPlus-26)
            } else {
                answer += String.fromCharCode(nPlus)
            }
        }

        if(s[i] == " ") answer += " "
    }

    return answer

}