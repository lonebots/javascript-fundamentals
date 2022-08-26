//faster or easier way to access/unpack variables from arrays,objects

const fruits = ['orange','banana','apple','grapes','lemon','pomegranate','guava','mango'];
const friends = ['hai','my','name','is','lonebots'];

let fruit1 = fruits[0];
let fruit2 = fruits[1];
let fruit3 = fruits[2];

console.log(fruit1,fruit2,fruit3);

const [john,peter,bob] = friends;
console.log(john,peter,bob);


//swapping values
console.log("fruit 1 : ",fruit1,"fruit 2 : ",fruit2);


[fruit2,fruit1] = [fruit1,fruit2];


console.log("fruit 1 : ", fruit1, "fruit 2 : ", fruit2);