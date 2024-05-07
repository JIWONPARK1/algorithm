function solution(a, b, c) {
    let answer = "YES", max;
    let tot = a + b + c;
    max = Math.max(a, b, c)
    if (max >= tot - max) answer = "NO"
    return answer
}

console.log(solution(13, 17, 33));