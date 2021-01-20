## 보석쇼핑

> 프로그래머스 레벨 3

### 풀이

1. 구매할 보석 개수를 구한다.
2. 보석 배열을 한바퀴 돌면서 보석을 저장하는데
   1. 이미 이전에 저장한 보석과 동일한 보석이 있으면?
      - 이전에 저장한 보석을 지운다.
      - 현재 보석과 보석 인덱스를 저장한다.
   2. 저장한 보석과 구매할 보석 개수가 같으면?
      - 저장한 보석의 첫번째 인덱스와 마지막 인덱스를 저장해둔다.
      - (답이 될 수 있는 애들을 모아둔 배열)
3. 배열을 정렬한다.
   - 가장 짧은 구간을 구해야한다. 또 짧은 구간이 여러개면 시작 번호가 가장 작은것을 구해야한다.
   - 배열 원소들을
     1. 구간이 짧은것부터 긴 것으로 오름차순 정렬한다.
     2. 구간 크기가 같으면 시작 인덱스가 작은것부터 큰 것으로 오름차순 정렬한다.
4. 배열의 첫번째 원소를 return 한다.

진행 사항은 다음과 같다.

```js
gems = ["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"]
gemsMap = {}

idx = 1, gem = "DIA"
gemsMap = {} // 아무것도 없으므로 삭제할 것도 없음
gemsMap = { 'DIA' => 1 } // 다이아, 다이아 번호 추가

idx = 2, gem = "RUBY"
gemsMap = { 'DIA' => 1 } // 루비 없으므로 삭제할 것도 없음
gemsMap = { 'DIA' => 1, 'RUBY' => 2 } // 루비, 루비 번호 추가

idx = 3, gem = "RUBY"
gemsMap = { 'DIA' => 1, 'RUBY' => 2 } // 루비 있음, 루비 삭제
gemsMap = { 'DIA' => 1 }
gemsMap = { 'DIA' => 1, 'RUBY' => 3 } // 루비, 루비 번호 추가

idx = 4, gem = "DIA"
gemsMap = { 'DIA' => 1, 'RUBY' => 3 } // 다이아 있음, 다이아 삭제
gemsMap = { 'RUBY' => 3 }
gemsMap = {'RUBY' => 3, 'DIA' => 4 } // 다이아, 다이아 번호 추가

idx = 5, gem = "DIA"
gemsMap = { 'RUBY' => 3, 'DIA' => 4 } // 다이아 있음, 다이아 삭제
gemsMap = {' RUBY' => 3 }
gemsMap = { 'RUBY' => 3, 'DIA' => 5 } // 다이아, 다이아 번호 추가

idx = 6, gem = "EMERALD"
gemsMap = { 'RUBY' => 3, 'DIA' => 5 } // 에메랄드 없으므로 삭제할 것도 없음
gemsMap = { 'RUBY' => 3, 'DIA' => 5, 'EMERALD' => 6 } // 에메랄드, 에메랄드 번호 추가

idx = 7, gem = "SAPPHIRE"
gemsMap = { 'RUBY' => 3, 'DIA' => 5, 'EMERALD' => 6 } // 사파이어 없으므로 삭제할 것도 없음
gemsMap = { 'RUBY' => 3, 'DIA' => 5, 'EMERALD' => 6, 'SAPPHIRE' => 7 } // 사파이어, 사파이어 번호 추가

gemsMap.size === gemsKindSize // gemsMap 크기와 보석 종류 같아짐
=> answer.push([3, 7]) // gemsMap의 첫번째 번호, 마지막 번호 저장

idx = 8, gem = "DIA"
gemsMap = { 'RUBY' => 3, 'DIA' => 5, 'EMERALD' => 6, 'SAPPHIRE' => 7 } // 다이아 있음, 다이아 삭제
gemsMap = { 'RUBY' => 3, 'EMERALD' => 6, 'SAPPHIRE' => 7 }
gemsMap = { 'RUBY' => 3, 'EMERALD' => 6, 'SAPPHIRE' => 7, 'DIA' => 8 } // 다이아, 다이아 번호 추가

gemsMap.size === gemsKindSize // gemsMap 크기와 보석 종류 같아짐
=> answer.push([3, 8]) // gemsMap의 첫번째 번호, 마지막 번호 저장

answer = [[3, 7], [3, 8]]
=> 구간이 작은순으로 정렬
=> 시작 번호가 작은순으로 정렬
=> 첫번째 배열 return
```

#### 나의 시행착오

- 심지어 예전에 풀었던 문제였다.
- 그때도 못풀고 다른사람의 풀이를 보았다.
- 오늘도 (..)
