const mongoose = require('mongoose');
const schema = mongoose.Schema;

const patientSchema = new schema({
    firstName: {
        type: String,
    },
    middleName: {
        type: String,
    },
    lastName: {
        type: String,
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
    age: {
        type: String
    },
    dob: {
        type: String
    },
    bloodGroup: {
        type: String
    },
    role: {
        type: schema.Types.ObjectId,
        ref: 'role'
    },
    maritalStatus: {
        type: String
    },
    address: {
        type: String
    },
    country: {
        type: String
    },
    state: {
        type: String
    },
    city: {
        type: String
    },
    pincode: {
        type: String
    },
    contactNum: {
        type: String,
        unique: true
    },
    alternatievNo: {
        type: String
    },
    diseases: {
        type: String
    },
    registrationType: {
        type: String
    },
    docType: {
        type: String
    },
    remark: {
        type: Boolean
    },
    docPath: {
        type: String
    },
    referredBy: {
        type: String
    },
    status: {
        type: String
    }
})

module.exports = mongoose.model('patient', patientSchema);