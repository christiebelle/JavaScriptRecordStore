var assert = require('assert');
var Record = require('../records.js');

describe('Record', function() {

  var record1;
  var record2;
  var record3;
  var record4;


  beforeEach(function() {
    record1 = new Record("Take That", "Never Forget: Greatest Hits", "Pop", 10.99);
    record2 = new Record("Kaleo", "A/B", "Indie Rock", 9.99);
    record3 = new Record("The Velvet Underground", "The Velvet Underground & Nico", "Rock", 12.99);
    record4 = new Record("2Pac", "2Pac Greatest Hits", "Rap", 10.99);
  })

  it("should have an artist", function() {
    assert.strictEqual(record4.artist, "2Pac");
  });

  it("should have a title", function() {
    assert.strictEqual(record2.title, "A/B");
  });

  it("should have a genre", function() {
    assert.strictEqual(record3.genre, "Rock");
  });

  it("should have a price", function() {
    assert.strictEqual(record1.price, 10.99);
  });

  it("should be able to print out as a string", function() {
    assert.strictEqual(record1.properties(), "Never Forget: Greatest Hits by Take That costs £10.99, and is of the Pop genre");
  });

});

// Part B
// Create a method that lists the inventory.
// Create a method so the Record Store can sell a Record and adjusts the Store's
// balance to account for the Record being sold.
// Create a method that reports the financial situation of the Store, showing the
// balance and value of inventory.
// Create a method that allows the store to view all Records of a given Genre.
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
