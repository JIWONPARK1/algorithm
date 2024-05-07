// 백준 : 패션왕 신해빈  (https://www.acmicpc.net/problem/9375)

const fs = require("fs");
let inputList = fs.readFileSync("./test.txt").toString().trim().split("\n");

const testLength = inputList.shift();
let N = 0,
  p = 1,
  arr = [],
  answer;

for (let i = 0; i < testLength; i++) {
  N = inputList[p - 1];
  arr = inputList.slice(p, Number(N) + p).map((e) => e.split(" "));
  p += Number(N) + 1;
  answer = 1;
  const hashMap = new Map();

  for (let i = 0; i < N; i++) {
    hashMap.set(arr[i][1], (hashMap.get(arr[i][1]) || 0) + 1);
  }
  Array.from(hashMap.values()).map((e) => {
    answer *= e + 1;
  });

  console.log(answer - 1);
}
