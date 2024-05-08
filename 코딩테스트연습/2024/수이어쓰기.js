/**
 * 1부터 N까지의 수를 이어서 쓰면 다음과 같이 새로운 하나의 수를 얻을 수 있다.
 *  1234567891011121314151617181920212223...
 *  이렇게 만들어진 새로운 수에서, 앞에서 k번째 자리 숫자가 어떤 숫자인지 구하는 프로그램을 작성하시오.
 */

// 1부터 9까지는 한자리 > 9개
// 10부터 99까지는 두자리 > 180개
// 100부터 999까지는 세자리

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

// 문제 풀이
function solution(input) {
  let [n, k] = input[0].split(" ");
  // n까지 나열할 경우 몇자리 까지 오는지 체크한다.

  let answer = 0,
    digit = 1,
    nine = 9;

  while (k > digit * nine) {
    k = k - digit * nine;
    answer = answer + nine;
    digit += 1;
    nine = nine * 10;
  }

  answer = answer + 1 + (k - 1);
  console.log(k, answer, digit, nine);

  // n으로 나열한 글자수보다 구하려는 인덱스가 작을 경우
  if (answer <= n) {
    return String(answer[(k - 1) % digit]);
  }

  // n으로 나열한 글자수보다 구하려는 인덱스가 클 경우 -1 return.
  return -1;
}
