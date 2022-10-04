# 자바스크립트 9가지 코드 트릭

## 1.swap

```javascript
[a, b] = [b, a];
```

## 2.배열 생성으로 루프 제거

### As - is

```javascript
let sum = 0;
for (let i = 5; i < 10; i += 1) {
  sum += i;
}
```

### To - be

```javascript
const sum = Array.from(new Array(5), (_, k) => k + 5).reduce(
  (acc, cur) => acc + cur,
  0
);
```

## 3. 배열 내 같은 요소 제거

### 방법1

```javascript
Array.from(new Set(arr));
```

### 방법2

```javascript
[...new Set(arr)];
```

## 4. 객체 병합

```javascript
const objectA = {};
const objectB = {};
const newObj = { ...objectA, ...objectB }; //key가 동일하면 뒤에걸로 덮어씀
```

## 5. &&과 || 활용

```javascript
//1)
const name = participantName || "Guest"; // 기본값

//2)
flag && func(); // flag가 true면 func 실행
```

## 6. 구조 분해 할당

객체에서 필요한 것만 꺼내 쓰기

```javascript
//1)
const { key1, key2 } = object;
//2)
const obj = {
  key1,
  key2,
};
```

## 7. 비구조화 할당 사용

```javascript
const func = ({ key1, key2 }) => {
  return { key1, key2 };
};
func({ key1: val1, key2: val2, key3: val3 });
```

## 8. 동적 속성 이름

객체의 key를 동적으로 생성 가능

```javascript
const namekey = "name";
const emailkey = "email";
const person = {
  [namekey]: "nameVal",
  [emailkey]: "emailVal",
};
```

## 9. !! 연산자를 사용하여 Boolean 값으로 바꾸기

```javascript
!!val;
// val = 0 또는 null 또는 '' 또는 undefined 또는 NaN 일 경우 false
// 그 외에는 true
```

## 10. 자바스크립트 입력 받기

```javascript
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split(" ");
//inputData는 string 배열이므로, 숫자 등 계산이 필요할 땐 형변환이 필요하다!
```
