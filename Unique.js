//array for iterating
const Cart = [
  {
    product: "biscut",
    price: 20,
  },
  {
    product: "icecream",
    price: 30,
  },
  {
    product: "icecream",
    price: 30,
  },
  {
    product: "icecream",
    price: 30,
  },
  {
    product: "sergical mask",
    price: 100,
  },
  {
    product: "sergical mask",
    price: 100,
  },
  {
    product: "sergical mask",
    price: 100,
  },
  {
    product: "sergical mask",
    price: 100,
  },
  {
    product: "pen",
    price: 10,
  },
  {
    product: "pen",
    price: 10,
  },
  {
    product: "pen",
    price: 10,
  },
  {
    product: "pen",
    price: 10,
  },
  {
    product: "pen",
    price: 10,
  },
];


//get unique values 
//using set 
// set will return an object 
//spread it to make an array again

const uniqueProduct = new Set (Cart.map((item) => item.price));

//elements 
const uniqueProductArray = ["newelement2",...uniqueProduct,"newelement1"];


console.log(uniqueProductArray);
console.log(uniqueProduct);

//display the new unique list 
document.querySelector("#unique-list").innerHTML = uniqueProductArray;