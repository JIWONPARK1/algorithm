/**
 * 지도 정보가 N*N 격자판에 주어집니다.
 * 각 격자에는 그 지역의 높이가 쓰여있습니다.
 * 각 격자 판의 숫자 중 자신의 상하좌우 숫자보다 큰 숫자는 봉우리 지역입니다
 * 봉우리 지역이 몇 개 있는 지 알아내는 프로그램을 작성하세요.
 * 격자의 가장자리는 0으로 초기화 되었다고 가정한다.
 * 만약 N=5 이고, 격자판의 숫자가 다음과 같다면 봉우리의 개수는 10개입니다.
 */

function solution(arr) {
  const dx = [-1, 1, 0, 0]; // 행
  const dy = [0, 0, -1, 1]; // 열

  const n = arr.length;
  let answer = 0;

  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      let cur = arr[x][y];
      let flag = 1;
      // 상하좌우의 값을 구한다
      for (let i = 0; i < dx.length; i++) {
        const nx = dx[i] + x;
        const ny = dy[i] + y;
        if (nx < 0 || ny < 0) continue; // 상하 좌우의 인덱스가 0보다 작은지 체크
        if (nx > n - 1 || ny > n - 1) continue; // 상하 좌우 인덱스가 전체 갯수보다 큰지 체크
        // if (arr[nx][ny]) ; // 값이 없는지 한번더 체크
        if (!arr[nx][ny]) continue;
        if (cur < arr[nx][ny]) {
          flag = 0;
          break;
        } //값이 있다면 최댓값을 계속 갱신
      }
      if (flag) answer++;
    }
  }

  return answer;
}
let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
