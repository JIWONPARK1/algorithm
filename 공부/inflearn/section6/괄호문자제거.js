// 입력된 문자열에서 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하는 프로그램을 작성하세요.

// ▣ 입력설명
// 첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.

// ▣ 출력설명
// 남은 문자만 출력한다.

// ▣ 입력예제 1 (A(BC)D)EF(G(H)(IJ)K)LM(N)
// ▣ 출력예제 1 EFLM

function solution(s) {
  // for문을 통해 하나씩 탐색한다
  stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ")") stack.push(s[i]);
    else {
      // ')'가 나오면 이전의 '('가 나올때까지 뺀다
      while (stack.pop() !== "(");
    }
  }
  return stack.join("");
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
