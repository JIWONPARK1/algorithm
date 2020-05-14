## Q. 피보나치 수열 (Fibonacci)

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
