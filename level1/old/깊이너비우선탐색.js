function solution() {
    var answer = 0;
    var numbers = [1,1,1,1,1]
    var target = 3
    // numbers[0] = - + numbers[0]
    // var f = numbers.reduce((a,b) => a+b)
    // numbers[0] = - + numbers[0]
    // console.log(numbers[0])
    var i = 0
    while(i<numbers.length){
        numbers[i] = - + numbers[i]
        var sum = numbers.reduce((a,b) => a+b)
        if(sum == target){
            numbers[i] = - + numbers[i]
            i++
            answer++
        } else {
            i++
        }
    }
    console.log(answer)

}
solution()

