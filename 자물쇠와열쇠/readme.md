## 자물쇠와 열쇠

> 프로그래머스 레벨 3, 카카오

## 풀이

> 해설 - [2020 신입 개발자 블라인드 채용 1차 코딩테스트 문제 해설](https://tech.kakao.com/2019/10/02/kakao-blind-recruitment-2020-round1/)

1. 자물쇠를 3배 크기로 만들고, 가운데에 자물쇠를 배치한다.
2. key를 좌측 상단에서부터 차근차근 덧대본다.
3. 자물쇠와 key가 겹치는 부분이 있으면
   ​- key를 덧대본다.

   - key가 자물쇠와 맞으면? true를 반환한다.
   - 그렇지 않으면 다음으로 이동하여 덧대본다.

4. 자물쇠를 열지 못하면, key를 회전시켜 위 과정을 다시 반복한다.
5. 최대 4번까지 회전시킨 다음, 그럼에도 불구하고 열지 못하면 false를 반환한다.

🤦‍♀️ 사실 스스로 풀지 못해서 해설을 보고 풀었는데도 꽤나 오래걸렸다.

구현력이 많이 부족한 것 같다... 아래는 내가 구현한 구체적인 과정이다.

1. key를 회전하는 함수를 하나 만든다.

   - 시계방향으로 90도 회전시킨다.

   ![image](https://user-images.githubusercontent.com/49264795/104860365-8b1adc00-596e-11eb-820d-cbf71ae1bb42.png)

2. 자물쇠의 길이의 3배인 newLock을 만드는 함수를 만든다.

   - newLock은 자물쇠의 길이의 3배인 행과 열로 이루어진 이차원배열이다.
   - 한 가운데에 lock을 배치한다.

   ![image](https://user-images.githubusercontent.com/49264795/104860379-a4238d00-596e-11eb-974d-216944cc8d64.png)

3. 좌측 상단부터 key를 차례로 덧대보면서, 자물쇠와 겹치는 부분을 찾는다.

   ![image](https://user-images.githubusercontent.com/49264795/104860396-b00f4f00-596e-11eb-8a87-446587e5c8df.png)

   ![image](https://user-images.githubusercontent.com/49264795/104860414-c3bab580-596e-11eb-8458-f10867963d37.png)

   ![image](https://user-images.githubusercontent.com/49264795/104860418-cb7a5a00-596e-11eb-9214-f3370b8ebe5c.png)

   ![image](https://user-images.githubusercontent.com/49264795/104860421-d2a16800-596e-11eb-9257-cb43d2740b44.png)

   이런식으로 덧대다 보면, key를 덧댈 수 있는 범위가 정해진다.

   ![image](https://user-images.githubusercontent.com/49264795/104860428-ebaa1900-596e-11eb-80ab-08d335562cc5.png)

   ![image](https://user-images.githubusercontent.com/49264795/104860435-f19ffa00-596e-11eb-823d-584fdc91a50d.png)

   이 예시에서 key를 덧대어 비교할 수 있는 최대 범위는 (6,6) 까지이다.

   즉, key의 시작 좌표가 `newLock의 길이 - key의 길이`일 때까지만 검사해보면 된다.

   또한 겹치는 부분의 범위도 정해져있다.

   ![image](https://user-images.githubusercontent.com/49264795/104860443-011f4300-596f-11eb-879a-dc6791739899.png)

   가장 처음 key와 lock이 겹칠때, 그리고 가장 마지막으로 key와 lock이 겹치는 부분은 lock의 가장 좌측 상단과 우측 하단에 해당한다.

   ![image](https://user-images.githubusercontent.com/49264795/104860451-0bd9d800-596f-11eb-84d0-77df38e72dd2.png)

   이에따라 파랗게 그어놓은 저 라인에 해당될 때에만 key와 lock을 검사해주면 된다.

4. key와 lock을 비교한다.

   - key와 lock의 값은 상반되어야 한다.
   - 같은 위치에서 key는 1, lock은 0이어야 한다.
   - 같은 위치에서 key가 1, lock이1이면 자물쇠를 열 수 없다.

   ![image](https://user-images.githubusercontent.com/49264795/104860474-2744e300-596f-11eb-909e-17b905c9708b.png)

   열쇠가 여기에 덧대진다면? 자물쇠를 열 수 없다.

   ![image](https://user-images.githubusercontent.com/49264795/104860477-32980e80-596f-11eb-8268-3bbbc05ac5f7.png)

   lock의 1과 key의 1이 겹치기 때문이다.

   ![image](https://user-images.githubusercontent.com/49264795/104860485-3e83d080-596f-11eb-8146-728739843f5d.png)

   또한 lock의 0이 메꿔지지 않아서 열 수 없다.

   ![image](https://user-images.githubusercontent.com/49264795/104860492-48a5cf00-596f-11eb-8963-96f85cf7ec49.png)

   열쇠에 여기에 덧대진다면? 자물쇠를 열 수 있다.

   ![image](https://user-images.githubusercontent.com/49264795/104860507-53f8fa80-596f-11eb-96c3-2b1f6799c6ce.png)

   key의 1이 모두 lock의 0과 맞물리고, lock의 1은 모두 key의 0과 맞물리기 때문이다.

   key의 하얀 부분은 lock에 포함되지 않으므로 0이건 1이건 상관없다.

   이렇게 자물쇠를 열 수 있으면 **true를 바로 리턴**하였고, 모든 범위를 다 돌았음에도 자물쇠를 열지 못하면 **key를 90도로 회전**한 다음 다시 위 과정을 반복하였다.
