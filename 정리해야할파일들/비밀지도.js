function solution() {
    var n = 6
    var arr1 = [46, 33, 33 ,22, 31, 50]
    var arr2 = [27 ,56, 19, 14, 14, 10]
    var zero = ''
    var sharp = ''
    var answer = []
    var arr1_shift;
    var arr2_shift;

    for (var i = 0; i < n; i++) {
        var number1 = arr1[i].toString(2).length
        var number2 = arr2[i].toString(2).length
        if (number1 < n) {
            zero = ''
            for (var j = 0; j < n - number1; j++) {
                zero += '0'
            }
            arr1[i] = zero + arr1[i].toString(2)
        }
        if (number2 < n) {
            zero = ''
            for (var j = 0; j < n - number2; j++) {
                zero += '0'
            }
            arr2[i] = zero + arr2[i].toString(2)
        }
        if (number1 === n) {
            zero = ''
            arr1[i] = arr1[i].toString(2)
        }
        if (number2 === n) {
            zero = ''
            arr2[i] = arr2[i].toString(2)
        }
    }

    console.log(arr1)
    console.log(arr2)

    while( arr1.length != 0){
        arr1_shift = arr1.shift()
        arr2_shift = arr2.shift()
        sharp = ''
        for(var k=0; k<arr1_shift.length; k++){
            if(arr1_shift[k] === '0' && arr2_shift[k]=== '0'){
                sharp += ' '
            } else {
                sharp += '#'
            }
        }
        answer.push(sharp)

    }

    console.log(arr1_shift)

   
    console.log(answer)
}




solution()


function solution1() {
    var n = 6
    var arr1 = [46, 33, 33 ,22, 31, 50]
    var arr2 = [27 ,56, 19, 14, 14, 10]
    var answer = [];
    arr1 = arr1.map(e => {
        var temp = e.toString(2);
        if(temp.length < n){
            return "0".repeat(n-temp.length) + temp;
        }else{
            return temp;
        }
    })
    arr2 = arr2.map(e => {
    var temp = e.toString(2);
        if(temp.length < n){
            return "0".repeat(n-temp.length) + temp;
        }else{
            return temp;
        }
    })
    
    for(let i=0 ; i<arr1.length ; i++){
        let wall = "";
        for(let j=0 ; j<arr1[i].length ; j++){
            if(arr1[i][j] === '0' && arr2[i][j] === '0'){
                wall += ' ';
            }else{
                wall += '#';
            }
        }
        answer.push(wall)
    }
    
    console.log(answer)
}