interface Debitables {
  debit(amount: number): void;
}

class AccountNumber {
  readonly accountNumber: string;
  private constructor(accountNumber: string) {
    this.accountNumber = accountNumber;
  }

  static createInstance(value: string) {
    if (value === "") return new Error("invalid account number");
    return new AccountNumber(value);
  }
}

class MasterCard implements Debitables {
  #accountNumber: AccountNumber;
  #balance: number;

  constructor(accountNumber: AccountNumber, balance: number = 0) {
    this.#accountNumber = accountNumber;
    this.#balance = balance;
  }

  debit(amount: number): void {
    this.#balance -= amount;
  }
}

const payBill = (debitable: Debitables, amount: number) => {
  debitable.debit(amount);
};

const accountNumber = new AccountNumber("2023");

