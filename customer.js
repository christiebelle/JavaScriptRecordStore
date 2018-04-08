const _ = require("lodash");

var Customer = function(name, wallet) {
  this.name = name;
  this.wallet = wallet;
  this.collection = [];
}

Customer.prototype.addRecordToCollection = function (record) {
  this.collection.push(record);
};

Customer.prototype.buyRecord = function (record) {
  this.collection.push(record);
};

Customer.prototype.sellRecord = function (record) {
  this.collection.push(record);
};

module.exports = Customer;
