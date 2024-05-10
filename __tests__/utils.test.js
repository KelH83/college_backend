const request = require("supertest");
const app = require("../app.js");

describe("GET /", () => {
    test("Should return an array with all of the students", () => {
      return request(app)
        .get("/")
        .expect(200)
        .then((response) => {
          const data = response.body.students;
          data.forEach((student) => {
            expect(student.hasOwnProperty("student_id")).toBe(true);
            expect(student.hasOwnProperty("name")).toBe(true);
            expect(student.hasOwnProperty("email")).toBe(true);
            expect(student.hasOwnProperty("address")).toBe(true);
            expect(student.hasOwnProperty("dateOfBirth")).toBe(true);
        
          });
        });
    });
});

describe("GET /:student_id", () => {
    test("Should return the correct student information when passed a student id", () => {
      return request(app)
        .get("/01")
        .expect(200)
        .then((response) => {
          const data = response.body.student;
          expect(data.hasOwnProperty("name")).toBe(true);
          expect(data.hasOwnProperty("email")).toBe(true);
          expect(data.hasOwnProperty("address")).toBe(true);
          expect(data.hasOwnProperty("dateOfBirth")).toBe(true);
          
        });
    });
});

describe("DELETE /:student_id", () => {
    test("Should delete a student when passed an existing id", () => {
      return request(app)
        .delete("/06")
        .expect(200)
    });
});