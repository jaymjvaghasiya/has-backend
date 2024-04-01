const mongoose = require('mongoose');
const schema = mongoose.Schema;

const packageSchema = new schema({
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
    packageType: {
        type: String
    }
})

module.exports = mongoose.model('package', packageSchema);