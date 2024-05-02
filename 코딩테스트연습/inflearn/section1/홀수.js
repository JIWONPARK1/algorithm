
/**
 * Q. 7개의 자연수가 주어질 때, 이들 중 홀수인 자연수를 모두 골라 그 합을 수하고, 고른 홀수들 중 최솟값을 구하는 프로그램을 작성하세요.
 */

function solution(arr) {
    let answer = [0];
    let total = 0;
    for (let i of arr) {
        if (i % 2 === 1) {
            answer = [answer[0] + i, answer[1] > i || !answer[1] ? i : answer[1]]
        }
    }
    return answer
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));