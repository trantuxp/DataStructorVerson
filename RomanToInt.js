var RomanToInt = function (s) {
  const RomanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  var prev = 0;
  var total = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const current = RomanMap[s[i]];
    if (current < prev) {
      total -= current;
    } else {
      total += current;
    }
    prev = current;
  }
  return total;
};
console.log(RomanToInt("IV"));
