## 3진법 뒤집기

> 프로그래머스 레벨 1, 월간 코드 챌린지

### 풀이

[3진법 뒤집기](https://programmers.co.kr/learn/courses/30/lessons/68935?language=javascript)

1. n을 3진법으로 만들고
2. 역으로 뒤집은 다음
3. 10진법으로 바꿔주면 된다.

큰 그림을 위와 같이 그린 후, 다음과 같이 풀었다.

1. toString()함수를 통해 3진법을 만들었다.
2. split()을 해줌으로써 배열로 만든 후, 각 원소를 정수 타입으로 바꿨다.
3. 3에 각 수의 index를 제곱한 수와 배열 원소를 곱한 값을 차례로 합산하여 리턴한다.

그런데.. `parseInt`의 꿀팁을 알고 다음과 같이 풀 수 있었다.

[parseInt() - MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/parseInt)

1. spread 연산자를 통해 toString()으로 3진법 변환한 수를 펼쳐놓고
2. reverse()로 역순한 뒤
3. parseInt로 3진법을 10진법 수로 편리하게 리턴한다.
