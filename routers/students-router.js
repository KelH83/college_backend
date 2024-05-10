const studentsRouter = require('express').Router();
const {
    getAllStudents,
    getSingleStudent,
    postNewStudent,
    deleteStudent
  } = require("../students.controllers");

studentsRouter.get('/', getAllStudents);
studentsRouter.get('/:student_id', getSingleStudent);
studentsRouter.delete('/:student_id', deleteStudent);



module.exports = studentsRouter;