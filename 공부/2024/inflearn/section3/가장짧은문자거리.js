/**
 * 한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출력하는 프로그램을 작성하세요.
 */

function solution(s, t) {
  const arr = s.split(t);
  arr.pop();
  let answer = "";

  for (let e of arr) {
    const n = e.length;
    for (let i = 0; i < n; i++) {
      let index = e.indexOf(e[i]);
      answer += Math.min(index, n - 1 - index) + 1;
    }
    answer += 0;
  }
  return answer;
}

function solution2(s, t) {
  const n = s.length;
  let answer = "";
  let answer1 = "";

  for (let i = 0; i < n; i++) {
    if (s[i] === t) answer1 += 0;
    else if (answer1[i - 1]) {
      answer1 += Number(answer1[i - 1]) + 1;
    } else {
      answer1 += 1;
    }
  }

  for (let i = n - 1; i >= 0; i--) {
    if (Number(answer[0]) < answer1[i]) {
      answer = Number(answer[0]) + 1 + answer;
    } else {
      answer = answer1[i] + answer;
    }
  }
  return answer;
}

function masterSolution(s, t) {
  let answer = [];
  let p = 10000;
  for (let str of s) {
    if (str === t) {
      p = 0;
      answer.push(0);
    } else {
      p++;
      answer.push(p);
    }
  }
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) {
      p = 0;
    } else {
      p++;
      if (answer[i] > p) {
        answer[i] = p;
      }
    }
  }

  console.log(answer.join(""));
}

let str = "teachermode";

console.log(masterSolution(str, "e"));
