function solution() {
    var people = [70, 50, 80, 50]
    var limit = 100
    var answer = 0
    people.sort((a,b) => b-a)
    console.log(people)
    let lppl = 0
    let rppl = people.length-1
    while(lppl<rppl){
        let sum = people[lppl] + people[rppl]
        if(sum>limit){
            ++lppl
        } else {
            ++lppl
            --rppl
        }
        ++answer
    }
    if(rppl == lppl ) ++answer
}
solution()