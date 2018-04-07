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
    record1 = new Record("Sian", 60, 'personal');
    record2 = new Record("Keith", 10, 'business');
    record3 = new Record("Harrison", 80, 'personal');
    record4 = new Record("Craig", 5, 'business');
    recordstore = new RecordStore();
    recordstore.addRecord(record1);
    recordstore.addRecord(record2);
    recordstore.addRecord(record3);
    recordstore.addRecord(record4);
  })

  it("should be able to add record", function() {
    assert.strictEqual(recordstore.records.length, 4);
  });

});

// Part A
// Create a Record object that has an Artist, Title, Genre, and Price
// Create a Record Store that has a Name, City and an Inventory.
// Give the Record Store a Balance.
// Add some Records to the Store's Inventory.
