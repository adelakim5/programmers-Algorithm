function solution() {
    var strings =["abce", "abcd", "cdx"]	
    var index = []
    var answer = [];
    var n = 2


    strings.sort(function (a, b) {
        if (a[n] > b[n]) {
            return 1 // b가 더 작으면 자리를 바꾸지 않음 => 순서는 [b,a]
        } else if (a[n] < b[n]) {
            return -1 // b가 더 크면 자리를 바꿈 
        } else {
            if(a>b){
                return 1
            } else {
                return -1
            }
        }
    })


    console.log(strings)
}

solution()