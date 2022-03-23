const mongoose = require('mongoose');

const ShoppingListSchema = mongoose.Schema({
    item: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('List', ShoppingListSchema);