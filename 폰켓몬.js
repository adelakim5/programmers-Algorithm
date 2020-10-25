function solution(nums) {
    var answer = 0;
    n = nums.length / 2
    nums = [...new Set(nums)]
    console.log("nums",nums)
    var temp = []
    temp.push(...nums)
    if(n>=temp.length){
        console.log("temp.length", temp.length)
        return temp.length
    } else {
        return n
    }

}

console.log(solution([3,1,2,3]))
