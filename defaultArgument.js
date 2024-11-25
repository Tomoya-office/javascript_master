// ここにコードを書きながら確認しましょう！

function nameFn(name) {
  return `Gizumo ${name}`;
}

console.log(nameFn('taro')); // Gizumo taro


// 練習問題
// 問題 1

//関数の引数にデフォルト因数を与える。
function discountRateCalc(price, rate = '5') {
  return price * (1 - rate * 0.01);
}

//引数含んだ関数を呼び出し
console.log(discountRateCalc(4500,5));
console.log(discountRateCalc(6000,20));
