// https://www.acmicpc.net/problem/9663

// N-Queen 문제는 크기가 N × N인 체스판 위에 퀸 N개를 서로 공격할 수 없게 놓는 문제이다.

// N이 주어졌을 때, 퀸을 놓는 방법의 수를 구하는 프로그램을 작성하시오.

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
  const [column] = input.map(Number);
  const graph = Array.from({ length: column }, () =>
    Array.from({ length: column }, () => 0)
  );

  function isPossible(x1, y1) {
    for (let i = 0; i < column; i++) {
      // 같은 가로줄에 위치하고 있다면 리턴
      if (graph[x1][i]) return false;
      if (Math.abs(x1 - x2) === Math.abs(y1 - y2)) return false; //대각선에 위치하고 있음
      if (y1 === y2) return false; // 같은 세로줄에 위치하고있음
    }
    return true;
  }

  function dfs(row) {
    if (row === column) return 1;
    let answer = 0;
    for (let i = 0; i < column; i++) {
      //x줄의 좌표를 하나씩 가능한지 체크
      if (isPossible(row, i)) {
        graph[x][y] = 1;
        answer += dfs(row + 1);
      }
    }
    return answer;
  }

  for (let x = 0; x < column; x++) {
    dfs(x);
  }
}
