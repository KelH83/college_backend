const cors = require('cors');
const express = require("express");
const app = express();
app.use(express.json());

app.use(cors());

const {
  getAllStudents,
  getSingleStudent,
} = require("./students.controllers");


//ROUTERS -------------

app.get("/", getAllStudents);
app.get("/:student_id", getSingleStudent);

module.exports = app;