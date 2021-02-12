function solution(word, pages) {
  var answer = 0;
  let totalObj = {};
  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    const obj = {
      wordCount: 0,
      links: [],
      index: i,
    };
    const name = getMyname(page);
    const [links, removedAPage] = getLinks(page);
    obj.links = links;
    const body = getBody(removedAPage);
    const wordCount = countWords(body, word);
    obj.wordCount = wordCount;
    obj.linkScore = obj.wordCount / obj.links.length;
    totalObj[name] = obj;
  }
  answer = getMaxMatchingScoreIndex(totalObj);
  return answer;
}

function getMaxMatchingScoreIndex(totalObj) {
  let max = 0;
  let index = 0;
  for (const [key, value] of Object.entries(totalObj)) {
    [max, index] = compareMax([max, index], [value.wordCount, value.index]);
    if (value.links.length === 0) continue;
    const links = value.links;
    for (let link of links) {
      if (totalObj[link]) {
        totalObj[link].wordCount += value.linkScore;
        [max, index] = compareMax([max, index], [totalObj[link].wordCount, totalObj[link].index]);
      }
    }
  }
  return index;
}

function compareMax(currMax, newMax) {
  let [cMax, cIndex] = currMax;
  const [nMax, nIndex] = newMax;
  if (cMax < nMax) {
    cMax = nMax;
    cIndex = nIndex;
  } else if (cMax === nMax) {
    if (cIndex > nIndex) cIndex = nIndex;
  }
  return [cMax, cIndex];
}

function getMyname(page) {
  const myRegex = /(<meta property="og:url" content=")(https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?("\/>)/;
  const match = myRegex.exec(page);
  return match[4];
}

function getLinks(page) {
  const linkRegex = /(<a href=")(https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?(">)/g;
  const match = [...page.matchAll(linkRegex)];
  const links = match.map((e) => e[4]);
  const removedAPage = page.replace(linkRegex, "");
  return [links, removedAPage];
}

function getBody(removedAPage) {
  const bodyStartRegex = /<body>/;
  const bodyEndRegex = /<\/body>/;
  const bodyStartIndex = bodyStartRegex.exec(removedAPage).index;
  const bodyEndIndex = bodyEndRegex.exec(removedAPage).index;
  const body = removedAPage.slice(bodyStartIndex, bodyEndIndex);
  return body;
}

function countWords(body, word) {
  let cnt = 0;
  const onlyStr = /[^a-zA-Z]/;
  body = body.split("\n").map((e) => e.split(onlyStr));
  for (let i = 0; i < body.length; i++) {
    const element = body[i];
    for (let e of element) {
      if (e === "") continue;
      if (e.toLowerCase() === word.toLowerCase()) {
        cnt++;
      }
    }
  }
  return cnt;
}
