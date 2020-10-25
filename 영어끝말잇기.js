function solution() {
    var n = 2
    var words = ["tank", "kick", "know", "wheel", "land", "dream", "mother", "bot", "tank"]
    // var words = ["hello", "one", "even", "never", "now", "world", "draw"]
    // var words = ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]	
    var answer = [];
    var temp = []
    var check = -1
    for (var i = 0; i < words.length; i++) {
        if (temp.some(e => e.word === words[i])) {
            check = 1
        }

        if(i>0 && words[i][0] !== temp[i-1].word[temp[i-1].word.length-1]){
            check = 1
        }
        temp.push({
            word: words[i],
            num: (i + 1) % n,
            check: check
        })
        
        if (temp[i].check == 1) {
            if (temp[i].num == 0) {
                answer.push(n, Math.ceil((i + 1) / n))
            } else {
                answer.push(temp[i].num, Math.ceil((i + 1) / n))
                console.log(temp[i].num)
            }
            break
        }
    }
    console.log(temp)

    // if (answer.length == 0) {
    //     for (var j = 1; j < temp.length; j++) {
    //         if (temp[j - 1].word[temp[j - 1].word.length - 1] != temp[j].word[0]) {
    //             console.log(temp[j])
    //             if (temp[j].num == 0) {
    //                 answer.push(n, Math.ceil((j + 1) / n))
    //             } else {
    //                 answer.push(temp[j].num, Math.ceil((j + 1) / n))
    //             }
    //         }
    //     }
    // }

    if (answer.length == 0) {
        answer = [0, 0]
    }

    console.log(answer)


    // for(var k=words.length-1; k>=0; k--){
    //     var ptr = words[k].word
    //     for(var l=k-1; l>=0; l--){
    //         if(words.word[])
    //     }
    // }
    // console.log(temp)
    // console.log(words[0].word[words[0].word.length - 1])
    // console.log(words[0].word[0])
    // console.log(words)

}
solution()