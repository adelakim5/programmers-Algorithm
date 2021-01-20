function solution(){
    var s = 'Pyy'
    var p = 0
    var y = 0
    var answer = true

    for(var i=0; i<s.length; i++){
        if(s[i]=='p'){
            p++
        } else if(s[i]=='y'){
            y++
        } 
    }

    if(p==y){
        answer = true
    } else if(p==0&&y==0){
        answer = true
    } else {
        answer = false
    }

    console.log(answer)
}

solution()

function numPY(s){
    //함수를 완성하세요
      return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
  }

  function numPY(s) {
    return s.match(/p/ig).length == s.match(/y/ig).length;
    // 근데 p,y둘 다 없을 땐 null을 반환한다고 함. 그래서 null일때 그 변수에 0을 넣어준 뒤 변수를 비교하는 방식으로 해결해야 예외처리 완벽하게 할 수 있다고 함 
  }