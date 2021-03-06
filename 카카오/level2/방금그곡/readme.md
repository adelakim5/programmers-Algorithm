## 방금그곡
> 프로그래머스 레벨2

### 풀이
1. #이 붙은 악보를 다른 글자로 바꾼다. 
   1. C# => c
   2. D# => d
   3. G# => g ...
   - 이런식으로 바꿔준다. 
   - 위 악보은 **한 음**인데, 문자열 길이는 2개이기 때문에 차후 계산이 어려워질 수 있다. 
   - 따라서 구분되면서 && 문자열 길이가 1인 글자로 바꿔주는 것이 좋다. 

2. 재생된 시간을 계산한다. 
   - 시작한 시간과 끝난 시간의 차이를 구해서 음악이 재생된 시간을 구한다.  
   - 시작한 시간의 시, 분과 끝난 시간의 시, 분을 잘 따져가며 재생된 시간을 구한다. 

3. 재생된 시간만큼의 악보를 만든다. 
   - 악보가 재생된 시간보다 길다면? 재생된 시간만큼의 길이로 자른다. 
   - 악보가 재생된 시간보다 짧다면? 재생된 시간만큼의 길이가 되도록 악보 뒤에 악보를 이어붙인다.
   - **재생된 시간만큼 길이의 악보**를 반환한다. 

4. 방송된 곡 하나하나에 대하여 위 과정을 진행한다. 
5. 조건에 부합한 곡의 제목을 return 한다. 
   - 재생된 시간이 가장 길어야 한다. 
   - (그러한 곡들이 여러개라면) 먼저 방송된 곡을 고른다. 

