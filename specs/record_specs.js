var assert = require('assert');
var Record = require('../records.js');

describe('Record', function() {

  var record1;
  var record2;
  var record3;
  var record4;


  beforeEach(function() {
    record1 = new Record("Take That", "Never Forget: Greatist Hits", "Pop", 10.99);
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

});
