// 4개의 기호 ‘(’, ‘)’, ‘[’, ‘]’를 이용해서 만들어지는 괄호열 중에서 올바른 괄호열이란 다음과 같이 정의된다.

// 한 쌍의 괄호로만 이루어진 ‘()’와 ‘[]’는 올바른 괄호열이다.
// 만일 X가 올바른 괄호열이면 ‘(X)’이나 ‘[X]’도 모두 올바른 괄호열이 된다.
// X와 Y 모두 올바른 괄호열이라면 이들을 결합한 XY도 올바른 괄호열이 된다.
// 예를 들어 ‘(()[[]])’나 ‘(())[][]’ 는 올바른 괄호열이지만 ‘([)]’ 나 ‘(()()[]’ 은 모두 올바른 괄호열이 아니다.
// 우리는 어떤 올바른 괄호열 X에 대하여 그 괄호열의 값(괄호값)을 아래와 같이 정의하고 값(X)로 표시한다.

// ‘()’ 인 괄호열의 값은 2이다.
// ‘[]’ 인 괄호열의 값은 3이다.
// ‘(X)’ 의 괄호값은 2×값(X) 으로 계산된다.
// ‘[X]’ 의 괄호값은 3×값(X) 으로 계산된다.
// 올바른 괄호열 X와 Y가 결합된 XY의 괄호값은 값(XY)= 값(X)+값(Y) 로 계산된다.
// 예를 들어 ‘(()[[]])([])’ 의 괄호값을 구해보자.
// ‘()[[]]’ 의 괄호값이 2 + 3×3=11 이므로 ‘(()[[]])’의 괄호값은 2×11=22 이다.
// 그리고 ‘([])’의 값은 2×3=6 이므로 전체 괄호열의 값은 22 + 6 = 28 이다.

// 여러분이 풀어야 할 문제는 주어진 괄호열을 읽고 그 괄호값을 앞에서 정의한대로 계산하여 출력하는 것이다.

// https://www.acmicpc.net/problem/2504

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
  const [text] = input;
  const stack = [];
  let answer = 0,
    temp = 1;

  for (let i = 0; i < text.length; i++) {
    switch (text[i]) {
      case "(":
        stack.push(text[i]);
        temp *= 2;
        break;
      case "[":
        stack.push(text[i]);
        temp *= 3;
        break;

      case ")":
        if (!stack.length || stack[stack.length - 1] === "[") {
          answer = 0;
          break;
        }
        if (text[i - 1] === "(") {
          answer += temp;
        }
        stack.pop();
        temp /= 2;
        break;
      case "]":
        if (!stack.length || stack[stack.length - 1] === "(") {
          answer = 0;
          break;
        }
        if (text[i - 1] === "[") {
          answer += temp;
        }
        stack.pop();
        temp /= 3;
        break;

      default:
        break;
    }
  }

  return stack.length ? 0 : answer;
}
