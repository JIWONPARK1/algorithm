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
  const [N, arr] = input;
  const sortedArr = arr
    .split(" ")
    .map((e) => Number(e))
    .sort((a, b) => a - b);

  return sortedArr.reduce((acc, cur, index) => {
    return (acc += cur * (N - index));
  }, 0);
}
