const List = require('../models/ShoppingList');

module.exports = async (_id) => {
    try {
        await List.deleteOne({ _id })
        return true
    } catch (err) {
        return false
    }
};

