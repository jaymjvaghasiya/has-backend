const mongoose = require('mongoose');
const schema = mongoose.Schema;

const doctorDocumentSchema = new schema({
    documentName: {
        type: String
    },
    doctor: {
        type: schema.Types.ObjectId,
        ref: 'doctor'
    },
    documentPath: {
        type: String
    }
})

module.exports = mongoose.model('doctorDocument', doctorDocumentSchema);