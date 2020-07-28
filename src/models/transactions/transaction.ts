export interface Transaction {
  TYPE: string;

  /**
   * Describes the effect of this transaction.
   */
  description: string;
}

export interface TransactionLog {
  transactions: Transaction[];
}