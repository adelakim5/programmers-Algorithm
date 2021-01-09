function solution() {
    var w = 254
    var h = 370
    var answer = 1;
    var gcd, nmg, big, small = 0

    if (w > h) {
        big = w
        small = h
    } else if (w < h) {
        big = h
        small = w
    } else {
        gcm = w
    }

    while (true) {
        nmg = big % small
        if (nmg == 0) {
            gcd = small
            break
        }
        big = small
        small = nmg
    }

    answer = w*h-(w+h-gcd)

    console.log(answer)
    console.log(gcd)

}

solution()