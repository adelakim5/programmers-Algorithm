function solution(citations) {
  let max = Math.max(...citations);
  while (max > 0) {
    const citedPapers = citations.filter((e) => e >= max);
    const otherPapers = citations.length - citedPapers.length;
    if (citedPapers.length >= max) return max;
    max--;
  }
  return max;
}
