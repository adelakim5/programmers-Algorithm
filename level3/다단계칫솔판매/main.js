function solution(enroll, referral, seller, amount) {
  const n = enroll.length;
  const obj = {};
  obj.center = [];
  for (let i = 0; i < n; i++) {
    obj[enroll[i]] = [];
  }

  const map = new Map();
  for (let i = 0; i < n; i++) {
    const child = enroll[i];
    const parent = referral[i];
    if (!map.has(child)) map.set(child, parent === "-" ? "center" : parent);
  }

  const m = seller.length;

  for (let i = 0; i < m; i++) {
    const stack = [];
    const curr = seller[i];
    const price = amount[i] * 100;
    stack.push({ curr, price });
    dfs(stack);
  }

  const answer = enroll.reduce((acc, val) => {
    const sumPrice = obj[val].reduce((a, v) => a + v, 0);
    acc.push(sumPrice);
    return acc;
  }, []);

  function dfs(stack) {
    while (true) {
      const { curr, price } = stack.pop();
      const currP = map.get(curr);
      const tenPrice = Math.floor(price * 0.1);
      const myPrice = price - tenPrice;
      obj[curr].push(myPrice);
      if (currP === "center") {
        obj.center.push(tenPrice);
        break;
      } else {
        stack.push({ curr: currP, price: tenPrice });
      }
    }
  }
  return answer;
}
