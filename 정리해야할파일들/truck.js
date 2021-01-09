function solution() {
   var bridge_length = 2;
   var weight = 10
   var truck_weights = [7,4,5,6]
   var answer = 0

   var going = []
   var goingSum = 0
   
   for(var i=0; i<bridge_length; i++){
       going.push(0)
   }

   now_truck = truck_weights.shift() // [7]
   going.unshift(now_truck) // [7,0,0]
   going.pop() // [7,0]
   goingSum = goingSum + now_truck // 7
   answer++; // 1

   while(goingSum){
       goingSum = goingSum - going.pop() // 다리 건너는 거 [7]
       console.log("여기 고잉: " + going)
       console.log("고잉썸: " + goingSum)
       now_truck = truck_weights.shift() // [4]

       if(goingSum+now_truck <= weight){ // 10보다 작으면
           going.unshift(now_truck) // [4,7]
           console.log("지금 고잉: " + going)
           goingSum = goingSum + now_truck
           console.log("지금 고잉썸: " + goingSum)
       } else { // 크면
        going.unshift(0) // [0,7,0]
        console.log("고잉: " + going)
        truck_weights.unshift(now_truck)
       }
       answer++;
   }

  console.log(answer)
}




solution()