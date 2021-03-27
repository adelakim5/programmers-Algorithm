function solution(bridge_length, weight, truck_weights) {
  const q = Array(bridge_length).fill(0);
  let sum = 0;
  let index = 0;
  let time = 0;
  while (index < truck_weights.length) {
    const curr = truck_weights[index];
    const en = q.shift();
    sum -= en;
    if (sum + curr <= weight) {
      q.push(curr);
      sum += curr;
      index++;
    } else {
      q.push(0);
    }
    time++;
  }
  return time + bridge_length;
}
