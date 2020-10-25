function solution() {
    var clothes = [
        ['yellow_hat', 'headgear'],
        ['blue_sunglasses', 'eyewear'],
        ['green_turban', 'headgear'],
        // ['jean', 'pants']
    ]

    var map = new Map()
    for(var i=0; i<clothes.length; i++){
        var key = clothes[i][1]
        if(!map.get(key)){
            map.set(key, 1)
        } else {
            map.set(key, map.get(key)+1)
        }
    }
    var answer = 1
    for(var values of map.values()){
        answer *= (values+1)
    }
    console.log(answer-1)
}

solution()