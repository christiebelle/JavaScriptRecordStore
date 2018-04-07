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

RecordStore.prototype.financials = function () {
  let inventorySum = _.sumBy(this.inventory, 'price');
  return `Financials for ${this.name}. Store balance is £${this.balance}, and the stock total is £${inventorySum}`;
};

//PENDING
// RecordStore.prototype.listInventory = function () {
//   return _.orderBy(this.inventory, ['artist', 'title'], ['asc', 'asc']);
// };

module.exports = RecordStore;
