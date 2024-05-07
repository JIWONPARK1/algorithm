const fs = require("fs");
const filePath = "/dev/stdin";

let [T, ...inputs] = fs.readFileSync(filePath).toString().trim().split("\n");

let graph,
  visited,
  M,
  N,
  K,
  count,
  p = 0;

for (let i = 0; i < inputs.length; i++) {
  inputs[i] = inputs[i].split(" ").map((e) => +e);
}

function dfs(x, y) {
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  visited[x][y] = true;

  for (let i = 0; i < 4; i++) {
    const nx = dx[i] + x;
    const ny = dy[i] + y;
    if (nx >= 0 && ny >= 0 && nx < M && ny < N) {
      if (!visited[nx][ny] && graph[nx][ny]) {
        dfs(nx, ny);
      }
    }
  }
}

for (let i = 0; i < T; i++) {
  [M, N, K] = inputs[p];

  graph = Array.from(Array(M), () => new Array(N).fill(false));
  visited = Array.from(Array(M), () => new Array(N).fill(false));

  count = 0;
  let temp = p;

  for (p = p + 1; p <= K + temp; p++) {
    let [a, b] = inputs[p];
    graph[a][b] = true;
  }

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j] && graph[i][j]) {
        dfs(i, j);
        count++;
      }
    }
  }

  console.log(count);
}
