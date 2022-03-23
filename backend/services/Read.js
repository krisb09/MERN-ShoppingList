const Items = require("../models/ShoppingList");

module.exports = async () => {
  try {
    const results = await Items.find();

    return results;
  } catch (err) {
    return []
  }
};