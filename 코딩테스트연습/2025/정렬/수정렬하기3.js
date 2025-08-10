// https://www.acmicpc.net/problem/10989

//N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.
// 첫째 줄에 수의 개수 N(1 ≤ N ≤ 10,000,000)이 주어진다. 둘째 줄부터 N개의 줄에는 수가 주어진다. 이 수는 10,000보다 작거나 같은 자연수이다.

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
  const [n, ...arr] = input.map(Number);
  const max = Math.max(...arr);
  const count = Array(max).fill(0),
    sum = Array(max).fill(0),
    result = Array(n);

  for (let x of arr) {
    count[x - 1]++;
  }

  let acc = 0;
  for (let i = 0; i < max; i++) {
    acc += count[i];
    sum[i] = acc;
  }

  for (let i = n - 1; i > 0; i--) {
    result[sum[arr[i] - 1]] = arr[i];
  }

  for (let i = n - 1; i >= 0; i--) {
    let value = arr[i];
    sum[value - 1] -= 1;
    result[sum[value - 1]] = value;
  }
  console.log(result);
}
