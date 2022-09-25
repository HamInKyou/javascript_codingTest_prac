const today = new Date();
const year = today.getFullYear();
const month =
  today.getMonth() + 1 < 10 ? `0${today.getMonth() + 1}` : today.getMonth() + 1;
const date = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();

console.log(`${year}-${month}-${date}`);
