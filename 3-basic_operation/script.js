console.log('start')

// var x, y, z;    // Statement 1
// x = 5;          // Statement 2
// y = 6;          // Statement 3
// z = x + y;      // Statement 4
// console.log(z)

// console.log(x * y)
// console.log(x / y)


// function myFunction(a, b) {
//     return a * b;             // Function returns the product of a and b
// }

// var x = myFunction(4, 3);   // Function is called, return value will end up in x
// console.log(x)


// var Name = "Johnson";  // String
// console.log(Name)

// console.log(Name.length)

// console.log(Name.indexOf("so"))

// console.log(Name.slice(2, 4))  // 2-starting index of slice, 4-ending index

// //Array

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits)

// fruits.pop()
// console.log(fruits)

// fruits.push("Kiwi");
// console.log(fruits)

// fruits[0] = "Plum"
// console.log(fruits)

// fruits.splice(2, 0, "Lemon", "Peach");
// console.log(fruits)
// //The first parameter (2) defines the position where new elements should be added (spliced in).
// //The second parameter (0) defines how many elements should be removed.

// //Date

// var d = new Date(2018, 11, 24);
// console.log(d)

// var d = new Date("October 13, 2014 11:13:00");
// console.log(d)

// //comparison
// var a = 5
// var b = 5
// var c = 4
// var a_string = "5"
// console.log(a == b)
// console.log(a == c)

// console.log(a == a_string)
// console.log(a === a_string) //important

// console.log(a > c)

// console.log(a < c && a == b)   //and

// console.log(a > c || a == b)   //or

// console.log(!(a > c))


// //if else

// hour = 8;
// if (hour < 10) {
//     greeting = "Good morning";
// } else if (hour < 14) {
//     greeting = "Good afternoon";
// }
// else {
//     greeting = "Good evening";
// }
// console.log(greeting)

// //for loop
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// for (i = 0; i < fruits.length; i++) {
//     console.log(fruits[i])
// }

// var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
// var text = "";
// var i;
// for (i = 0; i < cars.length; i++) {
//     text += cars[i] + "<br>";
// }
// document.getElementById("demo").innerHTML = text;