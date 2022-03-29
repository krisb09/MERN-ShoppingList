const List = require("../models/ShoppingList");

module.exports = async () => {
  try {
    const results = await List.find();

    return results;
  } catch (err) {
    return []
  }
};

