var express = require('express')
var appRouter = express.Router()
var studentBL = require('../models/studentBL')

// GET all verb
appRouter.route('/').get(async(req, resp)=>{
    var students = await studentBL.getAllStudents()
    return resp.json(students)
})

// GET by id verb
appRouter.route('/:id').get(async(req, resp)=>{
    var studentId = req.params.id
    var student = await studentBL.getStudentById(studentId)
    return resp.json(student)
})

// POST verb
appRouter.route('/').post(async(req, resp)=>{
    var newStudent = req.body
    var answer = await studentBL.addStudent(newStudent)
    return resp.json(answer)
})

// PUT verb
appRouter.route('/:id').put(async(req, resp)=>{
    var studentId = req.params.id
    var studentObj = req.body
    var answer = await studentBL.updateStudent(studentId, studentObj)
    return resp.json(answer)
})

// DELETE verb
appRouter.route('/:id').delete(async(req,resp)=>{
    var studentId = req.params.id
    var answer = await studentBL.deleteStudent(studentId)
    return resp.json(answer)
})

module.exports = appRouter