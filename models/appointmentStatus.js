const mongoose = require('mongoose');
const schema = mongoose.Schema;

const appointmentStatusSchema = new schema({
    statusName: {
        type: String
    }
})

module.exports = mongoose.model('appointmentStatus', appointmentStatusSchema);