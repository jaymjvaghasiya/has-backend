const mongoose = require('mongoose');
const schema = mongoose.Schema;

const materialSchema = new schema({
    materialName: {
        type: schema.Types.ObjectId,
        ref: 'package'
    },
    description: {
        type: schema.Types.ObjectId,
        ref: 'rateList'
    }
})

module.exports = mongoose.model('material', materialSchema);