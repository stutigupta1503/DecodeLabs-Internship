const express = require('express');

const route = express.Router();

const {
    getStudents,
    getStudentById,
    addStudent
} = require('../controllers/studentControllers');


route.get('/students', getStudents);

route.get('/students/:rollNo', getStudentById);

route.post('/add/student', addStudent);


module.exports = route;