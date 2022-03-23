const Items = require('../models/ShoppingList');

module.exports = async (_id) => {
    try {
        await Items.deleteOne({ _id })
        return true
    } catch (err) {
        return false
    }
};