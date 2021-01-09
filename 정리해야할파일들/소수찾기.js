// function solution() {
//     var numbers = '7843'
//     var numberList = numbers.split('')
//     var answers = findPrimeNumbers(numberList);

//     console.log([...new Set(answers)].length)
// }
// solution()

// function primeNumber(numbers) {
//     var num_array = new Array(numbers + 1).fill(0)
//     for (var i = 2; i <= numbers; i++) {
//         num_array[i] = i
//     }
//     for (var j = 2; j <= numbers; j++) {
//         if (num_array[j] == 0) continue
//         for (var k = j * 2; k <= numbers; k += j) {
//             num_array[k] = 0
//         }
//     }
//     num_array = num_array.filter((e) => e != 0)
//     num_array = num_array.map((e)=> {return e.toString()})
//     console.log(num_array)
//     return num_array
// }

// function findPrimeNumbers(numberList, preNumber){
//     var frontNumber = preNumber || '';
//     return numberList.reduce((primeNumbers, number, index)=>{
//         if(primeNumber(frontNumber+number).some(e => e === frontNumber+number)){
//             primeNumbers.push(frontNumber+number)
//         }

//         const nextNumberList = [...numberList]
//         nextNumberList.splice(index, 1)

//         const result = findPrimeNumbers(nextNumberList, frontNumber+number)
//         primeNumbers.push(...result)

//         return primeNumbers
//     }, [])
//     // reduce((prev, curr) => prev+curr, a) a는 초기 accumulator 값
// }



// 통과한 코드 


function solution() {
    var numbers = "17"
    var numberList = numbers.split('')
    var answers = findPrimeNumbers(numberList);

    return [...new Set(answers)].length
}

function primeNumber(numbers) {
   const nonPrime = [0,1]
   if(nonPrime.includes(numbers)) return false 

    for(var i=2; i*i <= numbers; i++){
        if(numbers % i === 0) return false
    }

    return true 
}

function findPrimeNumbers(numberList, preNumber){
    var frontNumber = preNumber || '';
    return numberList.reduce((primeNumbers, number, index)=>{
        console.log("primeNumbers", primeNumbers)
        if(primeNumber(Number(frontNumber+number))){
            console.log("frontNumber+number", Number(frontNumber+number))
            primeNumbers.push(Number(frontNumber+number))
        }

        const nextNumberList = [...numberList]
        console.log("nextNumberList: ", nextNumberList)
        nextNumberList.splice(index, 1)
        console.log("splice nextNumberList: ", nextNumberList)

        const result = findPrimeNumbers(nextNumberList, frontNumber+number)
        console.log("result", result)
        primeNumbers.push(...result)
        console.log("after result primeNumbers", primeNumbers)
        return primeNumbers
    }, [])
}
solution()
