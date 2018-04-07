var assert = require('assert');
var Bank = require('../bank.js');
var Account = require('../account.js');

describe('Bank', function() {

  var account1;
  var account2;
  var account3;
  var account4;
  var bank;

  beforeEach(function() {
    account1 = new Account("Sian", 60, 'personal');
    account2 = new Account("Keith", 10, 'business');
    account3 = new Account("Harrison", 80, 'personal');
    account4 = new Account("Craig", 5, 'business');
    bank = new Bank();
    bank.addAccount(account1);
    bank.addAccount(account2);
    bank.addAccount(account3);
    bank.addAccount(account4);
  })

  it("should be able to add account", function() {
    assert.strictEqual(bank.accounts.length, 4);
  });

});

// Part A
// Create a Record object that has an Artist, Title, Genre, and Price
// Create a Record Store that has a Name, City and an Inventory.
// Give the Record Store a Balance.
// Add some Records to the Store's Inventory.
