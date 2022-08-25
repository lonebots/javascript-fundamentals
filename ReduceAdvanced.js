//advanced reduce 

//cart example 
const cart = [
  {
    title: "Samsung Galaxy",
    price: 600.0,
    amount: 1,
  },
  {
    title: "Google pixel",
    price: 200.0,
    amount: 2,
  },
  {
    title: "Oneplus Nord 2",
    price: 300.0,
    amount: 4,
  },
  {
    title: "Xiaomi",
    price: 400.0,
    amount: 5,
  },
  {
    title: "Oppo",
    price: 700.0,
    amount: 3,
  },
];


//totalitems

let total = cart.reduce((total,cartItem)=>{
    return total;
},{
    totalItem : 0,
    cartTotal : 0,
})

console.log(total)

//git up example 