function solution(t, p) {
  let answer = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    const str = Number(t.slice(i, i + p.length));
    if (str <= Number(p)) answer++;
  }
  return answer;
}
