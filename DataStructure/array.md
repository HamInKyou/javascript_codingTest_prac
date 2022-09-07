# 배열

## 개요

1. 탐색에 유용한 자료구조
2. 원하는 원소의 index 알고 있으면 O(1)로 찾을 수 있다.
3. 중간에 원소를 삭제하면 해당 index에 빈자리 생기기에, 땡기는데 O(n)의 시간
4. 중간에 원소를 추가하기 위해 해당 index를 비워야하기에, 뒤로 미는데 O(n)의 시간
5. 따라서 추가/삭제가 반복되는 로직이라면 배열 사용을 권장하지 않는다.

## 배열 생성

```javascript
const arr1 = [];
const arr2 = [1, 2, 3, 4, 5];
const arr3 = Array(10).fill(0); //10칸짜리 배열 만들고 모든 칸 0으로 초기화
const arr4 = Array.from(
  { length: 100 }, //유사배열 (100칸짜리 빈 배열 생성)
  (_, k) => k //첫번째 파라미터는 값, 두번째 파라미터는 인덱스
); //특정 로직으로 초기화
```

## 배열 요소 추가, 삭제

```javascript
arr.push(el); // 끝에 추가 O(1)
arr.push(el1, el2); // 끝에 여러개 추가 O(2)

arr.splice(index, amount, el);
//index 위치로부터 amount개 제거하고 el을 index위치에 추가
//빈자리는 땡겨서 채움!
//amount가 0이면 사이에 삽입하고 나머지 뒤로 밀어버림.
arr.splice(3, 0, 128); //3번째 인덱스에 128 삽입
arr.splice(3, 1); //3번째 인덱스 삭제
```

## 배열 관련 속성, 메소드

```javascript
arr.length; //배열의 길이
arr.join(" "); //배열 원소들 인자로 준 것을 원소 사이에 껴서 문자열로, 인자가 없음 ,로 연결
arr.reverse(); //원본을 뒤집고, 뒤집어진 복사본도 리턴
arr.concat(arr2); //arr 뒤에 arr2를 이어 붙임
arr.pop(); //제일 끝 요소를 배열에서 꺼냄
arr.shift(); // 맨 앞 요소를 배열에서 꺼냄
arr.unshift(el); // 배열 맨 앞에 요소 추가
arr.slice(start, end); // start부터 end-1까지로 만든 새로운 배열 리턴(원본 그대로)
```
