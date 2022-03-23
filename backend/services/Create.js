const Items = require("../models/ShoppingList");

module.exports = async (dataObj) => {
  try {
    await Items.insertMany(dataObj);
    return true;
  } catch (err) {
    return false;
  }
};
