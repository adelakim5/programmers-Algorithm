function solution(cacheSize, cities) {
  let cache = [];
  let time = 0;
  for (let city of cities) {
    city = city.toUpperCase();
    let index = cache.indexOf(city);
    if (index !== -1) {
      let theCity = cache.splice(index, 1);
      cache.push(theCity[0]);
      time++;
    } else {
      if (isFull(cache, cacheSize)) {
        cache.shift();
      }
      cache.push(city);
      time += 5;
    }
    if (isFull(cache, cacheSize)) cache = cache.slice(cache.length - cacheSize, cache.length);
    // 캐시 사이즈보다 오바되었으면 캐시 사이즈만큼 만들어주기위해 캐시에서 가장 오래된 데이터들을 제외시키기
  }
  return time;
}

function isFull(cache, cacheSize) {
  if (cache.length >= cacheSize) return true;
  return false;
}
