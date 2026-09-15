const mongoose = require('mongoose')
const Schema = mongoose.Schema
const StudentSchema = new Schema({
    rollno: {type: String, required: true},
    studentName: {type: String, required: true},
    fatherName: {type: String, required: true},
    aadharCardNo: {type: String, required: true},
    mobileNo: {type: String, required: true}
})
module.exports = mongoose.model('Student', StudentSchema)