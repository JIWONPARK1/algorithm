// https://www.acmicpc.net/problem/1181

// 알파벳 소문자로 이루어진 N개의 단어가 들어오면 아래와 같은 조건에 따라 정렬하는 프로그램을 작성하시오.

// 길이가 짧은 것부터
// 길이가 같으면 사전 순으로
// 단, 중복된 단어는 하나만 남기고 제거해야 한다.

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
  const [_, ...arr] = input;
  const array = [...new Set(arr)];

  array.sort((a, b) => {
    if (a.length === b.length) return a.localeCompare(b);
    return a.length > b.length ? 1 : -1;
  });

  return array.join("\n");
}
