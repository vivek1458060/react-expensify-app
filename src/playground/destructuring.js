//
//Array destructuring
//
// const person = {
//     name: 'vivek',
//     age: 23,
//     location: {
//         temp: 96,
//         city: 'kolkata'
//     }
// }

// const {name: firstName = 'Anonymous', age} = person; //rename and set default to name property
// console.log(`${firstName} is ${age}`);

// const {city, temp: temperature} = person.location;
// console.log(`It's ${temperature}F in ${city}`);

//
//Array destructuring
//

const address = ['Anandapur', 'Kolkata', 'West bengal', '700107'];
const [street, city, state, zip] = address;
//const [, , state, zip] = address; //Skip first two element
//const [Street, , state] = address; //grab first and third item
console.log(`I am in ${city}`);