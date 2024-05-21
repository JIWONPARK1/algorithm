/**
 * 한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출력하는 프로그램을 작성하세요.
 */

function solution(s, t) {
  const arr = s.split(t);
  let answer = "";
  for (let e of arr) {
    for (let i = 0; i < e.length; i++) {
      console.log(i, e[i]);
    }
  }
  return answer;
}

let str = "teachermode";
console.log(solution(str, "e"));
