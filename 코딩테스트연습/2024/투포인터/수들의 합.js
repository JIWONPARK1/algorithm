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
  let answer = 0;
  const [n, arr] = input;
  const [N, M] = n.split(" ").map((e) => Number(e));
  const numberArr = arr.split(" ").map((e) => Number(e));

  for (i = 0; i < N - 1; i++) {
    for (j = i; j < N - 1; j++) {
      console.log(numberArr[i] + numberArr[j], M);
      if (numberArr[i] + numberArr[j] === M) {
        answer++;
      }
    }
  }

  return answer;
}
