function solution(n) {
  if (n === 0) return;
  solution(n - 1);
  console.log(n);
}

solution(3);
