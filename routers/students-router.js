const studentsRouter = require('express').Router();
const {
    getAllStudents,
    getSingleStudent,
    postNewStudent,
    patchStudent,
    deleteStudent
  } = require("../students.controllers");

studentsRouter.get('/', getAllStudents);
studentsRouter.get('/:student_id', getSingleStudent);
studentsRouter.post('/', postNewStudent);
studentsRouter.patch('/:student_id', patchStudent);
studentsRouter.delete('/:student_id', deleteStudent);


module.exports = studentsRouter;