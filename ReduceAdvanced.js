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

let total = cart.reduce(
  (total, cartItem) => {
    //get the price and amount
    const { amount, price } = cartItem;
    total.totalItem += amount;
    total.cartTotal += amount * price;
    return total;
  },
  {
    totalItem: 0,
    cartTotal: 0,
  }
);

//console.log(total);

//git up example
const url = "https://api.github.com/users/lonebots/repos?per_page=100";

//fetchapi
const fetchRepos = async () => {
  //wait for the response
  const response = await fetch(url); //--> returns a promise
  const data = await response.json(); //get the response and convert to json
  //console.log(data[0].id);
  //get the languages used
  const newData = data.reduce((total, repo) => {
    //console.log(repo);
    //get language property from repo
    const { language } = repo;
    //console.log(language);

    //get the count
    // if (language) {
    //   if (total[language]) {
    //     total[language] = total[language] + 1;
    //   } else {
    //     total[language] = 1;
    //   }
    // }

    //one - liner code
    if (language) {
      total[language] = total[language] + 1 || 1;
    }
    //console.log(total);\
    

    return total;
  }, {});
  console.log(newData);
};

fetchRepos();
