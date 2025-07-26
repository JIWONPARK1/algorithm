function solution(s) {
  const arr = s.toLowerCase().split("");
  const n = arr.length;
  let answer = "YES";

  for (let i = 0; i < n / 2; i++) {
    if (arr[i] !== arr[n - i - 1]) {
      return "NO";
    }
  }

  return answer;
}

let str = "goooG";
console.log(solution(str));
