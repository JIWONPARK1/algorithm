/**
 * Q. 자동자 10부제는 자동자번호의 일의 자리 숫자와 날짜의 일의자리 숫자가 일치하면 해당 자동차의 운행을 금지하는 것이다.
 * 날짜의 일의 자리 숫자가 주어지고 7대의 자동차번호 끝 두자리 숫자가 주어졌을때,
 * 위반하는 자동차의 대수를 출력하는 프로그램을 작성하세요.
 */

function solution(day, arr) {
  let answer = 0;
  for (let i of arr) {
    if (i % 10 === day) answer++;
  }
  return answer;
}

arr = [12, 20, 54, 30, 87, 91, 30];
console.log(solution(0, arr));
