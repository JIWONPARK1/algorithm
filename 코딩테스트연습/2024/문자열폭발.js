const fs = require("fs"); // 제출시 삭제
const path = "./testCase.txt"; // 제출시 삭제

const readline = require("readline").createInterface({
  // input: process.stdin, // 제출시 활성화
  input: fs.createReadStream(path), // 제출시 삭제
  output: process.stdout,
});

let input = [];

readline
  .on("line", function (line) {
    input.push(line); //
  })
  .on("close", function () {
    solution(input); // 문제 풀이 함수 호출
    process.exit();
  });

// 문제 풀이
function solution(input) {
  // 답변 출력
  const [text, boomText] = input;

  let txt = text;
  while (txt.includes(boomText)) {
    txt = txt.replace(boomText, "");
  }

  console.log("----\n", txt ? txt : "FRULA");
}
