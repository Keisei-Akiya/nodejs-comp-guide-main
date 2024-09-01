const nums = [3, 1, 4, 1, 5, 10, 2, 6];

const result = Math.max(3, 1, 4, 1, 5, 10, 2, 6);
console.log(result);

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let newArr = [...arr1];
let newArr1 = arr1;
console.log(newArr === arr1); // 同じ配列を参照していないのでfalse
console.log(newArr1 === arr1); // 同じ配列を参照しているのでtrue

const obj = {
  name: "Tom",
  age: 22,
};
const newObj = { ...obj };
newObj.name = "John"; // 新しいオブジェクトのnameを変更

console.log(newObj, obj); // 元のオブジェクトには影響なし．

// 引数を配列にまとめ上げて出力する関数
const restA = (...argA) => console.log(argA);
restA(1, 3, 4);

const restB = (n, m, ...argB) => console.log(`n:${n}, argB:${argB}`);
restB(1, 3, 4);
