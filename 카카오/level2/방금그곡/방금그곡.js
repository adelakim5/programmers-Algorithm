function solution(m, musicinfos) {
  var answer = "(None)";
  let maxRuntime = 0;
  m = convertSharpToString(m);
  const adjustMusics = adjustMusicinfos(musicinfos);
  for (let adjustMusic of adjustMusics) {
    const { title, fm, runtime } = adjustMusic;
    if (fm.includes(m) && runtime > maxRuntime) {
      answer = title;
      maxRuntime = runtime;
    }
  }
  return answer;
}

function adjustMusicinfos(musicinfos) {
  let results = [];
  for (let musicinfo of musicinfos) {
    let [startTime, endTime, title, music] = musicinfo.split(",");
    music = convertSharpToString(music);
    startTime = startTime.split(":").map((e) => +e);
    endTime = endTime.split(":").map((e) => +e);
    let runtime = 0;
    let fullMusic = "";
    if (startTime[0] === endTime[0]) {
      runtime = endTime[1] - startTime[1];
      fullMusic = concatMusic(music, runtime);
    } else {
      if (startTime[1] > endTime[1]) {
        endTime[0]--;
        endTime[1] += 60;
      }
      let hourDiff = endTime[0] - startTime[0];
      runtime = hourDiff * 60 + endTime[1] - startTime[1];
      fullMusic = concatMusic(music, runtime);
    }
    results.push({ title, fm: fullMusic, runtime });
  }
  return results;
}

function concatMusic(music, runtime) {
  if (music.length >= runtime) return music.slice(0, runtime);
  let mus = "";
  while (true) {
    mus += music;
    if (mus.length >= runtime) break;
  }
  return mus.slice(0, runtime);
}

function convertSharpToString(music) {
  return music.replace(/C#/g, "c").replace(/D#/g, "d").replace(/F#/g, "f").replace(/G#/g, "g").replace(/A#/g, "a");
}
