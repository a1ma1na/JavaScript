// Q1 変数

// 変数 nickname, age に自分の名前と年齢を代入し、文字列連結で以下のようにコンソールに出力してください。

// 私のニックネームはごっしーです。年齢は28歳です。
// Q2 配列

// 変数 languages に JavaScript, PHP, Ruby, Python, Go の 5 つの値を持つ配列を代入し、その中から JavaScript, Python を取得し、テンプレートリテラルを用いて以下のようにコンソールに出力してください。

// 私の好きな言語はJavaScriptです。次はPythonを勉強してみたいです。
// Q3 オブジェクト

// 下記の変数 user を使用し 26 をコンソールに出力してください。

// let user = {
//   name: 'John',
//   age: 26,
//   bloodType: 'A',
//   favorite: 'card',
// };
// Q4 配列 × オブジェクト

// 下記の変数 playerList を使用し The Legend of Zelda をコンソールに出力してください。

// let playerList = [
//   {
//     name: 'John',
//     age: 26,
//     favorites: ['Card Game', 'Basket Ball', 'Programming'],
//   },
//   {
//     name: 'Bob',
//     age: 33,
//     favorites: ['Tinder', 'The Legend of Zelda'],
//   },
//   {
//     name: 'Michael',
//     age: 22,
//     favorites: ['Football', 'Smash Bros.'],
//   },
// ];
// Q5 四則演算

// Q4 で定義した変数 playerList を使用し、John, Bob, Michael の年齢の平均値を計算した結果をコンソールに出力してください。

// Q6 関数

// Hello とコンソールに出力する関数 sayHello を定義し、実行してください。
// 変数 sayWorld に World とコンソールに出力する無名関数を代入し、実行してください。
// Q7 メソッド

// Q3 で定義した変数 user に '2000-09-27'を値とする birthday プロパティを追加してください。
// Q3 で定義した変数 user に Hello！とコンソールに出力するメソッド sayHello を追加し、実行してください。
// ※ いずれも Q3 で定義した変数 user を直接書き換えないこと

// Q8 引数

// 下記の空のオブジェクト calc を使用し、以下問題を解いてください。

// let calc = {};
// 2 つの引数 x, y の和をコンソールに出力する add メソッドを定義し、7 になるように実行して下さい。
// 2 つの引数 x, y の差をコンソールに出力する subtract メソッドを定義し、10 になるように実行して下さい。
// 2 つの引数 x, y の積をコンソールに出力する multiply メソッドを定義し、49 になるように実行して下さい。
// 2 つの引数 x, y の商をコンソールに出力する divide メソッドを定義し、5 になるように実行して下さい。
// Q9 返り値

// 2 つの引数 x, y を受け取り、x を y で割った剰余を返り値とする関数 remainder を定義し、5 と 3 を引数に渡して実行した返り値を用いて文字列連結で以下のようにコンソールに出力してください。

// 5 を 3 で割った余りは 2 です。
// Q10 スコープ

// 下記の console.log(x); においてコンソールに 1 が出力されることはなく、x is not defined（変数 x が定義されていない）というエラーが出力されます。
// その理由を以下 2 つの単語を使用し app.js にコメントアウトで回答してください。

// スコープ
// 参照
// function foo() {
//   let x = 1;
// }
// console.log(x);