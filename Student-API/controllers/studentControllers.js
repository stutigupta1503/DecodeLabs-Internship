const students = require('../student.json');
const fs = require('fs');
const path = require('path');

function getStudents(req, res) {
    try {
        res.json(students);
    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
}

function getStudentById(req, res) {
    try {
        const rollNo = req.params.rollNo;

        console.log("Roll No:", rollNo);

        const student = students.find(
            (student) => student.rollNo == rollNo
        );

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.json(student);

    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
}

function addStudent(req, res) {
    try {
        console.log(req.body);

        students.push(req.body);

        const filePath = path.join(__dirname, '../student.json');

        fs.writeFile(
            filePath,
            JSON.stringify(students, null, 2),
            (err) => {

                if (err) {
                    console.log(err);
                    return res.status(500).send(
                        "Problem in writing a file"
                    );
                }

                console.log("Student has been added...");

                res.status(201).json({
                    message: "Student has been added successfully",
                    student: req.body
                });
            }
        );

    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
}

module.exports = {
    getStudents,
    getStudentById,
    addStudent
};