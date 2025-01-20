// console.log(" hi from test js ")

//---------------------------------------------------------------------

// fromgiven arr form the create array

// var evenArray = [2, 3, 4, 5, 6];

// const getEvenNumbers = (array) => {
//     return array.filter((e) => e % 2 == 0);
// };

// console.log(getEvenNumbers(evenArray));

//---------------------------------------------------------------------

const express = require ("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/student", (req, res) => res.send("krupansu!"));
app.get("/university", (req, res) => res.send("rk!"));
app.listen(port , ()=> console.log(`examole app listening on port ${port}!`));   


//create n point / student to display student name 
// university name to display university name
// collage to display to collage name 

//create n point to perform curd oprations for students
//enrollment number, name, branch, sem, div, roll number 