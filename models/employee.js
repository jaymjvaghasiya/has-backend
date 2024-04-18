const mongoose = require('mongoose');
const schema = mongoose.Schema;

const employeeSchema = new schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    titleName: {
        type: String
    },
    gender: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    qualification: {
        type: String
    },
    role: {
        type: schema.Types.ObjectId,
        ref: 'role'
    },
    contactNum: {
        type: String,
        unique: true
    },
    activeInd: {
        type: Boolean
    },
    dateOfJoining: {
        type: String
    },
    aadharCardPath: {
        type: String,
    }
    // qualificationDocPath: {
    //     type: String
    // },
})

module.exports = mongoose.model('employee', employeeSchema);