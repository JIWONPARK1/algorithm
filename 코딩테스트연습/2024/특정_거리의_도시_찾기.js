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
    console.log(solution(input)); // 문제 풀이 함수 호출
    process.exit();
  });

// 문제 풀이
function solution(input) {
  // 답변 출력
  const [N, M, K, X] = input
    .splice(0, 1)[0]
    .split(" ")
    .map((e) => Number(e));

  const distance = Array(N + 1).fill(-1);
  const graph = Array(N + 1)
    .fill()
    .map((e) => []);
  let answer = [];
  distance[X] = 0;

  input.map((e) => {
    const [x, y] = e.split(" ");
    graph[x] ? graph[x].push(Number(y)) : (graph[x] = [Number(y)]);
  });

  let queue = [X];

  while (queue.length) {
    let nq = [];
    for (let i = 0; i < queue.length; i++) {
      const cur = queue[i];
      for (let next of graph[cur]) {
        if (distance[next] !== -1) continue;
        distance[next] = distance[cur] + 1;
        nq.push(next);
      }
    }
    queue = nq;
  }
  distance.forEach((e, i) => {
    if (e === K) answer.push(i);
  });
  return answer.length ? answer.join("\n") : -1;
}
