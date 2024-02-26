const readline = require("readline").createInterface({
  input: process.stdin, 
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

  const stack = [];
  let txt = text;
  [...text].map((e) => {
    stack.push(e);
    if (stack.slice(-boomText.length).join("") === boomText) {
      stack.splice(-boomText.length);
    }
  });

  console.log(stack.length ? stack.join("") : "FRULA");
}
