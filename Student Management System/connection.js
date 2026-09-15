const mongoose = require('mongoose')
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/mern2026frontend')
        console.log("DB connected...")
} catch (err) {
    console.log(err)
}
}
module.exports = connect