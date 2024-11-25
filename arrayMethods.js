/*
// 処理が1つの式で完結しているため、return文と{}が省略できる
var foodList = {
  'オムライス': 450,
  '焼きそば': 500,
  'お好み焼き': 600,
  '焼き飯': 400
};

//任意のキーワードを指定する
var order = ['焼き飯', 'お好み焼き'];

var result = order.map( function( value, index, array ) {

//配列のキーワードを使ってオブジェクト内の値を取得する
    return this[value];

}, foodList );

console.log( result );
*/

// 練習問題
// 問題 1
const array = [
  {
    tag: 'p',
    className: 'hoge',
  },
  {
    tag: 'div',
    className: 'fuga',
  },
  {
    tag: 'h1',
    className: 'piyo',
  },
];

//回答１
//const newArray = array.map(val=> console.log('{ tag:'+(val).tag , 'className:c-' +(val).className +'}'));


const newArray = array.map( val => {return{...val , className:`c-${val.className}`}});

console.log(newArray);



//const array = [{tag: 'p',className: 'hoge', },{tag: 'div',className: 'fuga',},{ tag: 'h1',className: 'piyo',},];

//const ray = array.map(val => console.log( val.tag , val.className));

//console.log(array[0],array[1],array[2]);

/*
let newarry= 'c-' + array[0].className;
console.log(newarry);

let jon = {};

jon.tag='p';
jon.className='c-'+'hoge';

console.log(jon);


let apple = {color: 'red',shape: 'round',taste: 'wonderful',};

console.log(apple);


let vehicles = [
  { name: 'car', color: 'red', speed: 'normal' },
  { name: 'train', color: 'green', speed: 'fast' },
  { name: 'airplane', color: 'grey', speed: 'faster' },
];

console.log(vehicles);*/