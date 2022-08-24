//Filter - return a new array, can manipulate the size of new array (unlike map) returns based on condition
//Find - returns a single instance (object ), returns first match, if no match - undefined

const people = [
  { name: "bob", age: 20, position: "developer" },
  { name: "boby", age: 23, position: "sql-developer" },
  { name: "barb", age: 24, position: "frontend-developer" },
  { name: "peter", age: 30, position: "backend-developer" },
  { name: "john", age: 29, position: "the boss" },
  { name: "anna", age: 40, position: "flutter-developer" },
  { name: "devan", age: 40, position: "developer" },
];

console.log(people);

//filter - get young people < 25
const youngPoeple = people.filter((person)=>{if(person.age<25) return person;})

//console.log(youngPoeple);

const developer  = people.filter((person) => person.position === 'developer');
console.log(developer);

//no match
const seniorDevs = people.filter((person) =>  person.position === 'senior dev');
console.log(seniorDevs);

//find 
const bob = people.find((person) => person.name === 'bob');
console.log(bob);

//no match
const oldPerson = people.find((person) => person.age > 50);
console.log(oldPerson);

//mulitple matches - first match