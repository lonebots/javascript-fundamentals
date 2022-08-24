//MAP method

//array for iterating
const shoppingCart = [
  {
    product: "biscut",
    price: 20,
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
    product: "pen",
    price: 10,
  },
];

const productNameList = shoppingCart.map((item)=> {return item.product} );
console.log(productNameList);

const result = document.querySelector("#result");

//set the innerHTML 
result.innerHTML = productNameList.join('<br>');


