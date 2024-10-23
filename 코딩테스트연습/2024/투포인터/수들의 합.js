// https://www.acmicpc.net/problem/2003
// N개의 수로 된 수열 A[1], A[2], …, A[N] 이 있다.
// 이 수열의 i번째 수부터 j번째 수까지의 합 A[i] + A[i+1] + … + A[j-1] + A[j]가 M이 되는 경우의 수를 구하는 프로그램을 작성하시오.

const fs = require("fs");
const path = __dirname + "/text.txt";

const readline = require("readline").createInterface({
  // input: process.stdin,
  input: fs.createReadStream(path),
  output: process.stdout,
});

let input = [];

readline
  .on("line", function (line) {
    input.push(line); //
  })
  .on("close", function () {
    console.log(solution(input)); // 문제 풀이 함수 호출
    process.exit();
  });

// 문제 풀이
function solution(input) {
  let answer = 0;
  let start = 0;
  let end = 0;

  const [n, a] = input;
  const [N, M] = n.split(" ").map((e) => Number(e));
  const arr = a.split(" ").map((e) => Number(e));
  let total = arr[0];

  while (end < N) {
    // total이 M보다 클 경우 start++ , total - arr[start-1]
    if (total > M) {
      total -= arr[start++];
    }
    // total이 M보다 작을 경우 end++ , total + arr[end +1]
    if (total < M) {
      total += arr[++end];
    }
    // total이 M과 같을 경우 answer++ ,  total = 0
    if (total === M) {
      answer++;
      total += arr[++end];
    }
  }

  return answer;
}
