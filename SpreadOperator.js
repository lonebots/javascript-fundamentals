//spread operator 

const udemy = 'udemy';

const letters = [...udemy];
console.log(letters);

const boys = ['boy1','boy2','boy2']
const girls = ['girl1','girl2','girl3']
const bestfriend = ['bestfriend1']

//spreading
const friends = [...boys,...bestfriend,...girls]
console.log(friends);

//for objects 
const person = {name:'john',hi:'john, says hi!'};

const newPerson = {...person,name:'Doe'};
console.log(person);
console.log(newPerson);