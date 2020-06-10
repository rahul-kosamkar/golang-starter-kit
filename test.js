// let sum = a => b => b ? sum(a + b) : a;
// console.log(sum(10)(20)(3)(4)());


// let sum = function (a) {
//     let closureFunc = b => b ? sum(a + b) : a;
//     closureFunc.toString = () => a;
//     return closureFunc;
// }
// console.log(sum(10)(2)(3)(4));


// Simple way to check if string is palindrome or not
// function isPalindrome(str) {
//     str = str.replace(/\W/g, '').toLowerCase();
//     return (str == str.split('').reverse().join(''));
// }

// console.log(typeof undefined);
// console.log(typeof NaN);

// var a = [1, 2, 3];
// a[10] = 99;
// console.log(a);

// var x = 21;
// var girl = function () {
//     console.log(x);
//     var x = 20;
// };
// girl();

// (function () {
//     try {
//         throw new Error();
//     } catch (x) {
//         var x = 1,
//             y = 2;
//         console.log(x);
//     }
//     console.log(x);
//     console.log(y);
// })();


// function greet(message) {
//     console.log(message);
// }

// function greeter(name, age) {
//     return name + " says Hey!! He is " + age + " years old";
// }
// var message = greeter("Akhil", 26);
// greet(message);

// function cb() {
//     console.log('Processed in next iteration');
// }
// process.nextTick(cb);
// console.log('Processed in the first iteration');

// console.log("first");
// setImmediate(() => {
//     console.log("second");
// });
// console.log("third");
// console.log(global);


// var name = "arjun"

// function Outer() {
//     this.name = "abdul"
//     console.log(name);
//     console.log(this);

//     function inner() {
//         this.name = "abdul"
//         console.log(this.name)
//     }
//     inner()
// }

// var out = new Outer();

// var arr = ["a", "b", "c", "a", "b", "d", "c", "z"];

// var newArr = [... new Set(arr)];
// console.log(newArr);

// for (let i = 0; i < 5; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, i * 1000);
// }

// for (var i = 0; i < 5; i++)
// {
//     let a = i;
//     setTimeout(function () {
//             console.log(a);
//         },
//         i * 1000);
// }

// var myObject = {
//     foo: "bar",
//     func: function () {
//         var self = this;
//         console.log("outer func:  this.foo = " + this.foo);
//         console.log("outer func:  self.foo = " + self.foo);
//         (function () {
//             console.log("inner func:  this.foo = " + this.foo);
//             console.log("inner func:  self.foo = " + self.foo);
//         }());
//     }
// };
// myObject.func();

// console.log("Javascript everywhere" instanceof String);
// console.log(new Array(3).toString());
// console.log([1] + [] + "javascript".split(''));
// console.log('1' - - '1');

// {
//     console.time("loop");
//     for (var i = 0; i < 1000000; i += 1) {
//         // Do nothing
//     }
//     console.timeEnd("loop");
// }

// console.log(a); // undefined
// var a = 5;
// console.log(a); //ReferenceError: a is not defined
// let a = 5;
// console.log(a); //ReferenceError: a is not defined
// const a = 5;

console.log(typeof undefined);
console.log(typeof null);