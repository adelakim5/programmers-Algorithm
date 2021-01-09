function test(){
    var array = [1,2,3,4,5]
    var arr = [...array]
    console.log(arr)
    arr.splice(0, 1)
    console.log(arr)

    console.log(array.reduce((newarr, a, index) => {
        if(a>0){
            newarr.push(a+b)
        }
        return newarr
    }, []))

    
}

test()