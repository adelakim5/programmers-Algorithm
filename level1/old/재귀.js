function solution(user_id, banned_id) {
    var answer = 0;
    let can = [];
    
    for(let i=0 ; i<banned_id.length ; i++){   
        can.push(findBan(user_id,banned_id[i]))
    }
    let b = combination(can,[],can.length);
    b = b.map(e => e.sort());
    let tempset = [];
    for(let i=0 ; i<b.length ; i++){
        let temp = b[i].join('');
        tempset.push(temp)
    }
    answer = [...new Set(tempset)].length
    
    return answer;
}

function combination(can,temp,dep){
    
    return can.reduce((johab,el,index)=>{
        // if(index !== 0) return johab;
        let newArr = can.slice(index+1,can.length)
        for(let i=0 ; i<el.length ; i++){
            if(temp.includes(el[i])) continue;
            // frodo를 또 고르지 않게 
            temp.push(el[i]);
            let result = combination(newArr,temp,dep);
            if(result.length === 0 && temp.length === dep){
                johab.push([...temp]);
                temp.pop();
            }else{
                johab.push(...result)
                temp.pop();
            }
        }
        return johab // 끝나는 지점 먼저 정하고 만들기
    },[],0)
}

function findBan(user_id,ban){
    user_id = user_id.filter(e => {
        if(e.length === ban.length){
            return e;
        }
    })
    for(let i=0 ; i<ban.length ; i++){
        if(ban[i] === "*") continue;
        user_id = user_id.filter(e => {
            if(ban[i] === e[i]){
                return true;
            }
        })
    }
    return user_id;
}