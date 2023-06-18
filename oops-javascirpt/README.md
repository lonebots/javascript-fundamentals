## OOPS in Javascript

**1. Object Literal syntax :**
We can define a class like object in javascript using object literals, Here the behaviour(method) of an object creates problem when trying to create another instance.

```javascript
const circle = {
  // properties
  radius: 1,
  pose: {
    x: 1,
    y: 1,
  },

  //method
  draw: function () {
    console.log("draw a circle");
  },
};

// accessed using `.` operator
circle.draw();
```

To solve that issue, either we should remove the methods or we should use Factory functions or constructors

**2. Factory functions :**
Defined as given below, it a normal function that returns a javascript object.

```javascript
function CreateCircle(radius) {
  return {
    radius,
    draw: function () {
      return "draw circle from CreateCircle";
    },
  };
}

const circle1 = CreateCircle(3);
console.log(`circle draw : ${circle1.draw()} and radius : ${circle1.radius}`);
```

**3. Contstructors :**
Constructors are properties of every object in javascript, and it's name starts with a _Capital letter_. **new** keyword is used to create an instance and **this** keyword is used to refer the current instance.

_Note : if **new** keyword is not used the default reference goes to **window** object_

```javascript
function Circle(radius) {
  console.log("this", this);
  this.radius = radius;
  this.draw = function () {
    return "draw circle from constructor";
  };
}

// usage of new keyword
circle2 = new Circle(4);
console.log("constructor circle method :", circle2.draw());
console.log("constructor circle radius : ", circle2.radius);
```

## Summary 📚

- A combination of **property(ies)** and **method(s)** of a related entity can be converted to a class in javascript.
- Each class is a tempalte for creating an object
- Objects are functions!!!

## Objects are functions!

- Every object in javascript is a function and objects are created using default prototyping function called **constructors**, There are other common constructors like _Number(), String(), Boolean(), etc_.

## Data types in Javascript

- Two main data-types available in javascripts are

**1. Primitive datatype :**
includes String, Boolean, Number, Undefined, Null, symbol, Bigint, Object. Primitives are copied by values.

**2. Non Primitive datatype :**
includes Functions, Objects, Arrays. Non primitives are copied by reference

Example :

```javascript
// copy by value
x = 10;
y = x;
console.log("x : ", x, "y : ", y); // the are both different if changing x value, it won't affect y

// copy by reference : both x and y points to same memory location
x = { value: 10 };
y = x;
```

## Adding/Removing properties :

## Defining classes in javascript :

The classes can be easily created using _class_ keyword using Declaration of Expression syntax :

```javascript
// Declaration
class Circle {
    constructor(radius){
        this.radius = radius;
    }

    function draw(){
        console.log('draw a circle')
    }
}

// Expression
const circle = class{
    constructor(radius){
        this.radius = radius;
    }

    function draw(){
        console.log('draw a circle')
    }
}
```
