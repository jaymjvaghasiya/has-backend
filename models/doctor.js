const mongoose = require('mongoose');
const schema = mongoose.Schema;

const doctorSchema = new schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    titleName: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    gender: {
        type: String
    },
    qualification: {
        type: String
    },
    specialization: {
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
    joinDate: {
        type: String
    },
    documentName: {
        type: String
    },
    documentPath: {
        type: String
    }
    // serviceType: {
    //     type: schema.Types.ObjectId,
    //     ref: 'serviceType'
    // }
})

module.exports = mongoose.model('doctor', doctorSchema);