var mongoose = require('mongoose')

var appSchema = mongoose.Schema

var studentSchema = new appSchema({
    fullName: String,
    email: String,
    faculty: String,
    birthDate: Date,
    grades: [{
        dateExam: Date,
        grade: Number,
        _id: false
    }]
})

module.exports = mongoose.model('students', studentSchema)

