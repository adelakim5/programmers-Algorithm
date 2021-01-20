function solution() {
    var user_id = ["frodo", "fradi", "crodo", "abc123", "frodoc"]
    var banned_id = ["fr*d*", "*rodo", "******", "******"]
    var list = getAllCombinations(user_id, banned_id.length)
    while(banned_id.length !== 0){
        var pointer = banned_id.shift().split('')
        for(var i=0; i<list.length; i++){
            
        }
    }
}
solution()

function getAllCombinations(arr, m){
    const combinations = []
    const picked = []
    const used = []
    for(item of arr) used.push(0)

    function find(picked){
        if(picked.length == m){
            const rst = []
            for(let i of picked){
                rst.push(arr[i])
            }
            combinations.push(rst)
            return;
        } else {
            let start = picked.length ? picked[picked.length-1] + 1 : 0;
            for(let i = start; i < arr.length; i++){
                if( i == 0 || arr[i] !== arr[i-1] || used[i-1]){
                    picked.push(i)
                    used[i] = 1
                    find(picked)
                    picked.pop()
                    used[i] = 0
                }
            }
        }
    }
    find(picked)
    return combinations

}




    
