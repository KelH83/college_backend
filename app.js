const cors = require('cors');
const express = require("express");
const app = express();
app.use(express.json());

app.use(cors());

const {
  getAllStudents,
  getSingleStudent,
  postNewStudent,
  deleteStudent
} = require("./students.controllers");


//ROUTERS -------------

app.get("/", getAllStudents);
app.get("/:student_id", getSingleStudent);
app.delete("/:student_id", deleteStudent);

module.exports = app;