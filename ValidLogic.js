var ValidLogic = function (str) {
  const stack = [];
  let map = {
    "}": "{",
    ")": "(",
    "]": "[",
  };
  for (char of str) {
    if (char in map) {
      const firstS = stack.length > 0 ? stack.pop() : "#";
      if (firstS !== map[char]) return false;
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
};
console.log(ValidLogic("{}[]"));
