function solution() {
    var answer = 0
    s = 'aabbaccc'
    var apchuk_string_array = []
    var count = 1
    // temp.push(s.slice(0, 1))
    // s = s.slice(1, s.length)
    // temp.push(s.slice(0, 1))
    // s = s.slice(1, s.length)
    for (var i = 1; i <= s.length; i++) {
        var apchuk = []
        var temp = s.slice('')
        var cutting = []
        while (temp.length > 0) {
            cutting.push(temp.slice(0, i))
            temp = temp.slice(i, temp.length)
        }
        console.log("cutting: " + cutting)

        for (var j = 0; j < cutting.length; j++) {
            var pointer = cutting[j]
            if (cutting[j + 1] !== pointer) {
                apchuk.push(count)
                apchuk.push(pointer)
                count = 1
            } else {
                count++
            }
        }
        console.log("apchuk: " + apchuk)
        var apchuk_string = apchuk.filter(e => {return e !== 1}).join('')
        apchuk_string_array.push(apchuk_string.length)
        console.log("string: " + apchuk_string)
        
        // console.log(temp)
    }
   console.log(apchuk_string_array)
    answer = Math.min.apply(null, apchuk_string_array)
   
    console.log(answer)

}

solution()














function sol() {

    let cuttingStr = [];
    let temp = s;
    let str = '';
    for (let j = 0; j < Math.ceil(s.length / i); j++) {
        if (temp.length / i > 1) {
            cuttingStr.push(temp.slice(0, i));
            temp = temp.slice(i, temp.length);
        } else {
            cuttingStr.push(temp);
        }
    }
}