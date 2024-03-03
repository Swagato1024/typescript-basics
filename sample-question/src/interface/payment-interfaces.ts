export interface Debitable {
  debit(): void;
}

export interface Creditable {
  credit(): void;
}