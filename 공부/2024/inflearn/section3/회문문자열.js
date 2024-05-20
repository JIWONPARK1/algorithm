function solution(s) {
  const arr = s.toLowerCase().split("");
  let flag = 1;

  for (let i = 0; i < s.length; i++) {
    if (arr[i] !== arr[arr.length - i - 1]) {
      flag = 0;
      break;
    }
  }

  return flag ? "YES" : "NO";
}

let str = "goooG";
console.log(solution(str));
