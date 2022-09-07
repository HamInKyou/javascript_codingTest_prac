# 객체

```javascript
const obj = {};

//동적으로 객체에 key-val 추가
obj["key1"] = "val1";
obj.key2 = "val2";

//객체에서 key-val 쌍 제거
delete obj.key1;

//객체에 key가 있는지 검사
"key2" in obj;

//obj의 key들만 모아 배열로
Object.keys(obj);

//obj의 value들만 모아 배열로
Object.values(obj);
```
