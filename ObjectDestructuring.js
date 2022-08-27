//object destructuring

const sahadevan = {
    first : 'moolamkuzhi',
    last : 'sahadevan',
    city : 'ekm',
    bmi : {
        height : 176,
        weight : 56,
    },
    job : 'cid',

}
 
//object
const {first,last,city,bmi:{height,weight}} = sahadevan;
console.log(first,last,city,height,weight);

//function 
function displayObject({first,last,bmi:{height}}){
    console.log(first, last, height);
}

displayObject(sahadevan);