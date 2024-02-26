function solution(n) {
    return Math.sqrt(n) % 1 ? -1 : Math.pow(Math.sqrt(n) + 1,2);
}
