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
    dateOfJoining: {
        type: String
    },
    qualification: {
        type: String
    },
    role: {
        type: schema.Types.ObjectId,
        ref: 'role'
    },
    aadharCardPath: {
        type: String,
        // unique: true
    },
    panCardPath: {
        type: String,
        // unique: true
    },
    qualificationDocPath: {
        type: String
    },
    activeInd: {
        type: Boolean
    },
    contactNum: {
        type: String,
        unique: true
    }
})

module.exports = mongoose.model('employee', employeeSchema);