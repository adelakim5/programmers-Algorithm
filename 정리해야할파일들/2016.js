function solution() {
    var answer = ''
    var a = 5
    var b = 24
    var day = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU']
    var year = []

    for (var i = 0; i < 366; i++) {
        year.push(day[i % 7])
    }

    if (a == 1) {
        answer = year[b - 1]
    } else if(a==2){
        answer = year[b+31 - 1]
    } else if(a==3){
        answer = year[b+60 -1]
    } else if(a==4){
        answer = year[b+91 -1]
    } else if(a==5){
        answer = year[b+121 -1]
    } else if(a ==6){
        answer = year[b+152-1]
    } else if(a == 7){
        answer = year[b+182 -1]
    } else if(a==8){
        answer = year[b+213-1]
    } else if (a==9){
        answer = year[b+244-1]
    } else if (a==10){
        answer = year[b+274-1]
    } else if(a==11){
        answer = year[b+305 -1]
    } else if(a==12){
        answer = year[b+335 - 1]
    }
    console.log(answer)
}




solution()

function getDayName(a,b){
    var arr = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    var date = new Date(`2016-${a}-${b}`);
  var day = date.getDay()
    return arr[day];
}