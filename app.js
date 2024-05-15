const cors = require('cors');
const express = require("express");
const app = express();
app.use(express.json());

app.use(cors());

const {
  getAllStudents,
  getSingleStudent,
  postNewStudent,
  patchStudent,
  deleteStudent
} = require("./students.controllers");


//ROUTERS -------------

app.get("/", getAllStudents);
app.get("/:student_id", getSingleStudent);
app.post("/", postNewStudent);
app.patch("/:student_id", patchStudent);
app.delete("/:student_id", deleteStudent);

module.exports = app;