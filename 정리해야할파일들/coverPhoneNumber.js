function solution(){
    var answer = '';
    var phone_number = "027778888"
    var phone = phone_number.split('')
    for(var i=0; i<phone.length-4; i++){
        phone[i] = "*"
    }
    answer = phone.join('')
    console.log(answer);
}

solution2()

function solution2() {
    var s = '027778888'
    console.log(s.replace(/\d(?=\d{4})/g, "*"));
  }