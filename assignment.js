const student = {
  name: "Sarthak",
  age: 22,
  grade: "A",
  subject:"qwer"
};
console.log(student);

/////////Assignment 1://///////////////

const book = {
  title: "zxcvbn",
  author: "Jaasdfghjk",
  details: {
    pages: 25000,
    genre: "Programming"
  }
};
console.log(book.details.pages);
console.log(book.details.genre);


/////////////////Assignment 2 ////////////////


const product = {
  name: "Laptop",
  price: 5000,
  stock: 15
};

for (let key in product) {
  console.log(key + " : " + product[key]);
}



///////////////////Assignment 3: /////////////////////


const person1 = {
  name: "Ramesh",
  age: 25
};

const person2 = {
  name: "Sankalp",
  age: 25
};

// Compare name
if (person1.name === person2.name) {
  console.log("Names are same");
} else {
  console.log("Names are different");
}

// Compare age
if (person1.age === person2.age) {
  console.log("Age is same");
} else {
  console.log("Age is different");
}


/////////////////////Assignment 5:////////////////////////

