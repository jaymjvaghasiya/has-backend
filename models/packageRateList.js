const mongoose = require('mongoose');
const schema = mongoose.Schema;

const packageRateListSchema = new schema({
    package: {
        type: schema.Types.ObjectId,
        ref: 'package'
    },
    rateList: {
        type: schema.Types.ObjectId,
        ref: 'rateList'
    }
})

module.exports = mongoose.model('packageRateList', packageRateListSchema);