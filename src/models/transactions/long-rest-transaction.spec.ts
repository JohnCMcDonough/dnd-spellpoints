import { TransactionsSinceLastLongRest } from "./long-rest-transaction"

const generateSpellTransaction = () => ({
  TYPE: "SpellTransaction",
  description: "Trying out new spell",
  ritual: Math.random() > 0.5,
  unprepared: Math.random() > 0.5,
  spellLevel: Math.random() * 9,
  spellName: "Cure Wounds",
  spellPointModifier: 1,
})

const generateLongRestTransaction = () => ({
  TYPE: "LongRestTransaction",
  description: "Getting some zzzz",
})

describe("Long Rest Transactions", () => {
  it("should return empty if there has been no transactions since the last long rest", () => {

    const transactions = [
      generateSpellTransaction(),
      generateSpellTransaction(),
      generateSpellTransaction(),
      generateSpellTransaction(),
      generateSpellTransaction(),
      generateSpellTransaction(),
      generateLongRestTransaction()
    ]

    const remainingTransactions = TransactionsSinceLastLongRest(transactions);
    expect(remainingTransactions.length).toBe(0);
  })

  it("should get the transactions since the last long rest", () => {

    const transactions = [
      generateSpellTransaction(),
      generateSpellTransaction(),
      generateSpellTransaction(),
      generateSpellTransaction(),
      generateSpellTransaction(),
      generateSpellTransaction(),
      generateLongRestTransaction(),
      generateSpellTransaction(),
      generateSpellTransaction(),
      generateSpellTransaction(),
      generateLongRestTransaction(),
      generateSpellTransaction(),
      generateSpellTransaction(),
      generateSpellTransaction(),
      generateLongRestTransaction(),
      generateSpellTransaction(),
      generateSpellTransaction(),
      generateSpellTransaction(),
    ]

    const remainingTransactions = TransactionsSinceLastLongRest(transactions);
    expect(remainingTransactions.length).toBe(3);
    expect(remainingTransactions).toEqual(transactions.slice(-3))
  })
})