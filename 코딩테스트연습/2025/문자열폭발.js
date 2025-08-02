// 상근이는 문자열에 폭발 문자열을 심어 놓았다.
// 폭발 문자열이 폭발하면 그 문자는 문자열에서 사라지며, 남은 문자열은 합쳐지게 된다.

// 폭발은 다음과 같은 과정으로 진행된다.

// 문자열이 폭발 문자열을 포함하고 있는 경우에, 모든 폭발 문자열이 폭발하게 된다.
// 남은 문자열을 순서대로 이어 붙여 새로운 문자열을 만든다.
// 새로 생긴 문자열에 폭발 문자열이 포함되어 있을 수도 있다.
// 폭발은 폭발 문자열이 문자열에 없을 때까지 계속된다.
// 상근이는 모든 폭발이 끝난 후에 어떤 문자열이 남는지 구해보려고 한다.
// 남아있는 문자가 없는 경우가 있다. 이때는 "FRULA"를 출력한다.

// 폭발 문자열은 같은 문자를 두 개 이상 포함하지 않는다.
// https://www.acmicpc.net/problem/9935

const fs = require("fs");
const path = __dirname + "/text.txt";

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
  let [text, bomb] = input;
  text = text.split("");
  let stack = [];
  const bombLastChar = bomb[bomb.length - 1],
    bombLength = bomb.length;

  for (let x of text) {
    stack.push(x);
    if (bombLastChar === x && stack.length >= bombLength) {
      let isMatch = true;
      for (let i = bombLength; i > 0; i--) {
        if (bomb[bombLength - i] !== stack[stack.length - i]) {
          isMatch = false;
          break;
        }
      }
      if (isMatch) {
        for (let i = 0; i < bombLength; i++) stack.pop();
      }
    }
  }

  return stack.length ? stack.join("") : "FRULA";
}
