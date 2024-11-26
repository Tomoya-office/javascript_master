// ここにコードを書きながら確認しましょう！

/*
const array = ['one', 'two', 'three'];
const [ hoge, fuga, piyo ] = array;

console.log(hoge); // one
console.log(fuga); // two
console.log(piyo); // three
*/

// 練習問題
// 問題 1
//配列編にある分割代入を参考

//
function arrayFn(arg) {
  return ['jQuery', 'Vue', arg];
}

//分割代入でそれぞれ振り分けする。
const [text, log, easy] = arrayFn('easy');

//argの入ってる変数の呼び出し。
console.log(easy); //'arg'


// 問題 2
//オブジェクト編を参考
function objectFn({ name }) {
  console.log(name);
}　//argObjectオブジェクトのnameキーを呼んでコンソールログで出力


const argObject = {
  name: 'Gizumo',
  place: 'Shibuya',
};　//argObjectオブジェクトに呼びかけ


objectFn(argObject);　//関数呼び出し