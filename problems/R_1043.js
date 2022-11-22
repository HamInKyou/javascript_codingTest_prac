const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const [N, M] = inputData.shift().split(" ").map(Number);
const [_, ...know] = inputData.shift().split(" ").map(Number);

//그룹의 리더 알아내기
const getLeader = function (arr, n) {
  if (arr[n] === n) return n; //자기가 그룹 리더일경우 자기 리턴
  //자기의 그룹 리더가 다른 그룹에 종속된다면 다른 그룹의 리더를 자기 리더로 설정하고, 그 리더 리턴
  return (arr[n] = getLeader(arr, arr[n]));
};

//두 그룹 합치기
const unionGroup = function (arr, a, b) {
  a = getLeader(arr, a);
  b = getLeader(arr, b);

  // 두 그룹 중에 리더 인덱스가 작은 값으로 합친다.
  if (a < b) arr[b] = a;
  else arr[a] = b;
};

//같은 그룹인지 확인하기
const isSameGroup = function (arr, a, b) {
  a = getLeader(arr, a);
  b = getLeader(arr, b);

  if (a === b) return true;
  else return false;
};

//각 그룹의 리더 초기화 (처음엔 자기 자신이 그룹의 리더)
const unionArr = Array.from(new Array(N + 1), (_, k) => k);

//파티 리스트
const parties = [];

//서로 연관된 사람끼리 이어서 그룹 만들기
for (let i = 0; i < M; i++) {
  let [n, ...party] = inputData[i].split(" ").map(Number);
  parties.push(party);
  for (j = 0; j < n - 1; j++) {
    unionGroup(unionArr, party[j], party[j + 1]);
  }
}

const knowSet = new Set(know.map((person) => getLeader(unionArr, person)));

let cnt = 0;
for (let i = 0; i < M; i++) {
  let canTalk = true;
  for (let j = 0; j < parties[i].length; j++) {
    if (knowSet.has(getLeader(unionArr, parties[i][j]))) {
      canTalk = false;
      break;
    }
  }
  if (canTalk) cnt++;
}
console.log(cnt);
