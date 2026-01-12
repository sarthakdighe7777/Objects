const user = {
    name: "Sarthak",
    age: 23,
    isStudent: true
};
console.log(user);


/////////////// 1. What are Objects///////////////

const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2026
};
console.log(car);


/////////////////2. How to Create an Object.....Method 1: Object Literal//////////////////
const cars = new Object();
car.brand = "Tesla";
car.model = "Model 5";
car.year = 2026;
console.log(cars);


/////////////////////Method 2: Using/////////////////////////

console.log(car.brand); // Output: "Toyota"


/////////////////////3. Accessing Object Properties......Dot Notation://///////////////////////////

console.log(car["model"]); // Output: "Camry"

//////////////////Bracket Notation://////////////////

const key = "year";
console.log(car[key]); // Output: 2026


///////////////Dynamic Property Access://///////////////

car.color = "Red";
console.log(car);


//////////////////4. Modifying Objects .....Add a Property:///////////////

car.year = 2025;
console.log(car);

//////////////////Update a Property://////////////////////////

delete car.model;
console.log(car);

///////////////////////Delete a Property://////////////////


const student = {
    name: "Sarthak",
    age: 23,
    grade: "A"
};

for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}


//////////////5. Looping Through an Object////////////////////


const person = {
    name: "Ram",
    contact: {
        phone: "987-654-3210",
        email: "ram@example.com"
    }
};
console.log(person.contact.phone); // Output: "987-654-3210"



////////////////////6. Nested Objects//////////////////////

const users = {
    name: "Sarthak",
    greet: function () {
        console.log(`Hello, my name is ${this.name}!`);
    }
};

users.greet(); // Output: "Hello, my name is Harshada!"


////////////////////7. Object Methods///////////////////////


console.log(Object.keys(users)); // ["name", "greet"]


////////////////8. Common Object Methods..............Object.keys //////////////////////

console.log(Object.values(users)); // ["Alice", [Function: greet]]

/////////////////////Object.values///////////////////////////////

console.log(Object.entries(users));
// [["name", "Alice"], ["greet", [Function: greet]]]


/////////////////Object.entries/////////////////////////////////

const people = [
  {
    name: "Raj",
    lname: "Doe",
    age: 50,
    country: "India",
    gender: "male"
  }
];

const Data = JSON.stringify(people);
console.log(Data);


//////////////9. JSON Operations://////////////////////////////

  
