const express = require("express");
const app = express();
const port = 3000;

var students = [
  {
    enrollment_no: "123456789",
    name: "krupansu",
    branch: "it",
    sem: 6,
    div: "b",
    roll_no: 35,
  },
];

app.get("/", (req, res) => res.json(students));
app.listen(port, () =>
  console.log(`Server Started at http://loclhost:${port}!`)
);
