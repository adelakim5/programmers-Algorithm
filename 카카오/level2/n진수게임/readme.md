## n진수 게임 
> 프로그래머스 레벨 2

### 풀이 
1. 게임을 진행하며 불러야 하는 숫자들을 배열에 담는다. 
   - 0, 1, 2 ... 를 n진수로 만든다. 
   - n진수로 만들어진 문자열이 여러개라면 **split**하여 각각의 문자열로 만든 후 배열에 넣는다. 
2. p-1인덱스에 해당하는 숫자들을 answer에 엮는다. 
   - 1번째 바퀴에서 p번째 숫자는 p-1 인덱스에 있다. 
   - 2번째 바퀴에서 p번째 숫자는 p+m-1 인덱스에 있다. 
   - 배열에 p번째 숫자들이 들어갈 때마다 한바퀴 돌고 난 후 달라지는 p의 자리를 새로 계산해준다. 
   - p-1 인덱스에 있는 숫자들을 answer에 엮는다.
3.  answer를 반환한다. 