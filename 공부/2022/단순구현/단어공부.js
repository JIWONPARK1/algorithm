// 백준 : 단어공부  (https://www.acmicpc.net/problem/1157)

const fs = require("fs");
let inputList = fs.readFileSync("./test.txt").toString().trim().split("\n")[0];

const text = inputList.toUpperCase();
const AlpabetArr = Array.from(Array(26), () => 0);

let maxCount = 0;
let maxStr = "";

for (let i = 0; i < text.length; i++) {
  const idx = text.charCodeAt(i) - "A".charCodeAt(0);
  AlpabetArr[idx] = AlpabetArr[idx] + 1;

  if (maxCount < AlpabetArr[idx]) {
    maxCount = AlpabetArr[idx];
    maxStr = text[i];
  } else if (maxCount === AlpabetArr[idx]) {
    maxStr = "?";
  }
}
console.log(maxStr);
