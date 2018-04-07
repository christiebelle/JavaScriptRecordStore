var assert = require('assert');
var Record = require('../records.js');

describe('Record', function() {

  var account1;
  var account2;
  var account3;
  var account4;
  var bank;

  beforeEach(function() {
    record = new Record();
  })

  it("should be able t", function() {
    assert.strictEqual(record.length, 4);
  });

});
// Part A
// Create a Record object that has an Artist, Title, Genre, and Price
// Create a Record Store that has a Name, City and an Inventory.
// Give the Record Store a Balance.
// Add some Records to the Store's Inventory.
