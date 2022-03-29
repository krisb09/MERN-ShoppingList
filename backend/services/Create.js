const List = require("../models/ShoppingList");

module.exports = async (dataObj) => {
  try {
    await List.insertMany(dataObj);
    return true;
  } catch (err) {
    return false;
  }
};


