var assert = require('assert');
var Record = require('../records.js');
var RecordStore = require('../record_store.js');

describe('recordstore', function() {

  var record1;
  var record2;
  var record3;
  var record4;
  var recordstore;

  beforeEach(function() {
    record1 = new Record("Take That", "Never Forget: Greatist Hits", "Pop", 10.99);
    record2 = new Record("Kaleo", "A/B", "Indie Rock", 9.99);
    record3 = new Record("The Velvet Underground", "The Velvet Underground & Nico", "Rock", 12.99);
    record4 = new Record("2Pac", "2Pac Greatest Hits", "Rap", 10.99);
    recordstore = new RecordStore("Wee Music Shop", "Glasgow", 150);
  })

  it("should have a name", function() {
    assert.strictEqual(recordstore.name, "Wee Music Shop");
  });

  it("should have a location", function() {
    assert.strictEqual(recordstore.city, "Glasgow");
  });

  it("should have a balance", function() {
    assert.strictEqual(recordstore.balance, 150);
  });

  it("should have an empty inventory at start", function() {
    assert.strictEqual(recordstore.inventory.length, 0);
  });

  it("should be able to add record", function() {
    recordstore.addRecord(record1);
    recordstore.addRecord(record2);
    recordstore.addRecord(record3);
    recordstore.addRecord(record4);
    assert.strictEqual(recordstore.inventory.length, 4);
  });

  // xit("should be able to list inventory", function() {
  //   recordstore.addRecord(record1);
  //   recordstore.addRecord(record2);
  //   recordstore.addRecord(record3);
  //   recordstore.addRecord(record4);
  //   assert.deepStrictEqual(recordstore.listInventory(), [{"Kaleo", "A/B"}, {"Take That", "Never Forget: Greatist Hits"}]);
  // });

  it("should be able to state the financials of the store", function() {
    recordstore.addRecord(record1);
    recordstore.addRecord(record2);
    recordstore.addRecord(record3);
    recordstore.addRecord(record4);
    assert.deepStrictEqual(recordstore.financials(), "Financials for Wee Music Shop. Store balance is £150, and the stock total is £44.96");
  });

  it("should be able to sell a record", function() {
    recordstore.addRecord(record1);
    recordstore.addRecord(record2);
    recordstore.addRecord(record3);
    recordstore.addRecord(record4);
    recordstore.sell(record4);
    assert.strictEqual(recordstore.inventory.length, 3);
    assert.deepStrictEqual(recordstore.financials(), "Financials for Wee Music Shop. Store balance is £160.99, and the stock total is £33.97");
  });

  // it("should list records by genre", function() {
  //   recordstore.addRecord(record1);
  //   recordstore.addRecord(record2);
  //   recordstore.addRecord(record3);
  //   recordstore.addRecord(record4);
  //   assert.deepStrictEqual(recordstore.filterGenre("Rock"), [record3]);
  // });

});

// Part B
// Create a method that lists the inventory. PENDING

// Create a method that allows the store to view all Records of a given Genre. PENDING

// Part C
// Create a RecordCollector (or Customer) constructor who can buy and sell records.

// The RecordCollector should have cash that increase and decreases with buying and selling.

// The RecordCollector shouldn't be able to buy a Record if he can't afford it.

// The RecordCollector should be able to view the total value of their collection

// The RecordCollector should be able to view the total value of all records of a given Genre
// The RecordCollector should be able to view their most valuable record.

// The RecordCollector should be able to sort their records by value. (ascending or descending)

// The RecordCollector should be able to compare the value of their collection with another
// RecordCollector
