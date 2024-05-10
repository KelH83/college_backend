const studentsRouter = require('express').Router();
const {
    getAllStudents,
    getSingleStudent,
  } = require("../students.controllers");

studentsRouter.get('/', getAllStudents);
studentsRouter.get('/:student_id', getSingleStudent);



module.exports = studentsRouter;