// 정수를 저장하는 스택을 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.

// 명령은 총 다섯 가지이다.

// push X: 정수 X를 스택에 넣는 연산이다.
// pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// size: 스택에 들어있는 정수의 개수를 출력한다.
// empty: 스택이 비어있으면 1, 아니면 0을 출력한다.
// top: 스택의 가장 위에 있는 정수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.

// https://www.acmicpc.net/problem/10828

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
  let [_, ...prompt] = input;
  const stack = [];
  let answer = [];

  for (let x of prompt) {
    switch (x) {
      case "pop":
        answer.push(stack.length ? stack.pop() : -1);
        break;
      case "size":
        answer.push(stack.length);
        break;
      case "empty":
        answer.push(stack.length ? 0 : 1);
        break;
      case "top":
        answer.push(stack.length ? stack[stack.length - 1] : -1);
        break;

      default:
        const [_, value] = x.split(" ");
        stack.push(Number(value));
        break;
    }
  }
  return answer.join("\n");
}
