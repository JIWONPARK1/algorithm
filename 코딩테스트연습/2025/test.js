function solution(bridge_length, weight, truck_weights) {
  let time = 0,
    sum = 0,
    i = 0,
    curLength = 0;
  const bridgeQueue = Array.from({ length: bridge_length }, (_) => 0);
  const queue = [...truck_weights];
  const indexQueue = [];
  while (queue.length) {
    if (sum + queue[0] > weight) {
      while (sum) {
        time++;
        i++;
        let truck = bridgeQueue.shift();
        console.log("while");
        if (truck) {
          curLength--;
          if (sum + queue[0] > weight) {
            // 트럭 이동
            bridgeQueue.push(0);
            sum -= truck;
          } else {
            // 새 트럭 추가
            curLength++;
            bridgeQueue.push(queue.shift());
            sum = sum + nextTruck - truck;
          }

          break;
        } else {
          // 새 트럭 추가
          bridgeQueue.push(truck);
          sum += truck;
          curLength++;
        }
      }
    } else {
      // 새 트럭 추가
      let truck = queue.shift();
      bridgeQueue.shift();
      bridgeQueue.push(truck);
      sum += truck;
      i++;
      time++;
      curLength++;
    }
  }
  return time;
}

console.log(solution(100, 100, [10]));
