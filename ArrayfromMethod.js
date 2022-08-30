//Array.from - NOT ON PROTOTYPE

//from - retrun Array Object from an object
//with a length property or an iterable object
//from - turns array-like/ish in to array - string, nodelist, Set

place = "Payyanur";

console.log(Array.from(place));

const text = document.querySelectorAll(".text")

console.log(text);

const newText = Array.from(text).find((item)=>item.textContent === "person");

console.log(newText);


//creating pagination
const items = Array.from({length:100},(_,index)=>{
    return index;
})

//set items perpage & no. of pages
const itemsPerPage = 10;
const pages = items.length/itemsPerPage;

console.log(pages);

//dynamically list the items in each page
const newItems = Array.from({length:pages},(_,index)=>{
    const start = index*itemsPerPage;
    const tempItems = items.slice(start,start+itemsPerPage);
    return tempItems;
})

console.log(newItems);