const axios = require("axios")


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

module.exports ={ fetchStudents, fetchSingleStudent}

