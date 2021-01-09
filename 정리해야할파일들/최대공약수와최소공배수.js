function solution() {
    var n = 12
    var m = 3
    var gcm = 0
    var lcm = 0
    var small = 0
    var big = 0
    var mok = 0
    var nmg = 0

    if (n >= m) {
        big = n
        small = m
    } else {
        small = n
        big = m
    }

    while(trueㅡ){
        mok = big/small
        nmg = big%small
        if(nmg === 0){
            gcm = small
            lcm = n*m/gcm
            break
        }

        big = small
        small = nmg
    }

    console.log("gcm: " + gcm)
    console.log("lcm: "+ lcm)
}

solution()