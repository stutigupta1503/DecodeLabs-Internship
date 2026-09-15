const Student = require('../models/Student')

async function addStudent(req, res) {
    try {
        console.log(req.body)
        const student = new Student(req.body)
        await student.save();
        res.render('addStudentSuccess')
    } catch(err) {
        console.log(err);
    }
}
 const getStudents = async (req,res) => {
    try{
        let students = await Student.find({});
        res.render('studentList', {
            students: students
        })
    } catch (err) {
        console.log(err)
    }
}
async function getStudentForEdit(req, res) {
    try {
        let id = req.params.id;
        console.log(id)
        let student = await Student.findOne({_id: id});
        console.log(student)
        res.render('studentEditPage',{
            student: student
        })
    } catch (err) {
        console.log(err);
    }
}
async function editStudent(req, res) {
    try {
        let id = req.params.id;
        console.log(req.body)
        let student = await Student.findOne({_id:id});
        student.rollno = req.body.rollno;
        student.studentName = req.body.studentName;
        student.fatherName = req.body.fatherName;
        student.aadharCardNo = req.body.aadharCardNo;
        student.mobileNo = req.body.mobileNo;
        await student.save();
        let students = await Student.find({})
        res.render('studentList',{students: students})
    } catch (err) {
        console.log(err);
    }
}
async function deleteStudent(req, res) {
    try {
        let id= req.params.id;
        await Student.deleteMany({_id: id});
        let students = await Student.find({});
        res.render('studentList', {
            students: students
        })
    }catch (err) {
        console.log(err)
    }
}
module.exports = {
    addStudent,
    getStudents,
    getStudentForEdit,
    editStudent,
    deleteStudent
}