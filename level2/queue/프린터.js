function solution(priorities, location) {
    var answer = 0;
    let prioritiesWithIdx = priorities.map((e, idx) => {
        return {idx, priority: e}
    });
    while(true) {
        const x = prioritiesWithIdx.shift();
        if(prioritiesWithIdx.some(e => e.priority > x.priority)) {
            prioritiesWithIdx.push(x);
        } else {
            answer++
            if(x.idx === location) return answer;
        }
    }
    return answer;
}
