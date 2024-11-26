// ここにコードを書きながら確認しましょう！

// プロパティを定義しながらオブジェクトを作成
const company = {
  name: 'Gizumo',
  place: 'Shibuya',
};

// スプレッド構文でcompanyを展開し、展開したものをオブジェクトリテラル{}の中に入れている
// const copy = { ...company };
// console.log(copy); // { name: 'Gizumo', place: 'Shibuya' }

// const numbers = [1, 2, 3, 4, 5];
// const copyNumbers = [...numbers];
// console.log(copyNumbers); // [1, 2, 3, 4, 5]



// 練習問題
// 問題 1 わからない

//packageManager配列を用意
const packageManager = ['npm', 'yarn', 'pnpm'];

//問題文に返り値を使い「スプレット構文」を使用と書いてあったので
//スプレット構文でpackageManagerとframeworkをマージしreturnで値を返却しています。
function arrayFn(array) {
  const framework = ['Vue', 'React', 'Svelte'];
  const set = [...array,...framework];
  return set;
}

//関数呼び出し。引数にpackageManagerの情報を
console.log(arrayFn(packageManager));


// 問題 2

const objectA = {
  language: 'JavaScript',
  framework: 'Vue',
  version: 2,
};

const objectB = {
  version: 3,
};

const routingLibrary = {...objectA, ...objectB, routingLibrary: 'Vue Router'};

console.log(routingLibrary);