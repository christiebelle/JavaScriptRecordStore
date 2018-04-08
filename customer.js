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

Customer.prototype.valueOfCollection = function (record) {
  let value = _.sumBy(this.collection, 'price');
  return value;
};

module.exports = Customer;
