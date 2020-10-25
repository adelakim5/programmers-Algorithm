function solution() {
    var answer = 0;
    var skill = "CBD"
    skill = skill.split('')
    console.log(skill)
    var skill_trees = ["BACDE", "CBADF", "AECB", "BDA", "CDA", "ASF", "CXF"]
    var count_array = []

    while (skill_trees.length != 0) {
        var skill_tress_0 = skill_trees.shift()
        skill_tress_0 = skill_tress_0.split('')
        console.log(skill_tress_0)
        var index_array = []
        for (var i = 0; i < skill.length; i++) {
            var pointer = skill[i]
            index_array.push(skill_tress_0.indexOf(pointer))
        }
        console.log(index_array)
        for (var j = 0; j < index_array.length; j++) {
            if (index_array[j] === -1 && index_array[j + 1] >= 0) {
                count_array = []
                break
            } else {
                if (index_array[j] == -1) {
                    count_array.push(null)
                } else {
                    count_array.push(index_array[j])
                }
            }
        }

        if(count_array.length !== 0){

            var copy_count_array = count_array.slice()
            copy_count_array.sort((a, b) => {
               return a-b
            })
            console.log(copy_count_array)
            var cca = copy_count_array.join('')
            var ca = count_array.join('')
            if(cca === ca){
                answer++
            }
            console.log(count_array)
            count_array = []
    
            console.log("total answer: " + answer)
        }
    
    }
}



solution()

function solution(skill, skill_trees) {
    var answer = 0;
    for(let i=0 ; i<skill_trees.length ; i++){
        let temp = [...skill_trees[i]] // skill tree 쪼개기 
        temp = temp.filter(e=> skill.includes(e)).join('') // skill에 포함된 애들만 걸러내기
        if(skill.includes(temp) && skill[0] === temp[0]){ // skill에 temp가 포함되면서 맨 앞에 스킬이 같으면
            answer++;
        }
        if(temp.length === 0){ // 아예 스킬이 안포함된 경우
            answer++;
        }
    }
    return answer;
}