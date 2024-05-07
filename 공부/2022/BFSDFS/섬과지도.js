const fs = require("fs");
const filePath = "./test.txt";
let inputList = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map((children) => Number(children)));

let map;
let result = [];
let visited;
let arrayList = [];
let i = 0;

const dx = [0, 1, 1, 1, 0, -1, -1, -1];
const dy = [1, 1, 0, -1, -1, -1, 0, 1];

function BFS(i, j, w, h) {
  const queue = [[i, j]];
  let count = 0;
  while (queue.length) {
    const [x, y] = queue.shift();
    if (!visited[x][y]) {
      if (map[x][y]) count++;
      visited[x][y] = true;
      for (let i = 0; i < 8; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (0 > ny || 0 > nx || nx >= w || ny >= h) continue;
        if (visited[nx][ny]) continue;
        if (!map[nx][ny]) continue;
        queue.push([nx, ny]);
      }
    }
  }
  return count;
}

while (true) {
  const [w, h] = inputList[i];
  arrayList.push(inputList.slice(i + 1, i + 1 + h));
  i += h + 1;
  if (i === inputList.length - 1) break;
}

arrayList.map((array, index) => {
  const w = array.length;
  const h = array[0].length;
  let answer = 0;
  map = array;
  visited = map.map((ele) => ele.map((e) => false));

  for (let x = 0; x < w; x++) {
    for (let y = 0; y < h; y++) {
      if (map[x][y] === 1) {
        if (visited[x][y]) continue;
        let count = BFS(x, y, w, h);
        if (count) answer++;
      }
    }
  }

  result.push(answer);
});

console.log(result.join("\n"));

function BFS(start, v, visited, w, h) {
  let count = 0;
  const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const queue = [start];
  visited[start[0]][start[1]] = true;

  while (queue.length) {
    let [curX, curY] = queue.shift();
    if (v[curX][curY]) count++;
    for (let i = 0; i < 4; i++) {
      const nx = dir[i][0] + curX;
      const ny = dir[i][1] + curY;

      if (0 > nx || 0 > ny || nx > w || ny > h) continue;

      if (!visited[nx][ny] && v[nx][ny] === 1) {
        queue.push([nx, ny]);
        visited[nx][ny] = true;
      }
    }
  }
  return count;
}

function solution(v) {
  let answer = [0, 0];
  const w = v[0].length;
  const h = v.length;
  let visited = Array.from(Array(h), () => Array(w).fill(false));

  for (let i = 0; i < w; i++) {
    for (let j = 0; j < h; j++) {
      if (v[i][j] === 1 && !visited[i][j]) {
        const count = BFS([i, j], v, visited, w, h);
        if (count) answer[0]++;
        if (answer[1] < count) answer[1] = count;
      }
    }
  }
  return answer;
}
