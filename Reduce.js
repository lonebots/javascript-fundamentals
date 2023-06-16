//Reduce
//iterates, callback function
//reduce to a single value - number, array, object
//1st parameter ('acc') - total of all calculations
//2nd parameter ('curr') - current iteration/value

const staff = [
  { name: "bob", age: 20, position: "developer", salary: 1000 },
  { name: "boby", age: 23, position: "sql-developer", salary: 150 },
  { name: "barb", age: 24, position: "frontend-developer", salary: 190 },
  { name: "peter", age: 30, position: "backend-developer", salary: 120 },
  { name: "john", age: 29, position: "the boss", salary: 150 },
  { name: "anna", age: 40, position: "flutter-developer", salary: 10 },
  { name: "devan", age: 40, position: "developer", salary: 200 },
];

//calculate the daily salary
const dailyTotal = staff.reduce((total, person) => {
  // console.log(total);
  // console.log(person.salary);

  //update total
  total += person.salary;
  //always return first parameter
  return total;
}, 0);

console.log("daily total : " + dailyTotal);

// example 2 

// reduce can be used to create tally of items from a list 

const fruitBasket = ['apple', 'apple', 'apple', 'apple', 'apple', 'orange', 'orange', 'banana', 'banana', 'banana', 'banana', 'banana', 'mango'];

const fruitCount = fruitBasket.reduce((tally, fruit) => {
  tally[fruit] = (tally[fruit] || 0) + 1;
  return tally;
}, {});

const count = fruitBasket.reduce((tally, fruit) => {
  tally[fruit] = (tally[fruit] || 0) + 1;
  return tally;
}, {})

for (const fruit in fruitCount) {
  console.log(`${fruit}: ${fruitCount[fruit]}`);
}
console.log("fruits : " + count)
console.log('fruit basket : ', fruitBasket)
