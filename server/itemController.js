var Item = require('./itemModel.js');
var Q = require('q');

var makeItem = Q.nbind(Item.create, Item);
var getAll = Q.nbind(Item.find, Item);
var updateItem = Q.nbind(Item.findOneAndUpdate, Item);

var createItem = function(item, callback) {
  makeItem(item)
  .then(function(newItem){
    callback(newItem);
  })
  .fail(function(err){
    console.error(err);
  });
};

var getAllItems = function(callback) {
  getAll({})
  .then(function(items){
    callback(items);
  })
  .fail(function(err){
    console.error(err);
  });
};

// var updateAnItem = function(itemName, newParameters, callback) {
//   if(newParameters.price) {
//     updateItem({name:itemName}, {$set: {}})
//   }

// }
module.exports.createItem = createItem;
module.exports.getAllItems = getAllItems;