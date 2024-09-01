// 同期処理
// 順番に
let a = 0;
// console.log(a);

// 非同期処理 (Promise)
new Promise((resolve, reject) => {
  setTimeout(() => {
    a = 1;
    resolve(a);
    reject(a); // 不具合が発生したときに使うもの
  }, 2000);
})
  .then((b) => {
    console.log(b);
  })
  .catch((c) => {
    // 不具合が発生したときに使う
    console.log("catchssss", c);
  });
