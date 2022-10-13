# 이진 탐색 알고리즘

이미 정렬되어 있는 배열에서 탐색 범위를 두 부분 리스트로 나눠 절반씩 좁혀가 필요한 부분에서만 탐색하도록 제한하여 원하는 값을 찾는 알고리즘

```javascript
const binarySearch = (list, target, left, right) => {
  let mid = 0;

  while (left <= right) {
    mid = Math.floor((left + right) / 2); //가운데 찾기

    if (list[mid] === target) {
      //원하는 값 찾았을 경우 리턴
      return mid;
    }

    // 범위 반 갈라 줄이기
    if (list[mid] > target) {
      //찾으려고 하는 값보다 중간이 클경우
      right = mid - 1; //왼쪽에서 찾기 위해 오른쪽 경계 중간이전으로
    } else {
      //찾으려고 하는 값보다 중간이 작은 경우
      left = mid + 1; //오른쪽에서 찾기 위해 왼쪽 경계 중간다음으로
    }
  }

  return -1;
};

const sample = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

sample.sort((a, b) => a - b);

// ( 찾을 배열, 탐색할 값, 시작점, 끝점 )
const result = binarySearch(sample, 7, 0, sample.length - 1);

console.log(result);
```
