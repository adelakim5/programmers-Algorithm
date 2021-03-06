## 입국심사

> 프로그래머스 레벨 3

### 풀이

1. times를 오름차순으로 정렬한다.
2. 답이 될 수 있는 시간의 범위를 구한다.
   - min : `times[0]`
   - max : `times[times.length - 1] * n`
3. 중간값을 구한다.
   - mid : (min + max) / 2의 몫
   - 이 값으로 몇명을 심사할 수 있는지 파악할 예정
4. 현재 범위의 중간값으로 몇명을 심사할 수 있는지 파악한다.
   1. 몇명을 심사할 수 있는지 세어준다.
      - mid / 각 시간의 몫을 합산해준다.
   2. 심사할 수 있는 수가 n보다 크거나 같다면
      - max값을 mid-1 로 줄인다.
      - 범위를 더 작은 쪽으로 줄이는 것
   3. 심사할 수 있는 수가 n보다 작다면
      - mid값을 mid+1 로 늘린다.
      - 범위를 더 큰 쪽으로 줄이는 것
   4. 위 과정을 min이 max보다 작거나 같을 동안 반복한다.
5. min을 return한다.

#### 🤦‍♀️ 나의 시행착오

1. 사실 제대로 감을 잡지 못한 문제
   - 어떻게 이분탐색으로 해야할지 몰랐다.
   - 처음엔 "현재 어디서 심사하면 끝나는 시간이 가장 작은가"를 기준으로 계산했다.... 역시나 시간초과
2. 알고리즘 훈련 열심히 하잣
