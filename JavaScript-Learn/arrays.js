
// Array: Allows you to store multiple values inside of them.

// const groceries = ['🍌', '🍎', '🍊', '🍐']
// console.log(groceries)

// grab the 2nd index
// console.log(groceries[2])

// Index gives you the location of value within array. It is similar to street number.

// Array methods:

// Push() adds one or more elements to the end of an array and returns new length of an array.
// groceries.push('🍪')
// console.log(groceries)

// Slice() method returns the portion of an array you want in a new array.
// -Array Slice
// -Start from 0 INCLUSIVE and UP to 6 [0, 1, 2, 3, 4, 5]
// console.log(groceries.slice(0, 6))

// Array methods (slice, push, indexOf, length)
// console.log(groceries.indexOf('🍐'))
// console.log(groceries.length)



// let numbers = [1, 2, 3, 4, 5];
// console.log (numbers);

// let fruits = ['Apple', 'Banana', 'Grapes'];
// console.log (fruits);

// let cars = new Array('Ford', 'Toyota', 'Mercedes');
// console.log (cars);

// console.log (cars[1]);
// cars[1] = 'Honda';
// console.log (cars[1]);
// console.log (cars);

// fruits.push('cherry');
// console.log (fruits);
// console.log (fruits.length);

// let x;
// for(x in fruits){
//     console.log (fruits[x]);
// }

// for(x of fruits){
//     console.log(x)
// }



let fruits = ['Apple', 'Banana', 'Grapes'];
console.log (fruits);

fruits.pop()
console.log (fruits);

fruits.shift();
console.log (fruits);

fruits.push('Cherry');
console.log (fruits);

fruits.unshift('Lemon');
console.log (fruits);

delete fruits[1];
console.log (fruits);

fruits[1] = 'Orange';
console.log (fruits);

fruits.splice(1,2);
console.log (fruits);

fruits.splice(2,0,'Orange', 'Cherry')
console.log (fruits);

let citrusFruits = fruits.slice(0,2)
console.log (fruits);
console.log (citrusFruits);

let evenNumbers = [2, 4, 6];
let oddNumbers = [1,3,5];
let primeNumbers = [2,3,5];

let numbers = evenNumbers.concat(oddNumbers, primeNumbers);
console.log (numbers);

ABCD
123





