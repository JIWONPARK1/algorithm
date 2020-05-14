## Q. 피보나치 수열 (Fibonacci)

피보나치 수열의 N번쨰 수를 출력하기 위한 프로그램을 어떤 식으로 만들 것인가 ?

ex ) 1,1,2,3,5,8,13,21....

```javascript
function getNthFibo(n) {
  let sum = 0;
  let last = 1;
  let lastlast = 0;
  if (n < 2) {
    return sum;
  } else {
    for (let i = 0; i < n; i++) {
      sum = last + lastlast;
      lastlast = last;
      last = sum;
    }

    return sum;
  }
}
```
