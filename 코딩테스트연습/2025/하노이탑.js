// 세 개의 장대가 있고 첫 번째 장대에는 반경이 서로 다른 n개의 원판이 쌓여 있다.
// 각 원판은 반경이 큰 순서대로 쌓여있다.
// 이제 수도승들이 다음 규칙에 따라 첫 번째 장대에서 세 번째 장대로 옮기려 한다.

// 한 번에 한 개의 원판만을 다른 탑으로 옮길 수 있다.
// 쌓아 놓은 원판은 항상 위의 것이 아래의 것보다 작아야 한다.
// 이 작업을 수행하는데 필요한 이동 순서를 출력하는 프로그램을 작성하라.
// 단, 이동 횟수는 최소가 되어야 한다.

// https://www.acmicpc.net/problem/1914

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
  const [num] = input;
  let sum = 0;
  for (let i = 0, two = 1; i < num; i++) {
    sum += two;
    two *= 2;
  }

  // 갯수가 짝수냐 홀수냐에 따라서 목표기둥에 놓을지 다른기둥에 놓을지 정해야한다.
  function hanoi(n, from, to, other) {
    if (n === 0) return;
    hanoi(n - 1, from, other, to);
    console.log(from, to);
    hanoi(n - 1, other, to, from);
  }
  console.log(sum);
  hanoi(Number(num), 1, 3, 2);
}
