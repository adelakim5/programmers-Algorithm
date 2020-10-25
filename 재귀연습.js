function solution(banned_id, user_id){
    var temp = []
    for(var i=0; i<banned_id.length; i++){
        temp.push(isBan(user_id, banned_id[i]))
    }

    let b = combination(temp, [], temp.length)
    b = b.map((e)=> e.sort())
    console.log(b)
    
}

solution()

function combination(temp, array, depth){

    return temp.reduce((johab, el, index) =>{
        
        var newArray = temp.slice(index+1, temp.length)

        for(var i=0; i<el.length; i++){
            if(array.includes(el[i])) continue
            array.push(el[i])

            let result = combination(newArray, array, depth)

            if(result.length == 0 && array.length == depth){
                johab.push([...array])
                array.pop()
            } else {
                johab.push(...result)
                array.pop()
            }
        }
        return johab
    }, [], 0)

}

function isBan(user_id, ban){
    user_id = user_id.map((e)=>{
        if(e.length == ban.length) return e
    })

    for(var i=0; i<ban.length; i++){
        if(ban[i] == '*') continue
        user_id = user_id.filter(e => {
            if(ban[i] == e[i]){
                return true
            }
        })
    }
    return user_id
}