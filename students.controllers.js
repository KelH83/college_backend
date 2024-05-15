const {
    fetchStudents,
    fetchSingleStudent,
    addStudent,
    updateStudent,
    removeStudent,
  } = require("./students.models");

  function getAllStudents(req, res, next) {
    fetchStudents()
      .then((students) => {
        res.status(200).send({ students });
      })
      .catch((err) => {
        next(err);
      });
  }

  function getSingleStudent(req, res, next) {
    const studentId = req.params.student_id;
    fetchSingleStudent(studentId)
      .then((student) => {
        res.status(200).send({ student });
      })
      .catch((err) => {
        next(err);
      });
  }

  function postNewStudent(req, res, next) {
    const studentData = req.body;
    addStudent(studentData)
      .then((response) => {
        res.status(201).send({msg: "Student successfully added" });
      })
      .catch((err) => {
        next(err);
      });
  }

  function patchStudent(req, res, next) {
    const studentData = req.body;
    const student_id = req.params.student_id
    updateStudent(student_id, studentData)
      .then(() => {
        res.status(200).send({msg: "Student successfully updated" });
      })
      .catch((err) => {
        next(err);
      });
  }

  function deleteStudent(req, res, next) {
    const studentId = req.params.student_id;
    removeStudent(studentId)
      .then(() => {
        res.status(200).end()
      })
      .catch((err) => {
        next(err);
      });
  }

  module.exports = {
    getAllStudents,
    getSingleStudent,
    postNewStudent,
    patchStudent,
    deleteStudent,
  };