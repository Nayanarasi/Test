//importing mongoose pkg and assigning a variable to that
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const studentSchema = new Schema ({//creating a schema
    //properties of a student
    name : {
        type : String,
        required : true //check if this has a value
    },
    age : {
        type : Number,
        required : true
    },
    gender : {
        type : String,
        required : true
    }
})
//
const Student = mongoose.model("Student", studentSchema);

module.exports = Student;