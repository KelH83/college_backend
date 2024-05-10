const {
    fetchStudents,
    fetchSingleStudent,
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

  module.exports = {
    getAllStudents,
    getSingleStudent
  };