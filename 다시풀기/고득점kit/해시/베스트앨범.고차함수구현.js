Array.prototype.sort = function (fn) {
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = 0; j < this.length - 1 - i; j++) {
      if (fn(this[j], this[j + 1]) > 0) {
        let temp = this[j];
        this[j] = this[j + 1];
        this[j + 1] = temp;
      }
    }
  }
  return this;
};

Array.prototype.filter = function (fn) {
  let result = [];
  for (let el of this) {
    if (fn(el)) result.push(el);
  }
  return result;
};

function solution(genres, plays) {
  var answer = [];
  const musics = genres.map((e, i) => ({ id: i, genre: e, play: plays[i] }));
  const genrePlaysCount = {};
  for (let i = 0; i < genres.length; i++) {
    if (genrePlaysCount[genres[i]]) genrePlaysCount[genres[i]] += plays[i];
    else genrePlaysCount[genres[i]] = plays[i];
  }
  const sortedGenrePlaysCount = Object.entries(genrePlaysCount).sort((a, b) => b[1] - a[1]);
  for (let [genre, play] of sortedGenrePlaysCount) {
    const genreMusics = musics
      .filter((e) => e.genre === genre)
      .sort((a, b) => {
        if (a.play === b.play) return a.id - b.id;
        return b.play - a.play;
      });
    if (genreMusics.length <= 2) genreMusics.forEach((e) => answer.push(e.id));
    else genreMusics.slice(0, 2).forEach((e) => answer.push(e.id));
  }
  return answer;
}
