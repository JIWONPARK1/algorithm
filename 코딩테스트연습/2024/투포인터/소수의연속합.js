// 하나 이상의 연속된 소수의 합으로 나타낼 수 있는 자연수들이 있다.
// 몇 가지 자연수의 예를 들어 보면 다음과 같다.

// 3 : 3 (한 가지)
// 41 : 2+3+5+7+11+13 = 11+13+17 = 41 (세 가지)
// 53 : 5+7+11+13+17 = 53 (두 가지)

// 하지만 연속된 소수의 합으로 나타낼 수 없는 자연수들도 있는데, 20이 그 예이다.
// 7+13을 계산하면 20이 되기는 하나 7과 13이 연속이 아니기에 적합한 표현이 아니다.
// 또한 한 소수는 반드시 한 번만 덧셈에 사용될 수 있기 때문에, 3+5+5+7과 같은 표현도 적합하지 않다.

// 자연수가 주어졌을 때, 이 자연수를 연속된 소수의 합으로 나타낼 수 있는 경우의 수를 구하는 프로그램을 작성하시오.

// (https://www.acmicpc.net/problem/1644)

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
    console.log(solution(input)); // 문제 풀이 함수 호출
    process.exit();
  });

function isPrime(num) {
  if (num === 2) {
    return true;
  }

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// 문제 풀이
function solution(input) {
  let answer = 0;
  let i = 1;
  const arr = [];
  // const M = Number(input[0]);
  const M = 0;

  if (M === 1 || M === 0) return 0;

  while (i < M) {
    if (isPrime(i)) arr.push(i);
    i++;
  }

  if (isPrime(M)) answer++;

  for (let i = 0; i < arr.length; i++) {
    let total = arr[i];
    let end = i + 1;
    while (arr[end]) {
      if (total > M) {
        break;
      } else if (total < M) {
        total += arr[end];
        end++;
      } else {
        answer++;
        break;
      }
    }
  }

  return answer;
}
