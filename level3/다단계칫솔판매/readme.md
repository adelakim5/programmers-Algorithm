## 다단계 칫솔 판매

> 프로그래머스 레벨 3

### 풀이

1. 모든 판매원을 키값으로 가진 object를 만든다.

```
{
  center: [],
  john: [],
  mary: [],
  edward: [],
  sam: [],
  emily: [],
  jaimie: [],
  tod: [],
  young: []
}
```

위 배열안에 이익을 넣어 계산할 것이다.

2. 각 판매원을 key, 판매원의 추천인을 value로 가진 Map을 만든다.

```
Map(8) {
  'john' => 'center',
  'mary' => 'center',
  'edward' => 'mary',
  'sam' => 'edward',
  'emily' => 'mary',
  'jaimie' => 'mary',
  'tod' => 'jaimie',
  'young' => 'edward'
}
```

3. dfs로 판매원의 이익의 10%를 추천인에게 주는 계산을 진행한다.

- 판매원의 추천인을 타고타고타고 올라 "center"를 만날 때 까지 이익의 10%를 떼어줘야한다.
- 즉, young이 1200원만큼 팔았을 때
  1. young은 edward에게 120원을 떼어준다 -> young: 1080원 가짐 -> `object.young.push(1080)`
  2. edward는 mary에게 12원을 떼어준다 -> edward: 108원 가짐 -> `object.edward.push(108)`
  3. mary는 center에 1원을 떼어준다 -> mary: 11원 가짐 -> `object.mary.push(11)`
  4. center는 1원을 갖는다 -> `object.center.push(1)`

4. enroll 배열을 순차적으로 돌며 해당 판매원의 이익금을 합산한다.

```
{
  center: [ 1, 40, 0, 5, 100 ],
  john: [ 360 ],
  mary: [ 11, 2, 45, 900 ],
  edward: [ 108 ],
  sam: [],
  emily: [ 450 ],
  jaimie: [ 18 ],
  tod: [ 180 ],
  young: [ 1080 ]
}
```

이렇게 배열에 담긴 각 금액을 합산한 후, enroll 순서대로 배열에 담아 리턴한다.
