const mongoose = require('mongoose');
const schema = mongoose.Schema;

const prescriptionSchema = new schema({
    patientId: {
        type: schema.Types.ObjectId,
        ref: 'patient'
    },
    patientName: {
        type: String
    },
    doctorId: {
        type: schema.Types.ObjectId,
        ref: 'doctor'
    },
    doctorName: {
        type: String
    },
    m1: {
        type: [String]
    },
    m2: {
        type: [String]
    },
    m3: {
        type: [String]
    },
    m4: {
        type: [String]
    },
    m5: {
        type: [String]
    },
    reports: {
        type: String
    },
    advice: {
        type: String
    },
    date: {
        type: String
    }
})

module.exports = mongoose.model('prescription', prescriptionSchema);