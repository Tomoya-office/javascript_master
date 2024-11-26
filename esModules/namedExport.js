// ここにコードを書きながら確認しましょう！
const hoge = 'hoge';

export function testFn(text) {
  return `Hello ${text}`;
};

// 変数hogeをnamed exportによってエクスポートしている
export { hoge };



// 練習問題
// 問題 1
export const nameFn = () => {
  return 'Gizumo taro';
};

export const calcFn = (num) => {
  return num * 10;
};