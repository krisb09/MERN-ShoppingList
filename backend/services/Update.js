const List = require("../models/ShoppingList");

module.exports = async (_id, set) => {
  try {
    await List.updateOne({_id}, {$set: set});
    
    return true;
  } catch (err) {
    return false;
  }
};
