const mongoose = require('mongoose');
const schema = mongoose.Schema;

const rateListSchema = new schema({
    name: {
        type: String
    },
    amount: {
        type: String
    },
    rateType: {
        type: schema.Types.ObjectId,
        ref: 'rateType'
    },
    department: {
        type: schema.Types.ObjectId,
        ref: 'department'
    }
})

module.exports = mongoose.model('rateList', rateListSchema);