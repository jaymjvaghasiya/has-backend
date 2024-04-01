const mongoose = require('mongoose');
const schema = mongoose.Schema;

const itemSchema = new schema({
    materialGroupName: {
        type: String
    },
    materialName: {
        type: schema.Types.ObjectId,
        ref: 'material'
    },
    itemCode: {
        type: String
    },
    itemName: {
        type: String
    },
    alternateName: {
        type: String
    },
    shortName: {
        type: String
    },
    gstRate: {
        type: String
    },
    HsnRate: {
        type: String
    },
    price: {
        type: String
    }
})

module.exports = mongoose.model('item', itemSchema);