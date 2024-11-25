import 'animate.css';

// ここにコードを書きながら確認しましょう！

const title = document.getElementById('title');
const button = document.getElementById('button');
const article = document.querySelector('.card-type--yellow');


button.addEventListener('click', () => {
  // title要素に.animate__hingeクラスを付与
  title.classList.add('animate__hinge');
  // 2秒後にtitle要素から.animate__hingeクラスを削除
  setTimeout(() => {
    title.classList.remove('animate__hinge');

  setTimeout(() => {
    article.style.display="block";
    //.card-type--yellowのとこにあるstyleのdisplayをblockに変更しますという処理。
    article.classList.add('card-animation');
    //↑card-animationを付与。これは動きを与えるためのもの
    article.classList.add('animate__fadeInUp');
    //ドキュメント内のbodyにクラスanimate__fadeInUpを付与。これは「下からフェードインしますよ。」という処理。
  }, 0);
}, 2000);

});






/*
button.addEventListener('click', () => {
  //↑ボタンをクリックしたときに
  body.document.classList.add('card-animation');
  //↑card-animationを付与。これは動きを与えるためのもの
  body.document.classList.add('animate__fadeInUp');
  //animate__fadeInUpを付与。これは「下からフェードインしますよ。」という処理。
  setTimeout(() => {
    body.document.article.style.remove('display: none;');
  }, 3000);
});
*/

//document.body.article.style.toggle('display: block;');
//ドキュメントのbody内のclass名がついていなければ追加と削除をします。

// ↑ 練習問題はここまで書いてきたコードに追記する形で実装してください。 ↑
