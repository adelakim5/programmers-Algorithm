function solution(genres, plays) {
  const obj = genres.reduce((acc, val, index) => {
    if (!acc[val]) {
      acc[val] = {};
      acc[val].genre = val;
      acc[val].array = [{ play: plays[index], index: index }];
      acc[val].max = plays[index];
    } else {
      acc[val].array.push({ play: plays[index], index: index });
      acc[val].max += plays[index];
    }
    return acc;
  }, {});
  const sortedGenres = Object.values(obj).sort((a, b) => b.max - a.max);
  const answer = sortedGenres.reduce((acc, val) => {
    const { array } = val;
    array.sort((a, b) => {
      if (a.play === b.play) return a.index - b.index;
      return b.play - a.play;
    });
    const index = array.length <= 2 ? array.map((e) => e.index) : array.slice(0, 2).map((e) => e.index);
    acc.push(...index);
    return acc;
  }, []);
  return answer;
}
