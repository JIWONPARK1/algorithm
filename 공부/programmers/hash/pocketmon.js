// 백준 : 나는야 포켓몬 마스터 이다솜  (https://www.acmicpc.net/problem/1620)

const fs = require("fs");
let inputList = fs.readFileSync("./test.txt").toString().trim().split("\n");

const [M, N] = inputList.shift().split(" ");

const hashMap = new Map();
const numberHashMap = new Map();

for (let i = 0; i < M; i++) {
  hashMap.set(inputList[i], i + 1);
  numberHashMap.set(i + 1, inputList[i]);
}

const arr = inputList.slice(M);

for (let i = 0; i < N; i++) {
  if (!isNaN(arr[i])) {
    console.log(numberHashMap.get(Number(arr[i])));
  } else {
    console.log(hashMap.get(arr[i]));
  }
}
