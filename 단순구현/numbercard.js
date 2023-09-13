const fs = require("fs");
const filePath = "./test.txt";
let inputList = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, a, M, resultArr] = inputList;
const hashMap = new Map();
const arr = a.split(" ");

for (let i = 0; i < N; i++) {
  hashMap.set(arr[i], (hashMap.get(arr[i]) || 0) + 1);
}

const result = resultArr
  .split(" ")
  .map((e) => hashMap.get(e) || 0)
  .join(" ");

console.log(result);
