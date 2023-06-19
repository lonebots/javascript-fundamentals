const logColor = () => {
    color = document.getElementById('color-pallate')
    console.log("logged color : ", color.value)
}

function addNumbers() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    result = num1 + num2;
    document.getElementById('result').innerHTML = result;
}

function glb() {
    console.log('global this : ', this)
}


const person = {
    glbPerson: () => {
        console.log('within person : ', this)
    }
}

glb();
person.glbPerson();


// testing addEventListener
btn = document.querySelector('.button_clickable')
console.log("btn : " + btn)
btn.addEventListener('click', function () {
    console.log('button clicked');
})

// greet 
let name = document.getElementById('name').value
const greet = (name) => {
    
}