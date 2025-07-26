// 백준 : 단지번호  (https://www.acmicpc.net/problem/2667)

const fs = require("fs");
let inputList = fs.readFileSync("./test.txt").toString().trim().split("\n");

const N = inputList.shift();
let count = 0;

const countList = [];
const graph = inputList.map((e) => e.split("").map((ele) => Number(ele)));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

function dfs(y, x) {
  graph[y][x] = 0;
  count++;
  for (let i = 0; i < 4; i++) {
    const nx = dx[i] + x;
    const ny = dy[i] + y;
    if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue;
    if (!graph[ny][nx]) continue;
    graph[ny][nx] = 0;
    dfs(ny, nx);
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (graph[i][j]) {
      count = 0;
      dfs(i, j);
      countList.push(count);
    }
  }
}

console.log(countList.length);
countList.sort((a, b) => a - b).map((e) => console.log(e));
