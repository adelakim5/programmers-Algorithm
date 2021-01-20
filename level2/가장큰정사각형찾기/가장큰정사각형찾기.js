function solution() {
    var board = [
        // [0, 1, 1, 1],
        // [1, 1, 1, 1],
        // [1, 1, 1, 1],
        // [0, 0, 1, 0]
        [0, 0, 1, 1],
        [1, 1, 1, 1]
    ]
    var answer = 0
    var max = 0
    var x = board[0].length
    var y = board.length
    if(x<2 || y<2) return 1

    for (var i = 1; i < y; i++) {
        for (var j = 1; j < x; j++) {
            if(board[i][j]>=1){
                var up = board[i - 1][j]
                var left = board[i][j - 1]
                var upperLeft = board[i - 1][j - 1]
                var min = Math.min(up, left, upperLeft);
                board[i][j] = min+1
                max = Math.max(max, min+1)
            }
        }
    }

    answer = Math.pow(max, 2)
    console.log(answer)
}
solution()