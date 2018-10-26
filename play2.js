const person = {
  name: 'Dick',
  age: 54,
  greet() {
    console.log('Hi, I am ' + this.name);
  }
};

const printName = ({ name, age }) => {
  console.log(name, age);
}

printName(person);

const { name, age } = person;
console.log(name, age);

// const copiedPerson = {...person};
// console.log(copiedPerson);

const hobbies = ['fishing', 'hiking', 'biking'];

const [hobby1, hobby2, hobby3] = hobbies;
console.log(hobby1, hobby3);

// for (let hobby of hobbies) {
//   console.log(hobby);
// }


// console.log(hobbies.map(hobby => {
//   return 'Hobby: ' + hobby;
// }));

// console.log(hobbies.map(h => 'Hobby: ' + h));
// console.log(hobbies);
// const copiedArray = hobbies.slice();
// console.log(copiedArray);

// const nestedArr = [hobbies];
// console.log(nestedArr);

// const copiedArr = [...hobbies];
// console.log(copiedArr);



// const toArray = (...args) => {
//   return args;
// }

// console.log(toArray(1,2,3,4,5));