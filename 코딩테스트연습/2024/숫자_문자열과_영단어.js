const initialString = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine"
];


function solution(s) {
   initialString.map((e,i)=> {
      s = s.replaceAll(e,i)
  });
  return Number(s)
}
