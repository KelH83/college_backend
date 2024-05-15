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
  beforeEach(() => {
    return request(app)
      .patch("/testDelete")
      .send(
        {
          "fields": {
            "name": {
              "stringValue": "Kelly Howes"
            },
            "email": {
              "stringValue": "exampleemail@test.com"
            },
            "address": {
              "stringValue": "123 Planet Earth"
            },
            "dateOfBirth": {
              "stringValue": "31/08/1983"
            }
          }
        }
        )
  });
    test("Should delete a student when passed an existing id", () => {
      return request(app)
        .delete("/testDelete")
        .expect(200)
    });
});

describe("POST /", () => {
    test("Should add a student to the database", () => {
      return request(app)
        .post("/")
        .send(
          {
            "fields": {
              "name": {
                "stringValue": "Kiyomi Dogue"
              },
              "email": {
                "stringValue": "shihtzu@testing.com"
              },
              "address": {
                "stringValue": "123 Planet Earth"
              },
              "dateOfBirth": {
                "stringValue": "01/04/2016"
              }
            }
          }
          )
        .expect(201)
        .then((response) => {
            console.log(response.body.msg);
          });
    });
});

describe("PATCH /:student_id", () => {
  beforeEach(() => {
    return request(app)
      .patch("/testPatch")
      .send(
        {
          "fields": {
            "name": {
              "stringValue": "Other dog"
            },
            "email": {
              "stringValue": "exampleemail@test.com"
            },
            "address": {
              "stringValue": "456 ABC Street"
            },
            "dateOfBirth": {
              "stringValue": "01/01/2016"
            }
          }
        }
        )
  });
  test("Should update a student in the database", () => {
    return request(app)
      .patch("/testPatch")
      .send(
        {
          "fields": {
            "name": {
              "stringValue": "Kimiko Dogue"
            },
            "email": {
              "stringValue": "poodlemix@test.com"
            },
            "address": {
              "stringValue": "123 Planet Earth"
            },
            "dateOfBirth": {
              "stringValue": "12/09/2016"
            }
          }
        }
        )
      .expect(200)
      .then((response) => {
          console.log(response.body.msg);
        });
  });
  afterEach(() => {
    return request(app)
    .delete("/testPatch")
  });
});