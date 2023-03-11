// arrays destructuring

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, fruits[1]);

// Object destructuring

let user = { username: 'Jorge', age: 33 };
let { username, age } = user;
console.log(username, user.age);


// spread operator, operador de propagación ...Obj, string

let person = { name: 'Jorge', age: 33 };
let country = 'CO';

let data = { ...person, country };
console.log(data);

// rest

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[2];
}

console.log(sum(1, 1, 2, 3));