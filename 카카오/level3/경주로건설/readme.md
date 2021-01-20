## 경주로 건설

> 프로그래머스 레벨 3

### 풀이

1. 비용 및 방문 여부를 저장할 visit 배열을 만든다.
   - 3차원 배열로 만들어야 한다.
   - `(x, y, 방향)`을 저장하기 때문이다.
   - 각 방향으로 들어오는 비용을 각각 저장할 것이다.
   ```js
   // 최댓값으로 초기화된 방문 배열
   [
     [
       [Infinity, Infinity, Infinity, Infinity], // 북, 동, 남, 서 방향에 대한 비용
       [Infinity, Infinity, Infinity, Infinity],
       [Infinity, Infinity, Infinity, Infinity],
       [Infinity, Infinity, Infinity, Infinity],
     ],
     [
       [Infinity, Infinity, Infinity, Infinity],
       [Infinity, Infinity, Infinity, Infinity],
       [Infinity, Infinity, Infinity, Infinity],
       [Infinity, Infinity, Infinity, Infinity],
     ],
     [
       [Infinity, Infinity, Infinity, Infinity],
       [Infinity, Infinity, Infinity, Infinity],
       [Infinity, Infinity, Infinity, Infinity],
       [Infinity, Infinity, Infinity, Infinity],
     ],
     [
       [Infinity, Infinity, Infinity, Infinity],
       [Infinity, Infinity, Infinity, Infinity],
       [Infinity, Infinity, Infinity, Infinity],
       [Infinity, Infinity, Infinity, Infinity],
     ],
   ];
   ```
2. 큐에 처음 시행되는 지점을 넣는다.
   - `(0,0)`부터 시작하며, 4 방향 모두 넣는다.
   - 아직 출발하지 않았으므로 비용은 0
3. bfs를 진행한다.
   1. 큐에서 `(x, y, 방향, 비용)`을 가진 현재 지점을 꺼낸다.
   2. 다음으로 갈 방향을 정한다.
      - 4가지 방향을 살펴보면서 다음으로 갈 `(nx, ny)`가
        - 서로 후진하는 방향이거나 (ex. 북-남, 동-서)
        - board 범위 밖에 있거나
        - 벽이면 제외한다.
      - 그 외의 경우 다음을 진행한다.
   3. 방향이 같으면 (즉, 직진이면) 비용에 100을 더한다.
   4. 방향이 다르면 (즉, 코너이면) 비용에 600(500 + 100)을 더한다.
   5. 방문한 적 없거나, 해당 지점의 비용보다 작으면
      - 해당 지점의 비용을 갱신하고
      - 큐에 `(nx, ny, 현재방향, 합산비용)`을 넣는다.
      - 큐를 비용을 기준으로 오름차순 정렬한다.
4. `(n-1, n-1)`에 저장된 비용 중 최솟값을 리턴한다.

#### 🤦‍♀️ 나의 시행착오

- 굉장히 오래 걸린 문제였다...
  - bfs 알고리즘을 생각하고 구현했다.
  - 69~73점 정도로 채점이 되었다.
  - 그래서 구글링을 했는데 내가 구현했던 코드와 비슷했고...
  - 근데 ㅋㅋㅋㅋ 그 코드들을 js로 옮겨도 통과가 안된다.
- bfs가 아닌 다익스트라 + 최단경로 문제였다. (물론 bfs로 탐색하지만)
  - 문제의 반례를 든 분의 블로그를 보았다.
  - (개인적인 생각인데) 추후에 반례를 고려한 새로운 테케를 추가한 것 같다.
