const mongoose = require('mongoose');
const schema = mongoose.Schema;

const packageItemSchema = new schema({
    package: {
        type: schema.Types.ObjectId,
        ref: 'package'
    },
    item: {
        type: schema.Types.ObjectId,
        ref: 'item'
    }
})

module.exports = mongoose.model('packageItem', packageItemSchema);