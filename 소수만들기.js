function solution(){

}

function result(){
    // var nums = [1,2,3,4,5,6,7,8,9,10]
    var nums = [1,2,6,7,4]
    var temp = []
    var count = 0
    for(var i=0; i<nums.length; i++){
        for(var j=i+1; j<nums.length; j++){
            for(var k=j+1; k<nums.length; k++){
                var sum = nums[i]+nums[j]+nums[k]
                temp.push(sum)
            }
        }
    }
    console.log(temp)
    for(var l=0; l<temp.length; l++){
        if(primeNumber(temp[l])){
            count++
        }
    }
    console.log(count)
}

function primeNumber(nums){
    for(var i=2; i*i<=nums; i++){
        if(nums % i === 0 ) return false 
    }
    return true
}

result()