// https://www.acmicpc.net/problem/2588

// (세 자리 수) × (세 자리 수)는 다음과 같은 과정을 통하여 이루어진다.
// (1)과 (2)위치에 들어갈 세 자리 자연수가 주어질 때 (3), (4), (5), (6)위치에 들어갈 값을 구하는 프로그램을 작성하시오.
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
    console.log(solution()); // 문제 풀이 함수 호출
    process.exit();
  });

function solution() {
  let answer = [];
  const [first, last] = input;

  for (let i = last.length - 1; i >= 0; i--) {
    answer.push(Number(first) * last[i]);
  }
  answer.push(first * last);
  return answer.join("\n");
}
