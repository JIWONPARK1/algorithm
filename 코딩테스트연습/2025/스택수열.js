// 스택 (stack)은 기본적인 자료구조 중 하나로, 컴퓨터 프로그램을 작성할 때 자주 이용되는 개념이다.
// 스택은 자료를 넣는 (push) 입구와 자료를 뽑는 (pop) 입구가 같아 제일 나중에 들어간 자료가 제일 먼저 나오는 (LIFO, Last in First out) 특성을 가지고 있다.

// 1부터 n까지의 수를 스택에 넣었다가 뽑아 늘어놓음으로써, 하나의 수열을 만들 수 있다.
// 이때, 스택에 push하는 순서는 반드시 오름차순을 지키도록 한다고 하자.
// 임의의 수열이 주어졌을 때 스택을 이용해 그 수열을 만들 수 있는지 없는지, 있다면 어떤 순서로 push와 pop 연산을 수행해야 하는지를 알아낼 수 있다.
// 이를 계산하는 프로그램을 작성하라.
// https://www.acmicpc.net/problem/1874

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
  const [n, ...numbers] = input;
  const stack = [],
    answer = [];
  for (let i = 1; i <= n; i++) {
    if (i <= numbers[0]) {
      stack.push(i);
      answer.push("+");
      while (true) {
        console.log(numbers, stack);
        if (numbers[0] === stack[stack.length - 1]) {
          stack.pop();
          numbers.pop();
          answer.push("-");
        }
        break;
      }
    } else if (i === numbers[0]) {
    }
  }
  console.log("answer", answer);
  return answer;
}
