const mongoose = require('mongoose');
const schema = mongoose.Schema;

const appointmentSchema = new schema({
    doctor: {
        type: schema.Types.ObjectId,
        ref: 'doctor'
    },
    patient: {
        type: schema.Types.ObjectId,
        ref: 'patient'
    },
    appointmentDate: {
        type: String
    },
    appointmentStatus: {
        type: String
    }
})

module.exports = mongoose.model('appointment', appointmentSchema);