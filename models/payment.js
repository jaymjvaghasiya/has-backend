const mongoose = require('mongoose');
const schema = mongoose.Schema;

const paymentSchema = new schema({
    patient: {
        type: schema.Types.ObjectId,
        ref: 'patient'
    },
    transcationRef: {
        type: String
    },
    date: {
        type: String
    },
    amount: {
        type: String
    },
    remarks: {
        type: String
    }
})

module.exports = mongoose.model('payment', paymentSchema);