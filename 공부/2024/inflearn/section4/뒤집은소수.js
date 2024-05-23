/**
 * N개의 자연수가 입력되면 각 자연수를 뒤집은 후 그 뒤집은 수가 소수이면 그 소수를 출력하 는 프로그램을 작성하세요.
 * 예를 들어 32를 뒤집으면 23이고, 23은 소수이다.
 * 그러면 23을 출 력한다.
 * 단 910를 뒤집으면 19로 숫자화 해야 한다.
 * 첫 자리부터의 연속된 0은 무시한다.
 *
 * 정답 : 23 2 73 2 3
 * */

function check(num) {
  if (num === 1) return false;
  let half = Math.floor(Math.sqrt(num));
  while (half > 1) {
    if (num % half === 0) return false;
    half--;
  }
  return true;
}

function solution(arr) {
  let answer = [];
  for (let x of arr) {
    const num = Number(x.toString().split("").reverse().join(""));
    if (check(num)) answer.push(num);
  }
  return answer.join(" ");
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
