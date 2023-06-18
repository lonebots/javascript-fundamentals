console.log('hello world')

// create class with object literal syntax 
// issue : replicating this creates problem if they have behaviours

const circle = {
    // properties
    radius: 1,
    pose: {
        x: 1,
        y: 1,
    },

    //method 
    draw: function () {
        console.log('draw a circle');
    }
}

circle.draw();


// when replicating the method draw() will create problem when we use this type of syntax

// factory or constructor
function CreateCircle(radius) {
    return {
        radius,
        draw: function () {
            return ('draw circle from CreateCircle')
        }
    }
}


const circle1 = CreateCircle(3)
console.log(`circle draw : ${circle1.draw()} and radius : ${circle1.radius}`)


// Constructor 
// naming convention : Start with Capital Letter ( other lang like Java, C it feels like Class )
function Circle(radius) {
    console.log('this', this)
    this.radius = radius;
    this.draw = function () {
        return ('draw circle from constructor')
    }
}

// usage of new keyword 
// when new is used, a new instance of the constructor is created and this keyword refers to that instance when it is not the case this keyword directly refers to global window object
circle2 = new Circle(4);
console.log('constructor circle method :', circle2.draw())
console.log('constructor circle radius : ', circle2.radius);

// when new keyword is not used : this refers to the window object 
circle3 = Circle();


// in javascript every object has a constructor property used to create that object some of the common constructors are 
// 1. Object()  --> 
// 2. Numbers() --> instead we use  1, 2, 3
// 3. String()  --> instead we use '', "", ``  
// 4. Boolean() --> isntead 
