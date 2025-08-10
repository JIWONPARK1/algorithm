// https://www.acmicpc.net/problem/2751

// N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.

const fs = require("fs");
const path = __dirname + "/../text.txt";

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
  const [n, ...arr] = input.map(Number);
  return arr.sort((a, b) => a - b).join("\n");
}
