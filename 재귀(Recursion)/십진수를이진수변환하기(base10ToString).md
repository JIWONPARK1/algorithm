## Q. 십진수를 이진수로 변환하기 (Base10 to String)

### [1 step]

```javascript
function base10ToString(n) {

    let binaryString = '';

    fuction base10ToStringCalculator(n){
    let remainder = n / 2;
    let quotient = parseInt(n % 2);

        if (n > 2) {
            binaryString = quotient.toString() + binaryString;
            base10ToStringCalculator(remainder);
        } else {
            binaryString = '1' + binaryString;
        }
    }

}
```

### [2 step]

```javascript
function base10ToString(n) {

    let binaryString = '';

    fuction base10ToStringCalculator(n){
    let q = parseInt(n % 2);
        if (n > 2) {
           base10ToStringCalculator(q)
            base10ToStringCalculator(n / 2);
        } else {
            binaryString += n
        }
    }

}
```
