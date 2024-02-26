// 백준 : 바이러스  (https://www.acmicpc.net/problem/2606)

const fs = require("fs");
let inputList = fs.readFileSync("./test.txt").toString().trim().split("\n");

const [N, node] = inputList.splice(0, 2).map((e) => Number(e));
const arr = inputList.map((e) => e.split(" ").map((e) => Number(e)));
const visited = Array(N + 1).fill(false);
let answer = 0;

const graph = Array(N + 1)
  .fill(0)
  .map((e) =>
    Array(N + 1)
      .fill(0)
      .map((e) => 0)
  );

arr.map(([a, b]) => {
  graph[a][b] = 1;
  graph[b][a] = 1;
});

function dfs(index) {
  visited[index] = true;
  answer++;
  for (let i = 0; i <= N; i++) {
    if (!visited[i] && graph[index][i]) {
      dfs(i);
    }
  }
}

dfs(1);

console.log(answer - 1);
