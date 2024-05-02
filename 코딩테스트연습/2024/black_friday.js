const fs = require("fs");
const path = __dirname + "/text.txt";

const readline = require("readline").createInterface({
  // input: process.stdin,
  input: fs.createReadStream(path),
  output: process.stdout,
});

let input = [];

readline
  .on("line", function (line) {
    input.push(line); //
  })
  .on("close", function () {
    console.log(solution(input));
    process.exit();
  });

function solution(input) {
  const [N, C] = input[0].split(" ").map((e) => Number(e));
  // 1. 입력받은 데이터를 오름차순으로 정렬한다.
  const arr = input[1]
    .split(" ")
    .map((e) => Number(e))
    .sort((a, b) => a - b);
  // 2. 처음에 c가 data(입력받은 리스트)에 있는지 체크한다.

  let mid, i, j, total, diff;

  function binarySearch(left, right, diff) {
    while (left <= right) {
      mid = left + right;
      if (arr[mid] === diff) return 1;
      if (arr[mid] > diff) right = mid - 1;
      left = mid + 1;
    }
    return 0;
  }

  function check(n, c) {
    if (arr.indexOf(c) > 0) return 1;

    i = 0;
    j = n - 1;
    total = 0;

    // 왼쪽과 오른쪽이 만나기 전까지..
    while (i < j) {
      total = arr[i] + arr[j];
      if (total > c) {
        //목표값보다 작을 경우 > 오른쪽을 한칸 왼쪽으로 이동
        j -= 1;
      } else if (total === c) {
        //목표값보다 같을 경우 > true return
        return true;
      } else {
        diff = c - total; //목표값보다 클 경우 > 목표값과 합계의 차이를 구한후
        // 왼쪽값이 차이와 같지않고, 오른쪽값이 차이와 같지 않고,
        if (arr[i] !== diff && arr[j] !== diff && binarySearch(i, j, diff)) {
          return true;
        }
        i += 1;
      }
    }
  }

  return check(N, C) ? 1 : 0;
}
