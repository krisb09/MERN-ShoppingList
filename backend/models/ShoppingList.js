const mongoose = require('mongoose');

const ShoppingListSchema = mongoose.Schema({
    items: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('List', ShoppingListSchema);