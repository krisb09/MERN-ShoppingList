const Items = require("../models/ShoppingList");

module.exports = async (_id, set) => {
  try {
    await Items.updateOne({_id}, {$set: set});
    
    return true;
  } catch (err) {
    return false;
  }
};
