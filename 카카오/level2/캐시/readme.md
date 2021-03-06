## 캐시
> 프로그래머스 레벨2

### 풀이 
1. LRU 알고리즘을 이해한다. 
   - 참고한 블로그 : [LRU 알고리즘 (Least Recently Used Algorithm)](https://j2wooooo.tistory.com/121) 
2. 캐시 안에 현재 처리할 도시와 같은 도시가 있는지 확인한다. 
   - 같은 도시가 있으면
     - 같은 도시가 있는 인덱스를 찾는다. 
     - 해당 자리의 도시를 뚝 떼어낸다. 
     - 뚝 떼어낸 도시를 캐시의 가장 마지막 자리에 집어넣는다. 
     - 시간을 +1 추가한다.
   - 도시가 없으면
     - 캐시가 꽉 찼는지 확인한다. 
       - 캐시가 꽉 찼으면
         - 가장 오래된 도시, 즉 캐시 맨 앞에 있는 도시를 뺀다. 
     - 캐시의 가장 마지막 자리에 도시를 집어넣는다. 
     - 시간을 +5 추가한다. 
3. 시간을 출력한다. 

#### 📍 주의사항
1. 캐시 사이즈가 0인 경우
   - 캐시 안에 도시를 넣고, 넣은 도시를 다시 빼야한다. 
   - 캐시 사이즈보다 오바되었기 때문이다. 
   - 이 부분을 처리해주지 않아서 실패했었다.  