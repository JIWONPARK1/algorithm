## 팰린드롬 만들기

### [문제 설명]

동호와 규완이는 212호에서 문자열에 대해 공부하고 있다. 규완이는 팰린드롬을 엄청나게 좋아한다. 팰린드롬이란 앞에서부터 읽으나 뒤에서부터 읽으나 같게 읽히는 문자열을 말한다.

동호는 규완이를 위한 깜짝 선물을 준비했다. 동호는 규완이가 적어놓고 간 문자열 S에 0개 이상의 문자를 문자열 뒤에 추가해서 팰린드롬을 만들려고 한다. 동호는 가능하면 가장 짧은 문자열을 만들려고 한다.

동호가 만들 수 있는 가장 짧은 팰린드롬의 길이를 출력하는 프로그램을 작성하시오.

### [제한사항]

- 첫째 줄에 문자열 S가 주어진다. S는 알파벳 소문자로만 이루어져 있고, 길이는 최대 50이다.
- 첫째 줄에 동호가 만들 수 있는 가장 짧은 팰린드롬의 길이를 출력한다.

### [입출력 예]

| a     | return |
| ---  | ------ |
| 5abab    | 5  |
| abacaba    | 7  |
| abdfhdyrbdbsdfghjkllkjhgfds    | 38  |

<br />

### [문제풀이]

```javascript

 function checkPalindrome(str){
      let start = 0;
      let last = str.length -1;
      while(start <= last) {
          if(str[start++] !== str[last--])return false
      }
      return true
    }
function solution(plain) {
    var answer = 0;
    let arr = plain.split('')
    const n = plain.length;
    answer = n;

   

    for(let i = 0; i < n ; i++){
            console.log(plain.substring(i,arr.length))
        if(checkPalindrome(plain.substring(i,arr.length))){
            return answer + i
        }
    }
    return answer;
}

solution()
```
