## 순위 검색

> 프로그래머스 레벨 2, 카카오

이게 레벨 2라니....

### 풀이

[순위 검색](https://programmers.co.kr/learn/courses/30/lessons/72412)
[2021 카카오 신입공채 해설](https://tech.kakao.com/2021/01/25/2021-kakao-recruitment-round-1/)

1. 그룹을 만든다.

- query문에서 일일이 모두 parse한 후 info에서 하나하나 찾는다면 시간초과를 면치 못한다.
- **그룹**을 만들고, info에 들어있는 각 정보가 속할 수 있는 그룹에 모두 넣는다.

```js
"python, frontend, junior, pizza, 210"

// 위 사람이 속할 수 있는 그룹은 다음과 같다.
1. python, frontend, junior, pizza

2. - , frontend, junior, pizza
3. python, -, junior, pizza
4. python, frontend, -, pizza
5. python, frontend, junior, -

6. -, -, junior, pizza
7. python, -, -, pizza
8. python, frontend, -, -
9. -, frontend, -, pizza
10. -, frontend, junior, -
11. python, -, junior, -

12. -, -, -, pizza
13. python, -, -, -
14. -, frontend, -, -
15. -, -, junior, -

16. -, -, -, -
```

따라서 위 항목들을 포함하는 "그룹"을 만든다.

2. info에서 알맞은 그룹 안에 해당 점수를 넣는다.

3. 각 그룹 내 점수들을 오름차순으로 정렬한다.

4. query를 돌면서

   1. 언어, 직군, 경력, 소울푸드, 코테 점수를 파악한다.
   2. 위에서 만든 그룹에서, 해당 지원자의 언어, 직군, 경력, 소울푸드에 맞는 그룹을 찾는다.
   3. 이 그룹에서 해당 지원자의 코테 점수 이상인 사람들의 수를 센다.
      - 이때, **이분탐색**으로 찾아야한다. (그렇지않으면 시간초과...)
      - 단, 그룹 내에 해당 지원자의 코테 점수가 없을 수도 있으므로, 해당 지원자의 코테 점수보다 높거나 같은 점수가 어디서부터 시작하는지를 찾아야한다. (lowerbound)
   4. 센 수를 answer 배열에 넣는다.

5. answer를 반환한다.

#### 시행착오

- 설마설마... 그 그룹을 진짜 다 만들어야 하는지 몰랐다.
  - 제일 처음 시도할 때 생각했던 방법이긴 한데, 구현 중 너무 무리수 같아서 관뒀다.. 바보
- [lowerbound](https://m.blog.naver.com/PostView.nhn?blogId=bestmaker0290&logNo=220820005454&proxyReferer=https:%2F%2Fwww.google.com%2F)를 잘 몰라서 그 부분을 좀 헤맸다. 블로그 참고!
- 해당 점수 이상을 세어줄 때,
  ```js
  let cnt = 0;
  for (let i = st; i < selectedGroup.length; i++) {
    if (selectedGroup[i] >= score) {
      cnt = i;
      break;
    }
  }
  answer.push(selectedGroup.length - cnt);
  ```
  이렇게 하면 틀리고
  ```js
  let i = 0;
  for (i = st; i < selectedGroup.length; i++) {
    if (selectedGroup[i] >= score) break;
  }
  answer.push(selectedGroup.length - i);
  ```
  이렇게 하면 맞았다. 왜지...?
