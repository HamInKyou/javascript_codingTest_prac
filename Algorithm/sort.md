# 정렬 종류에 대해서 알아보자

## 버블정렬

거품이 뽀글뽀글 올라오는 것처럼, 맨 뒤부터 차례대로 채워나가는 형식

```javascript
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}
```

## 삽입정렬

정렬이 되어있는 배열의 올바른 위치에 "삽입"해나가며 정렬하는 형식

```javascript
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let cur = array[i];
    let left = i - 1;
    for (j = left; j >= 0; j--) {
      if (array[j] < cur) {
        break;
      }
      array[j + 1] = array[j];
    }
    array[j + 1] = cur;
  }
  return array;
}
```

## 선택정렬

이미 정렬 완료된거 제외하고, 나머지 것들 중에서 제일 작은걸 "선택"하며 붙여나가는 형식

```javascript
function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[minIndex] > array[j]) {
        minIndex = j;
      }
    }
  }
  if (minIndex !== i) {
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }
  return array;
}
```

## 계수정렬

정렬할 요소들은 많은 것에 비해, 그 요소들이 적은 범위 내에 중복적으로 있을 때 효율적!

```javascript
const MAXNUM = 10000;
const counter = new Array(MAXNUM + 1).fill(0);

for (let i = 0; i < n; i++) {
  counter[inputData[i]]++;
}

for (let i = 0; i < counter.length; i++) {
  if (counter[i]) {
    for (let j = 0; j < counter[i]; j++) {
      console.log(i);
    }
  }
}
```
