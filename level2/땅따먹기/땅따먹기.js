function solution(land) {
    var answer = 0;
    var one = 0
    var two = 0
    var three = 0
    for(var i=1; i<land.length; i++){
        for(var j=0; j<4; j++){
            if(j==0){
                one = land[i-1][j+1] + land[i][j]
                two = land[i-1][j+2] + land[i][j]
                three = land[i-1][j+3] + land[i][j]
            } else if(j==1){
                one = land[i-1][j-1] + land[i][j]
                two = land[i-1][j+1] + land[i][j]
                three = land[i-1][j+2] + land[i][j]
            } else if(j==2){
                one = land[i-1][j-2] + land[i][j]
                two = land[i-1][j-1] + land[i][j]
                three = land[i-1][j+1] + land[i][j]
            } else {
                one = land[i-1][j-3] + land[i][j]
                two = land[i-1][j-2] + land[i][j]
                three = land[i-1][j-1] + land[i][j]
            }
            land[i][j] = Math.max(one, two, three)
        }
    }
    console.log(land)
    answer = Math.max.apply(null,land[land.length-1])
    console.log(answer)
}

solution([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1]
])