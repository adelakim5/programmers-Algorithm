function solution(n, weak, dist) {
  for (let size = 1; size <= dist.length; size++) {
    let result = [];
    let visit = Array(n).fill(false);
    permutation(dist, size, [], result, visit); // 배치할 친구들 순열 모음
    // console.log(result);
    let tempWeak = weak.slice();
    for (let i = 0; i < tempWeak.length; i++) {
      // 취약 지점 돌면서
      for (let j = 0; j < result.length; j++) {
        // 배치할 친구들의 순열을 돌면서
        let temp2 = tempWeak.slice();
        for (let k = 0; k < result[j].length; k++) {
          // 첫번째 순열을 돌면서
          //   console.log(`result[j]: ${result[j]}`);
          //   console.log(`result[j][k]: ${result[j][k]}`);
          let range = temp2[0] + result[j][k]; // 1에서 1만큼 감 -> 2, 2에서 5만큼 감(2보다 큰 애들만 걸러냈으므로 현재 temp[0]은 5) -> 7
          //   console.log(`range: ${range}`);
          temp2 = temp2.filter((e) => e > range); // 방문한 취약 지점 제거
          //   console.log(`temp2: ${temp2}`);
        }
        if (!temp2.length) return result[0].length; // size가 가장 작은 순열의 길이를 반환. 이중포문도 여기서 return하면 끝나는 듯
      }
      let x = tempWeak.shift();
      x += n;
      tempWeak.push(x); // 다음 지점을 시작점으로 두기
    }
  }
  return -1;
}

function permutation(dist, size, res, result, visit) {
  // 잘못된 순열
  if (res.length === size) {
    // console.log(res);
    result.push([...res]); // 깊은 복사가 되어버리므로 이렇게 해주어야 함
    // console.log(result);
    return;
  }
  for (let i = 0; i < dist.length; i++) {
    if (!visit[dist[i]]) {
      res.push(dist[i]);
      visit[dist[i]] = true;
      permutation(dist, size, res, result, visit);
      visit[dist[i]] = false;
      res.pop();
    }
  }
}

// function permutation(dist, size, res) {
//   // size만큼 친구 선택
//   if (res.length === size) return [res];
//   return dist.reduce((acc, val, idx) => {
//     let newDist = [...dist];
//     newDist.splice(idx, 1);
//     res.push(val);
//     let result = permutation(newDist, size, [...res]);
//     res.pop();
//     acc.push(...result);
//     return acc;
//   }, []);
// }

let n = 12;
let weak = [1, 5, 6, 10];
let dist = [1, 2, 3, 4];
console.log(solution(n, weak, dist));
