## 메뉴 리뉴얼

> 프로그램서 레벨2, 카카오

### 풀이

[메뉴 리뉴얼](https://programmers.co.kr/learn/courses/30/lessons/72411?language=javascript)

1. 모든 orders에 대하여 course의 값만큼 각각 조합한다.
2. 같은 조합의 개수를 각각 세어준다.
3. 조합의 수가 가장 많은 && 최소 2인 문자열을 answers에 넣고 리턴한다.

큰 그림을 위와같이 그린 후 다음과 같이 해결하였다.

1. course의 값만큼 조합한 문자열을 저장하기 위한 Object를 만든다.

   - key: course의 값
   - value:
     - key: 각 orders의 요소들을 course의 값만큼 조합한 문자열
     - value: 해당 문자열의 출현 수

   ```
   totalObj = {
       '2' : {
           'AB' : 1,
           'AC' : 2,
           'AD' : 1,
           ...
       },
       '3' : {
           'ABC' : 1,
           'ABD' : 1,
           ...
       },
       '4' : {
           'ABCD', 1,
           ...
       },
   }
   ```

2. 각 course의 값만큼 각각의 orders를 조합한다.

   ```
   course = [2, 3, 4];
   orders = ["ABCFG", "AC", "CDE"]
     // course의 첫번째 요소 = 2
     // 길이가 2인 조합을 만든다.

     // 1. ABCFG
     ["AB", "AC", "AF", "AG", "BC", "BF", "BG", "CF", "CG", "FG"]

     // 2. AC
     ["AC"]

     // 3. CDE
     ["CD", "CE", "DE"]
   ```

3. 각 조합의 개수를 세어준다.

   - `totalObj`의 `'2'`에 현재 구한 문자열의 조합이 key로 저장되어 있는지 파악하고
     - 있으면 1++
     - 없으면 `{key: 현재 구한 문자열의 조합, value: 1}`을 가지도록 저장한다.
   - course의 모든 원소에 대하여 위 과정을 반복한다.

4. 조합의 개수가 가장 많고 && 최소 2번 이상 출현한 문자열을 answers의 배열에 넣는다.

   - 위 예시(course 중 2의 경우)에서 모든 문자열은 1번만 출현했고, `AC`가 2번 출현했다.
   - 위 예시의 경우 `AC`가 answers에 들어간다.
   - (나의 경우) 조합의 개수를 더해줄 때 최댓값을 기억하기 위해 `max`라는 변수를 두었다. 이후 answers에 넣을 문자열을 탐색할 때, 저장된 횟수가 `max`와 같고 2보다 큰 문자열만 가져오도록 하였다.

5. answers를 리턴한다.

#### 알게된 점

1. 고차함수는 확살히 오래걸린다.
   - setObj, getMaxComb만 reduce로 바꿔주었는데 몇몇 테케에서는 2~3배가 더 걸렸다.
   - 코테 풀이는 클린코딩과 별개로 보는게 맞다는 얘기를 들었다. 그냥 the_luv게 짜야겠다 (ㅋㅋㅋ)
