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

RecordStore.prototype.sell = function (Record, Customer) {
  if(Customer.wallet >= Record.price){
    this.balance += Record.price;
    Customer.wallet -= Record.price;
    Customer.collection.push(record);
    let soldRecord = _.indexOf(record);
    this.inventory.splice(soldRecord, 1,);
}else{
  return `Sorry. You do not have enough money to buy ${Record.name}`;
};
};

RecordStore.prototype.filterGenre = function (genre) {
  let filtered = _.filter(this.inventory, ['genre' === genre]);
  return filtered;
};

//PENDING
// RecordStore.prototype.listInventory = function () {
//   return _.orderBy(this.inventory, ['artist', 'title'], ['asc', 'asc']);
// };

module.exports = RecordStore;
