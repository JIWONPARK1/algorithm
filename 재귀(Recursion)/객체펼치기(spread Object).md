## Q. 피보나치 수열 (Fibonacci)

> ### 문제

객체의 모든 자식 속성을 펼쳐 , 하나의 객체로 만들기 위한 프로그램을 어떤 식으로 만들 것인가 ?

```javascript
ex )

var dictionary = {
  Key1: '1',
  Key2: {
    a: '2',
    b: '3',
    c: {
      d: '3',
      e: '1'
    }
  }
};


위의 배열을
{
  'Key1': '1',
  'Key2.a': '2',
  'Key2.b': '3',
  'Key2.c.d': '3',
  'Key2.c.e': '1',
}

와 같이 펼쳐보자!
```

---

 <br/>

> ### 풀이

```javascript
//  1  step
function spreadObject(dictionary) {
  let result = {};
  spreadObjectHelper(dictionary, '');

  function spreadObjectHelper(dictionary, parents) {
    for (let [key, value] of Object.entries(dictionary)) {
      if (typeof value === 'object') {
        spreadObjectHelper(value, parents + '.' + key);
      } else {
        if (parents) {
          result[parents + '.' + key] = value;
        } else {
          result[key] = value;
        }
      }
    }
  }
}
```

 <br/>

> ### 입력

```javascript
```

> ### 출력

```javascript
```
