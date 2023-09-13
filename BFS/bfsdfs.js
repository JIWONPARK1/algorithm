const fs = require("fs");
const filePath = "./test.txt";
let inputList = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m, v] = inputList.shift().split(" ");
const arrLength = Number(n);
const dfsResult = [];
const bfsResult = [];

let visited = Array(arrLength + 1).fill(false);
const graph = visited.map((e) =>
  Array(arrLength + 1)
    .fill(0)
    .map((e) => 0)
);

for (i of inputList) {
  const [a, b] = i.split(" ");
  graph[a][b] = 1;
  graph[b][a] = 1;
}

dfs(v);
bfs();

function dfs(index) {
  visited[index] = true;
  dfsResult.push(index);
  for (next in Array(arrLength + 1).fill(1)) {
    if (!visited[next] && graph[index][next]) {
      dfs(next);
    }
  }
}

function bfs() {
  visited = Array(arrLength + 1).fill(false);
  const queue = [v];
  while (queue.length) {
    const cur = queue.shift();
    visited[v] = true;
    bfsResult.push(cur);
    for (let next = 0; next < arrLength + 1; next++) {
      if (!visited[next] && graph[cur][next]) {
        visited[next] = true;
        queue.push(next);
      }
    }
  }
}

console.log(`${dfsResult.join(" ")}
${bfsResult.join(" ")}`);
