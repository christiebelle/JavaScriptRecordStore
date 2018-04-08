const _ = require("lodash");

var Customer = function(name, wallet) {
  this.name = name;
  this.wallet = wallet;
  this.collection = [];
}

Customer.prototype.addRecordToCollection = function (record) {
  this.collection.push(record);
};

Customer.prototype.sellRecord = function (record) {
  this.collection.push(record);
};

Customer.prototype.sort = function () {
  let sorted = _.sortBy(this.collection);
};

Customer.prototype.valueOfCollection = function () {
  let value = _.sumBy(this.collection, 'price');
  return value;
};

Customer.prototype.filteredValueOfCollection = function (genre) {
  let filtered = _.filter(this.collection, ['genre' === genre]);
  return filtered;
  let value = _.sumBy(filtered, 'price');
  return value;
};

module.exports = Customer;
