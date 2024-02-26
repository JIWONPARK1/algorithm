// 백준 : 냅색  (https://www.acmicpc.net/problem/1450)

const fs = require("fs");
let inputList = fs.readFileSync("./test.txt").toString().trim().split("\n");

const arr = inputList.map((e) => e.split(" ").map((ele) => Number(ele)));
const [N, C] = arr.shift();

const weight1 = [];
const weight2 = [];

let sum1 = [];
let sum2 = [];

let answer = 0;

function binerySearch(sum, target) {
  let left = 0;
  let right = sum.length - 1;
  let mid;
  let answer = -1;

  while (left <= right) {
    mid = Math.ceil((left + right) / 2);
    if (sum[mid] <= target) {
      answer = mid;
      left = mid + 1;
    } else right = mid - 1;
  }
  return answer;
}

function dfs(idx, sum, weight, answer) {
  if (sum > C) return;
  if (idx === weight.length) {
    answer.push(sum);
    return;
  }
  dfs(idx + 1, sum + weight[idx], weight, answer);
  dfs(idx + 1, sum, weight, answer);
}

for (let i = 0; i < N; i++) {
  if (i < N / 2) weight1.push(arr[0][i]);
  else weight2.push(arr[0][i]);
}

dfs(0, 0, weight1, sum1);
dfs(0, 0, weight2, sum2);

sum2 = sum2.sort((a, b) => a - b);

for (let i = 0; i < sum1.length; i++) {
  let searchWord = C - sum1[i];
  answer += binerySearch(sum2, searchWord) + 1;
}

console.log(answer);
