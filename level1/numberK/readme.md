## K번째 수

> 프로그래머스 레벨 1

### 풀이

문제 - [K번째 수](https://programmers.co.kr/learn/courses/30/lessons/42748)

1. commands의 요소들을 돌면서 각 요소에 맞춰 slice, sort 한 배열의 k번째 수를 answer에 넣는다.
2. answer를 반환한다.

#### 새로 구현한 코드

- reduce를 사용했다.
  - 초기값으로 빈 배열을 두고, 각 commands의 요소들을 돌면서 slice, sort한 배열의 k-1번째 수를 배열에 계속 push시켰다.
  - 그렇게 적재된 answer를 반환한다.
