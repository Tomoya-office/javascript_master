// ここにコードを書きながら確認しましょう！
// Promiseで非同期処理の完了を待機するパターン



// アロー関数の定義のおさらい
/*
≪ファンクションの省略≫
const 変数名 = function(引数) {
  処理の内容
};
省略型
const 変数名 = (引数) => {
  処理の内容
};

≪引数のかっこの省略≫
const arrowFn = (arg) => {
  console.log(arg);
};
↓ 修正 ↓
// 引数が一つなので()を省略して書くことができる
const arrowFn = arg => {
  console.log(arg);
};

≪リターンの省略≫
const arrowFn = num => {
  // 処理が1つの式で完結している
  return num * 10;
};

↓ 修正 ↓
// 処理が1つの式で完結しているため、return文と{}が省略できる
const arrowFn = num => num * 10;
*/

// timeは引数
// new Promise()でインスタンス化し、Promiseオブジェクトを作成
/*
const setTimeoutFn = time => new Promise(resolve => setTimeout(resolve, time));

console.log('1番目の処理');
setTimeoutFn(2000)
  .then(() => console.log('2番目の処理'))
  .then(() => setTimeoutFn(1000))
  .then(() => console.log('3番目の処理'))
  .then(() => setTimeoutFn(1000))
  .then(() => console.log('4番目の処理'))
  .then(() => setTimeoutFn(1000))
  .then(() => console.log('5番目の処理'));
*/

// 練習問題
// 問題 1

const returnPromise = () => {
  return new Promise((_resolve, reject) => {
    setTimeout(() => {
      reject('エラーが発生しました');
    }, 3000);
  });
};

returnPromise()
.catch((reject) => console.log(reject));
//エラーの時に呼び出す。
