const axios = require("axios")
// import axios from "axios"


const fireApi = axios.create({baseURL: 'https://firestore.googleapis.com/v1/'})

function fetchStudents(){
    return fireApi.get(`/projects/jwbackend-36662/databases/(default)/documents/students`).then((response) => {
        const arrayOfData = response.data.documents.map((doc) => {
            const student_id = doc.name.split('projects/jwbackend-36662/databases/(default)/documents/students/')
            return {
                'student_id':student_id[1],
                'name': doc.fields.name.stringValue,
                'email': doc.fields.email.stringValue,
                'address': doc.fields.address.stringValue,
                'dateOfBirth': doc.fields.dateOfBirth.stringValue
            }
        })
        return arrayOfData;
        
    })
}


function fetchSingleStudent(studentid){
    return fireApi.get(`/projects/jwbackend-36662/databases/(default)/documents/students/${studentid}`).then((response) => {
        const studentArray = {
            name: response.data.fields.name.stringValue,
            dateOfBirth: response.data.fields.dateOfBirth.stringValue,
            address: response.data.fields.address.stringValue,
            email: response.data.fields.email.stringValue
        }
        return studentArray
    })
}

function addStudent(newStudent){
    const date = new Date();
    const timestamp = new Date().getTime().toString();
    const payload = {fields: {
        name:{
            stringValue: newStudent.name
        },
        email:{
            stringValue: newStudent.email
        },
        address:{
            stringValue: newStudent.address
        },
        dateOfBirth:{
            stringValue: newStudent.dateOfBirth
        },
    }}
    return fireApi.post(`/projects/jwbackend-36662/databases/(default)/documents/students/?documentId=${timestamp}`, payload).then((response) => {
    return response
    })
}

function updateStudent(student_id, studentUpdate){
    const payload = {fields: {
        name:{
            stringValue: studentUpdate.name
        },
        email:{
            stringValue: studentUpdate.email
        },
        address:{
            stringValue: studentUpdate.address
        },
        dateOfBirth:{
            stringValue: studentUpdate.dateOfBirth
        },
    }}
    
    return fireApi.patch(`/projects/jwbackend-36662/databases/(default)/documents/students/${student_id}`, payload).then((response) => {
    return response
    })
}


function removeStudent(student_id){
    return fireApi.delete(`/projects/jwbackend-36662/databases/(default)/documents/students/${student_id}`).then(() => {
    })
}



module.exports ={ fetchStudents, fetchSingleStudent, addStudent, updateStudent,removeStudent}

