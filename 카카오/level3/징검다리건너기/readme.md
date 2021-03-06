## 징검다리 건너기

> 프로그래머스 레벨 3

### 풀이

> 이분탐색

1. 징검다리를 건널 수 있는 친구들의 수를 기준으로 이분탐색을 실시한다.
   - 최소 1명
   - 최대 2,000,000,000명
   - 중간값(m) = (1 + 2000000000) / 2 의 몫
   1. m번째 친구가 건널 수 있는지 파악한다.
   2. 건널 수 있다면? `1 ~ m`까지는 징검다리를 건널 수 있다는 의미이므로, 최솟값을 **m+1**로 조정한다.
   3. 건널 수 없다면? `m ~ 2000000000`까지는 징검다리를 건널 수 없다는 의미이므로, 최댓값을 **m-1**로 조정한다.
   4. 최솟값이 최댓값보다 작거나 같을 동안 위 과정을 반복한다.
2. m번째 친구가 건널 수 있는지 파악하는 함수를 만든다.
   1. 0이 쓰여진 돌이 k개 이상 연속으로 있으면 갈 수 없다.
   2. 즉, 돌의 숫자가 m보다 작으면 m번째 친구는 해당 돌을 밟을 수 없다.
   3. 돌의 숫자가 m보다 작으면 cnt++, m보다 작지 않으면 cnt = 0으로 해줌으로써 m보다 작은 연속된 돌의 개수를 센다.
      - m보다 큰 돌을 만나면 밟을 수 있으니 cnt = 0으로 초기화
   4. cnt가 k와 같아지면 m번째 친구는 **건널 수 없다.**
   5. cnt가 k보다 작으면 m번째 친구는 **건널 수 있다.**

### 참고

해설 - [2019 카카오 개발자 겨울 인턴십 코딩 테스트 문제 해설](https://tech.kakao.com/2020/04/01/2019-internship-test/)

#### 🤦‍♀️나의 시행착오

1. 어떤 것을 기준으로 이분탐색해야하는지 감을 잡지 못했다.
   - 더 많은 연습이 필요하다.
2. 최댓값과 최솟값을 2,000,000,000과 1로 두었을 때 통과했다.
   - 원래는
     - 최댓값 = max(...stones)
     - 최솟값 = min(...stones)
   - 이렇게 두고 이분탐색을 진행했는데, 효율성 테스트에서 `런타임 에러`를 맞았다.
   - 어쨌든 돌에 쓰여진 가장 최솟값부터 가장 최댓값까지가 건널 수 있는 사람 수의 범위라고 생각했는데 ... 대체 왜 어디서 런타임 에러가 난거지 ㅜㅜ
