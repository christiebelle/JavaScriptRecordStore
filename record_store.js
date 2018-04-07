const _ = require("lodash");

var RecordStore = function(name, city, balance) {
  this.name = name;
  this.city = city;
  this.balance = balance;
  this.inventory = [];
}

RecordStore.prototype.addRecord = function (record) {
  this.inventory.push(record);
};

//PENDING
// RecordStore.prototype.listInventory = function () {
//   return _.orderBy(this.inventory, ['artist', 'title'], ['asc', 'asc']);
// };

module.exports = RecordStore;
