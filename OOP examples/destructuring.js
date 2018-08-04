//* Destructuring

let a, b;
[a,b] = [100, 200];

//* Rest pattern
[a,b, ...rest] = [100, 200, 300, 400, 500];
//console.log(rest);

({a,b} = {a: 100, b:200, c:300, d:400, e:500});
({a,b, ...rest} = {a: 100, b:200, c:300, d:400, e:500});

//console.log(a,b);
//console.log(rest);

//* Array Destructuring
// const people = ['Vic', 'Max', 'Nick', 'Alex', 'Sebastien'];
// const [person1, person2, person3] = people;

//console.log(person1, person2, person3);

//* Parse array returned from funciton
function getPeople(){
    return ['Vic', 'Max', 'Nick', 'Alex', 'Sebastien'];
}

// let person1, person2, person3;
// [person1, person2, person3] = getPeople();
// console.log(person1, person2, person3);

//* Object Destructuring
const person = {
    name: 'Victor Rivera',
    age: 23,
    city: 'Orlando',
    gender: 'Male',
    sayHello: function(){ console.log('Hello')}
}

//* Old ES5
// const name = person.name,
//       age = person.age,
//       city = person.city;

//* New ES6 Destructuring
const {name, age, city, sayHello} = person;
console.log(name, age, city);
sayHello();