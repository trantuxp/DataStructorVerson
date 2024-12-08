var StringCommon = function (s) {
  if (s.length === 0) return "";
  let target = s[0];
  for (let i = 1; i < s.length; i++) {
    while (s[i].indexOf(target) !== 0) {
      target = target.slice(0, -1);
      if (target.length === 0) return "";
    }
  }
  return target;
};

console.log(StringCommon(["flo", "1flower"]));
