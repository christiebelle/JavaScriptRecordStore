var assert = require('assert');
var Record = require('../records.js');
var RecordStore = require('../record_store.js');
var Customer = require('../customer.js');

describe('customer', function() {

  var record1;
  var record2;
  var record3;
  var record4;
  var recordstore;
  var customer1;
  var customer2;


  beforeEach(function() {
    record1 = new Record("Take That", "Never Forget: Greatist Hits", "Pop", 10.99);
    record2 = new Record("Kaleo", "A/B", "Indie Rock", 9.99);
    record3 = new Record("The Velvet Underground", "The Velvet Underground & Nico", "Rock", 12.99);
    record4 = new Record("2Pac", "2Pac Greatest Hits", "Rap", 10.99);
    record5 = new Record("10CC", "Guardians of the Galaxy", "Rock", 12.99);
    record6 = new Record("Ryan Adams", "Gold", "Rock", 11.99);
    recordstore = new RecordStore("Wee Music Shop", "Glasgow", 150);
    recordstore.addRecord(record1);
    recordstore.addRecord(record2);
    recordstore.addRecord(record3);
    customer1 = new Customer("Darren", 50);
    customer2 = new Customer("Rachael", 60);
    customer1.addRecordToCollection(record4);
    customer1.addRecordToCollection(record5);
    customer2.addRecordToCollection(record6);
  })

  it("should have a name", function() {
    assert.strictEqual(customer1.name, "Darren");
  });

  it("should have funds", function() {
    assert.strictEqual(customer2.wallet, 60);
  });

  it("should have a record collection", function() {
    assert.strictEqual(customer2.collection.length, 1);
  });

  it("should be able to buy a record", function() {
    recordstore.sell(record4, customer2);
    assert.strictEqual(customer2.collection.length, 2);
    assert.strictEqual(recordstore.inventory.length, 3);
    assert.strictEqual(recordstore.balance, 160.99);
    assert.strictEqual(customer2.wallet, 49.01);
  });

  it("should be able to view the value of their collection", function() {
    assert.strictEqual(customer1.valueOfCollection(), 23.98);
  });
});

// Part C
// Create a RecordCollector (or Customer) constructor who can buy and sell records. PENDING

// The RecordCollector should have cash that increase and decreases with buying and selling. PENDING

// The RecordCollector shouldn't be able to buy a Record if he can't afford it. PENDING

// The RecordCollector should be able to view the total value of all records of a given Genre

// The RecordCollector should be able to view their most valuable record.

// The RecordCollector should be able to sort their records by value. (ascending or descending)

// The RecordCollector should be able to compare the value of their collection with another
// RecordCollector
