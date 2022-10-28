const fs = require("fs");
const [n, r, c] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let result = 0;
const search = (size, row, col) => {
  //row, col은 시작점 좌표
  if (row === r && col === c) {
    //해당 포인트 찾았으면 출력
    console.log(result);
  } else if (r >= row && r < row + size && c >= col && c < col + size) {
    //해당 포인트가 현 범위 내에 있을 시 4분할해서 더 찾아 들어가기
    size /= 2;
    search(size, row, col);
    search(size, row, col + size);
    search(size, row + size, col);
    search(size, row + size, col + size);
  } else {
    result += size * size;
  }
};

const size = 2 ** n;
search(size, 0, 0);
