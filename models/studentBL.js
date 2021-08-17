var Student = require('./studentSchema')

var getAllStudents = () => {
    return new Promise((resolve, reject)=>{
        Student.find({}, (err, data)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(data)
            }
        })
    })
}

var getStudentById = (studentId) => {
    return new Promise((resolve,reject)=>{
        Student.findById(studentId, (err,data)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(data)
            }
        })
    })
}

var addStudent = (newStudent)=>{
    return new Promise((resolve, reject)=>{
        var student = new Student({
            fullName: newStudent.fullName,
            email: newStudent.email,
            faculty: newStudent.faculty,
            birthDate: new Date(newStudent.birthDate)
            // grades: []
        })
        student.save((err)=>{
            if(err){
                reject(err)
            }
            else{
                resolve("The student has been added!")
            }
        })
    })
}

var updateStudent = (studentId, updateStudent)=>{
    return new Promise((resolve, reject)=>{
        Student.findByIdAndUpdate(studentId, {
            fullName: updateStudent.fullName,
            email: updateStudent.email,
            faculty: updateStudent.faculty,
            birthDate: new Date(updateStudent.birthDate),
            grades: updateStudent.grades
        }, (err)=>{
            if(err){
                reject(err)
            }
            else{
                resolve("Student has been updated!")
            }
        })
    })
}

var deleteStudent = (studentId)=>{
    return new Promise((resolve, reject)=>{
        Student.findByIdAndDelete(studentId, (err)=>{
            if(err){
                reject(err)
            }
            else{
                resolve("The student has been deleted!")
            }
        })
    })
}

module.exports = {getAllStudents, getStudentById, addStudent, updateStudent, deleteStudent}