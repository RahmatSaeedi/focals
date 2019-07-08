// jshint esversion : 6

class Account {
  constructor(username) {
    this.username = username;
    this.balance = 0;
  }
}

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() { // can waithdraw without limit
    this.account.balance -= this.amount;
  }

}

class Withdrawal extends Transaction {

  commit() {
    this.account.balance -= this.amount;
  }

}

class Deposit extends Transaction {

  commit() {
    this.account.balance += this.amount;
  }
}




// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account("snow-patrol");
console.log('Balance:', myAccount.balance);

t1 = new Withdrawal(50.25, myAccount);
t1.commit();

console.log('Balance:', myAccount.balance);

