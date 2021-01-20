let a = [-16, 27, 65, -2, 58, -92, -71, -68, -61, -33];
solution(a);

function solution(a) {
  let baaam = 0;
  let st = 0;
  let en = a.length - 1;
  let leftMin = a[st];
  let rightMin = a[en];
  while (st < en) {
    if (leftMin > rightMin) {
      if (leftMin < a[st + 1]) baaam++;
      else leftMin = a[st + 1];
      st++;
    } else {
      if (rightMin < a[en - 1]) baaam++;
      else rightMin = a[en - 1];
      en--;
    }
  }
  return a.length - baaam;
}
