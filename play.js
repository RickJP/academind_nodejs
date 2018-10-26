const name = 'Dave';
let age = 30;
const isWorking = false;


const listUser = (userName, userAge, UserIsWorking) => {
  return (
    'Name is ' +
    userName +
    ', age is ' + 
    userAge +
    ', and user is working: ' +
    UserIsWorking
  );
};


const add = (a, b) => {
  return a + b;
};

const addInOneLine = (a, b) =>  a + b;
const addOne = a => a + 1;

const showRandomZeroToOne = () => Math.random(1);

// Returns a random number between min (inclusive) and max (exclusive)
const showRandomNumGivenRange = (min, max)  => Math.random() * (max - min) + min;
// Returns a random integer between min (inclusive) and max (exclusive)
// Using Math.round() will give you a non-uniform distribution!
const showRandomIntGivenRange = (min, max) => Math.floor(Math.random() * (max - min) + 1 ) + min;


console.log(listUser(name, age, isWorking));

console.log(showRandomNumGivenRange(0.2,0.7));
console.log(showRandomIntGivenRange(50,80));