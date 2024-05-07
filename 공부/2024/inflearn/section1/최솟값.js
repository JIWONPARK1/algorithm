
/**
 * Q. 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.
 */

function solution(arr) {
    let answer
    answer = Math.min(...arr)
    return answer

}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));