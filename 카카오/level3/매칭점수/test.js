// const regex = /meta property="og:url" content="https:/;
// const regex2 = /a href="https:/g;

// const regex = /^(https:\/\/)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}/;

let linkRegex = /(<a href=")(https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?(">)/g;
let bodyStartRegex = /<body>/;
let bodyEndRegex = /<\/body>/;

const first = '<html lang="ko" xml:lang="ko" xmlns="http://www.w3.org/1999/xhtml">\n<head>\n  <meta charset="utf-8">\n  <meta property="og:url" content="https://careers.kakao.com/interview/list"/>\n</head>  \n<body>\n<a href="https://programmers.co.kr/learn/courses/4673"></a>#!MuziMuzi!)jayg07con&&\n\n</body>\n</html>';
const second = '<html lang="ko" xml:lang="ko" xmlns="http://www.w3.org/1999/xhtml">\n<head>\n  <meta charset="utf-8">\n  <meta property="og:url" content="https://www.kakaocorp.com"/>\n</head>  \n<body>\ncon%\tmuzI92apeach&2<a href="https://hashcode.co.kr/tos"></a>\n\n\t^\n</body>\n</html>';
const third = '<html lang="ko" xml:lang="ko" xmlns="http://www.w3.org/1999/xhtml">\n<head>\n  <meta charset="utf-8">\n  <meta property="og:url" content="https://b.com"/>\n</head>  \n<body>\nSuspendisse potenti. Vivamus venenatis tellus non turpis bibendum, \n<a href="https://a.com"> Link to a </a>\nblind sed congue urna varius. Suspendisse feugiat nisl ligula, quis malesuada felis hendrerit ut.\n<a href="https://c.com"> Link to c </a>\n</body>\n</html>';

// console.log(linkRegex.exec(first));
// const bodyStartIndex = bodyStartRegex.exec(first).index;
// const bodyEndIndex = bodyEndRegex.exec(first).index;
// console.log(bodyStartIndex, bodyEndIndex);
const match = [...second.matchAll(linkRegex)];
console.log(match);
// const match = regex.exec(first);
// console.log(match);
// const arr = [
//   '<html lang="ko" xml:lang="ko" xmlns="http://www.w3.org/1999/xhtml">\n<head>\n  <meta charset="utf-8">\n  <meta property="og:url" content="https://a.com"/>\n</head>  \n<body>\nBlind Lorem Blind ipsum dolor Blind test sit amet, consectetur adipiscing elit. \n<a href="https://b.com"> Link to b </a>\n</body>\n</html>',
//   '<html lang="ko" xml:lang="ko" xmlns="http://www.w3.org/1999/xhtml">\n<head>\n  <meta charset="utf-8">\n  <meta property="og:url" content="https://c.com"/>\n</head>  \n<body>\nUt condimentum urna at felis sodales rutrum. Sed dapibus cursus diam, non interdum nulla tempor nec. Phasellus rutrum enim at orci consectetu blind\n<a href="https://a.com"> Link to a </a>\n</body>\n</html>',
// ];

// const first = arr[0];
// const second = arr[1];

// const match1 = regex.exec(first);
// const match2 = regex2.exec(second);
// let match2;

// while ((match2 = regex2.exec(second)) !== null) {
//   console.log(match2);
// }

// console.log(second[201]);

// const match1 = first.match(regex);
// const match2 = second.match(regex2);

// console.log(match1);
// console.log(match2);
