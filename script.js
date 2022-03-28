
function orderExecutor(resolve, reject) {
  console.log('1');
  setTimeout(function () {
    resolve('2');
  }, 1000);
}

let p1 = new Promise(orderExecutor);
p1.then(console.log);
console.log('3');


//Exercise 2.3: Button click!
function buttonExecutor(resolve, reject) {
  let myBtn = document.querySelector('button');
  
  //myBtn.addEventListener('click', resolve);

  myBtn.addEventListener('click', function() {
  resolve();
  console.log('clicked!');
  });
  
  setTimeout(reject, 5000);
}

let betterClick = new Promise(buttonExecutor);

betterClick
  .then(function () { console.log('Option A'); })
  .catch(function () { console.log('Option B'); });


//Exercise 2.4: What is logged?
function executor(resolve, reject) {
resolve(1);
}
function add(value) {
return value + 5;
}
function multiply(value) {
return value * 6;
}
let myPromise = new Promise(executor);
myPromise
.then(add)
.then(multiply)
.then(console.log);


//Exercise 2.5: What is logged?
function executor2(resolve, reject) {
  resolve(1);
}
function add2(value) {
  return new Promise(function(resolve, reject) {
  resolve(value + 5); });
}

let myPromise2 = new Promise(executor2);

myPromise2
  .then(add2)
  .then(console.log);


//Exercise 2.2: What’s the order?
function orderExecutor2(resolve, reject) {
  console.log('11');
  resolve('22');
}

let p2 = new Promise(orderExecutor2);
p2.then(console.log);
console.log('33');