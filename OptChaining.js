//optional chaining

const people = [
  {
    name: "bob",
    location: { street: "123 street", timezone: { offset: "+8:00" } },
  },
  { name: "peter", location: { stree: "123 alph street" } },
  {
    name: "John",
    location: { street: "123 redwood street", timezone: { offset: "_10:00" } },
  },
];


console.log(people);