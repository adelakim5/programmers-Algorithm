function solution(genres, plays) {
  var answer = [];
  const maxValues = {};
  const arr = genres.reduce((acc, val, index) => {
    const music = { genre: val, index, plays: plays[index] };
    if (maxValues[val]) maxValues[val] += music.plays;
    else maxValues[val] = music.plays;
    acc.push(music);
    return acc;
  }, []);
  const maxArr = Object.entries(maxValues).sort((a, b) => b[1] - a[1]);
  for (let [genre, plays] of maxArr) {
    const songs = arr
      .filter((e) => e.genre === genre)
      .sort((a, b) => {
        if (b.plays === a.plays) return a.index - b.index;
        return b.plays - a.plays;
      });
    if (songs.length <= 2) answer.push(...songs.map((e) => e.index));
    else answer.push(...songs.slice(0, 2).map((e) => e.index));
  }
  return answer;
}

// 문제를 잘 읽자..
