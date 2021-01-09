function solution(){
    var arr = [1,1,3,3,0,1,1]
    var answer = []
    var count = [0]
    
    var pointer = arr[0]
    for(var i=0; i<arr.length; i++){
        if(pointer != arr[i]){
            pointer = arr[i]
            count.push(i)
        }
    }
    for(var j=0; j<count.length; j++){
        answer.push(arr[count[j]])
    }
   
    console.log(count)
    console.log(answer)
}
solution()


function solution(arr)
{
    return arr.filter((val,index) => val != arr[index+1]);
}