const fs = require("fs");
const filePath = "./test.txt";
let inputList = fs.readFileSync(filePath).toString().trim().split("\n");

const result = [];
const hashMap = new Map();
const [N, M] = inputList
  .shift()
  .split(" ")
  .map((e) => Number(e));

for (let i = 0; i < N; i++) {
  hashMap.set(inputList[i], 1);
}

for (let i = N; i < M + N; i++) {
  if (hashMap.get(inputList[i])) result.push(inputList[i]);
}

console.log(result.length);
console.log(result.sort().join("\n"));
