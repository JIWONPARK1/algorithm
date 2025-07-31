// https://school.programmers.co.kr/learn/courses/30/lessons/42584#
// 문제 설명
// 초 단위로 기록된 주식가격이 담긴 배열 prices가 매개변수로 주어질 때, 가격이 떨어지지 않은 기간은 몇 초인지를 return 하도록 solution 함수를 완성하세요.

// 제한사항
// prices의 각 가격은 1 이상 10,000 이하인 자연수입니다.
// prices의 길이는 2 이상 100,000 이하입니다.

// 입출력 예
// prices	return
// [1, 2, 3, 2, 3]	[4, 3, 1, 1, 0]

// 입출력 예 설명
// 1초 시점의 ₩1은 끝까지 가격이 떨어지지 않았습니다.
// 2초 시점의 ₩2은 끝까지 가격이 떨어지지 않았습니다.
// 3초 시점의 ₩3은 1초뒤에 가격이 떨어집니다. 따라서 1초간 가격이 떨어지지 않은 것으로 봅니다.
// 4초 시점의 ₩2은 1초간 가격이 떨어지지 않았습니다.
// 5초 시점의 ₩3은 0초간 가격이 떨어지지 않았습니다.

function solution(prices) {
  const answer = [];
  const stack = [];

  for (let i = 0; i < prices.length; i++) {
    // 스택의 맨위의 인덱스보다 현재 값이 더 작을 경우, 현재 인덱스에서 스택 인덱스 빼기
    let cur = prices[i];
    while (stack.length && prices[stack[stack.length - 1]] > cur) {
      // 다른 가격으로부터 현재인덱스의 가격보다 떨어진 값을 구할 수 있음
      let top = stack.pop();
      answer[top] = i - top;
    }
    stack.push(i);
  }
  //스택안에 남은 값은 한번도 떨어지지 않은 값, 역순으로 구한다.
  for (let i of stack) {
    answer[i] = prices.length - i - 1;
  }
  return answer;
}
