// https://www.acmicpc.net/problem/1978

// 주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력하는 프로그램을 작성하시오.

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

function factorial(num) {
  return num >= 1 ? num * factorial(num - 1) : 1;
}

function solution() {
  return factorial(Number(input[0]));
}
