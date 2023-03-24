//Exercise 0.1
function orderExecutor(resolve, reject) {
  console.log('1');
  setTimeout(function () {
    resolve('2');
  }, 1000);
}

let p1 = new Promise(orderExecutor);
p1.then(console.log);
console.log('3');


//Exercise 0.1b: What’s the order?
function orderExecutor2(resolve, reject) {
  console.log('11');
  resolve('22');
}

let p2 = new Promise(orderExecutor2);
p2.then(console.log);
console.log('33');


//Exercise 0.2: No button click
function buttonExecutor1(resolve, reject) {
    let myBtn1 = document.querySelector('button');
    myBtn1.addEventListener('click', resolve);
    setTimeout(reject, 5000);
}

let betterClick1 = new Promise(buttonExecutor1); 
betterClick1
    .then(function () { console.log('Option A'); })
    .catch(function () { console.log('Option B'); });


//Exercise 0.3: Button click!
function buttonExecutor2(resolve, reject) {
  let myBtn2 = document.querySelector('button');
  
  //myBtn.addEventListener('click', resolve);

  myBtn2.addEventListener('click', function() {
  resolve();
  console.log('clicked!');
  });
  
  setTimeout(reject, 5000);
}

let betterClick2 = new Promise(buttonExecutor2);

betterClick2
  .then(function () { console.log('Option AA'); })
  .catch(function () { console.log('Option BB'); });



//Exercise 0.4: What is logged?
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



//Exercise 0.5: What is logged?
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


