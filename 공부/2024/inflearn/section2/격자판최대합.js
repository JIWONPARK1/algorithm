/**
 * 5*5 격자판에 아래롸 같이 숫자가 적혀있습니다.
 *  N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합 니다.
 */

function solution(arr) {
  const n = arr[0].length;

  let max = 0,
    sum1 = 0,
    sum2 = 0,
    dia1 = 0,
    dia2 = 0;
  // 행.열 최댓값 구하기
  for (let x = 0; x < n; x++) {
    sum1 = 0;
    sum2 = 0;
    for (let y = 0; y < n; y++) {
      sum1 += arr[x][y];
      sum2 = +arr[y][x];
    }
    //대각선
    dia1 += arr[x][x];
    dia2 += arr[x][n - x - 1];
    max = Math.max(max, sum1, sum2, dia1, dia2);
  }
  return max;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
