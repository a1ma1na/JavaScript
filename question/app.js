// 基礎編 問題
// Q1 変数
let nickname = "ごっしー";
let number = 28;

console.log("私のニックネームは" + nickname + "です。年齢は" + number + "歳です。");


// Q2 配列
let languages1 = "JavaScript";
let languages2 = "PHP";
let languages3 = "Ruby";
let languages4 = "Python";
let languages5 = "Go";

console.log(`私の好きな言語は${languages1}です。次は${languages4}を勉強してみたいです。`)


// Q3 オブジェクト
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);


// Q4 配列 × オブジェクト
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log('The Legend of Zelda');


// Q5 四則演算
playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

let average = (playerList[0].age+ playerList[1].age+ playerList[2].age) /3;
console.log(average);


// Q6 関数
function sayHello(){
    console.log("Hello");
}
sayHello();


// Q7 メソッド
user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

user.birthday = '2000-09-27';

user.sayHello = function() {
  console.log("Hello!");
};

user.sayHello();


// Q8 引数
let calc = {};

calc.add = function(x, y) {
  console.log(x + y);
};

calc.subtract = function(x, y) {
  console.log(x - y);
};

calc.multiply = function(x, y) {
  console.log(x * y);
};

calc.divide = function(x, y) {
  console.log(x / y);
};

calc.add(3, 4);       
calc.subtract(15, 5); 
calc.multiply(7, 7);  
calc.divide(10, 2); 


// Q9 返り値
function remainder(x, y) {
    return x % y;
}

let x = 5;
let y = 3;
console.log(x + 'を' + y + 'で割った余りは ' + remainder(x, y) + ' です。');


// Q10 スコープ
function foo() {
  let x = 1;
}
console.log(x);
// スコープは変数の有効範囲で、その関数内でしか変数を参照できない。今回は "foo" の中で "x" を定義しているので、関数 "foo" の外にある "x" は定義されていないという扱いになる。


// 応用編 問題
// Q1 標準組み込みオブジェクト
let random = Math.random()*10;
console.log(random);


// Q2 コールバック関数
setTimeout(function() {
    console.log("Hello World!");
},3000);


// Q3 if
let num = 20;
if (num > 0) {
    console.log('num is greater than 0');
} else if (num < 0) {
    console.log('num is less than 0');
} else {
    console.log('num is 0');
}


// Q4 for
let numbers = [];
for (let i = 0; i <= 99; i++) {
  numbers.push(i);
}
console.log(numbers);


// Q5 for × if
let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let i = 0; i < mixed.length; i++) {
  let item = mixed[i];
  
  if (typeof item === 'number') {
    if (item % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  } else {
    console.log('not number');
  }
}
