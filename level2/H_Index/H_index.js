
function test(){
    // var citations = [0, 1, 1, 1, 1, 3, 3, 4]
    // var citations = [5,5,5,5]
    var citations = [5,5]
    // var citations = [3,0,6,1,5]
    // var citations = [2,2,2,2,2]
    var temp = citation(citations)
    if(temp == 0) return 0
    else return temp.i

}

test()

function citation(citations){
    var citation_count = 0
    var nmg = 0
    var temp = []
    if(citations.every(e => e === 0)){
        return 0
    } else {
        citations = citations.sort((a,b)=>{return a-b})
        for(let  i=1; i<=citations.length; i++){
            citation_count = 0
            citations.map(e => {
                if(e>=i){
                    citation_count++
                }
            })
            temp.push({i:i, count:citation_count})
        }
        temp = temp.filter((e) => e.i <= e.count)
        temp = temp.pop()
        return temp
    }
}