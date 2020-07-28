import { TransactionLog } from "./transaction"
import { SpellTransaction, TransactionLogToSpellUsage } from "./spell-transaction"
import { SpellLevel } from "../spells/constants"
import { LongRestTransaction } from "./long-rest-transaction"

describe("Spell Point Transactions", () => {
  it('Simple Use Case', () => {
    const log: TransactionLog = {
      transactions: [
        {
          TYPE: "SpellTransaction",
          description: "Trying out new spell",
          ritual: false,
          unprepared: true,
          spellLevel: SpellLevel.ONE,
          spellName: "Cure Wounds",
          spellPointModifier: 0,
        } as SpellTransaction,
      ]
    }

    const usage = TransactionLogToSpellUsage(log);
    expect(usage).toEqual({
      castings: [
        1, 0, 0, 0, 0,
        0, 0, 0, 0
      ],
      unpreparedCastings: [
        1, 0, 0, 0, 0,
        0, 0, 0, 0
      ],
      spellPointModifier: 0
    })
  })

  it('Simple Long Rest Use Case', () => {
    const log: TransactionLog = {
      transactions: [
        {
          TYPE: "LongRestTransaction",
          description: "We took a long rest in the caves"
        } as LongRestTransaction,
        {
          TYPE: "SpellTransaction",
          description: "Trying out new spell",
          ritual: false,
          unprepared: false,
          spellLevel: SpellLevel.ONE,
          spellName: "Cure Wounds",
          spellPointModifier: 0,
        } as SpellTransaction,
      ]
    }

    const usage = TransactionLogToSpellUsage(log);
    expect(usage).toEqual({
      castings: [
        1, 0, 0, 0, 0,
        0, 0, 0, 0
      ],
      unpreparedCastings: [
        0, 0, 0, 0, 0,
        0, 0, 0, 0
      ],
      spellPointModifier: 0
    })
  })

  it('Medium Long Rest Use Case', () => {
    const log: TransactionLog = {
      transactions: [
        {
          TYPE: "SpellTransaction",
          description: "Trying out new spell",
          ritual: false,
          unprepared: true,
          spellLevel: SpellLevel.ONE,
          spellName: "Cure Wounds",
          spellPointModifier: 0,
        } as SpellTransaction,
        {
          TYPE: "LongRestTransaction",
          description: "We took a long rest in the caves"
        } as LongRestTransaction,
        {
          TYPE: "SpellTransaction",
          description: "Trying out new spell",
          ritual: false,
          unprepared: true,
          spellLevel: SpellLevel.ONE,
          spellName: "Cure Wounds",
          spellPointModifier: 0,
        } as SpellTransaction,
      ]
    }

    const usage = TransactionLogToSpellUsage(log);
    expect(usage).toEqual({
      castings: [
        1, 0, 0, 0, 0,
        0, 0, 0, 0
      ],
      unpreparedCastings: [
        1, 0, 0, 0, 0,
        0, 0, 0, 0
      ],
      spellPointModifier: 0
    })
  })

  it('Advanced Long Rest Use Case', () => {
    const log: TransactionLog = {
      transactions: [
        {
          TYPE: "SpellTransaction",
          description: "Trying out new spell",
          ritual: false,
          unprepared: true,
          spellLevel: SpellLevel.ONE,
          spellName: "Cure Wounds",
          spellPointModifier: 0,
        } as SpellTransaction,
        {
          TYPE: "SpellTransaction",
          description: "Trying out new spell",
          ritual: false,
          unprepared: true,
          spellLevel: SpellLevel.ONE,
          spellName: "Cure Wounds",
          spellPointModifier: 0,
        } as SpellTransaction,
        {
          TYPE: "SpellTransaction",
          description: "Trying out new spell",
          ritual: false,
          unprepared: true,
          spellLevel: SpellLevel.ONE,
          spellName: "Cure Wounds",
          spellPointModifier: 3,
        } as SpellTransaction,
        {
          TYPE: "SpellTransaction",
          description: "Trying out new spell",
          ritual: false,
          unprepared: true,
          spellLevel: SpellLevel.ONE,
          spellName: "Cure Wounds",
          spellPointModifier: 3,
        } as SpellTransaction,
        {
          TYPE: "LongRestTransaction",
          description: "We took a long rest in the caves"
        } as LongRestTransaction,
        {
          TYPE: "SpellTransaction",
          description: "Trying out new spell",
          ritual: false,
          unprepared: true,
          spellLevel: SpellLevel.ONE,
          spellName: "Cure Wounds",
          spellPointModifier: 0,
        } as SpellTransaction,
        {
          TYPE: "LongRestTransaction",
          description: "We took a long rest in the caves"
        } as LongRestTransaction,
        {
          TYPE: "SpellTransaction",
          description: "Trying out new spell",
          ritual: false,
          unprepared: true,
          spellLevel: SpellLevel.ONE,
          spellName: "Cure Wounds",
          spellPointModifier: 0,
        } as SpellTransaction,
        {
          TYPE: "LongRestTransaction",
          description: "We took a long rest in the caves"
        } as LongRestTransaction,
        {
          TYPE: "SpellTransaction",
          description: "Trying out new spell",
          ritual: false,
          unprepared: true,
          spellLevel: SpellLevel.ONE,
          spellName: "Cure Wounds",
          spellPointModifier: 5,
        } as SpellTransaction,
      ]
    }

    const usage = TransactionLogToSpellUsage(log);
    expect(usage).toEqual({
      castings: [
        1, 0, 0, 0, 0,
        0, 0, 0, 0
      ],
      unpreparedCastings: [
        1, 0, 0, 0, 0,
        0, 0, 0, 0
      ],
      spellPointModifier: 5
    })
  })

  it('Performance Test', () => {
    const generateSpellTransaction = () => ({
      TYPE: "SpellTransaction",
      description: "Trying out new spell",
      ritual: Math.random() > 0.5,
      unprepared: Math.random() > 0.5,
      spellLevel: Math.random() * 9,
      spellName: "Cure Wounds",
      spellPointModifier: 1,
    })

    const largeTransactions = new Array(10000).fill(0).map(generateSpellTransaction);

    const log: TransactionLog = {
      transactions: [
        ...largeTransactions,
        {
          TYPE: "LongRestTransaction",
          description: "We took a long rest in the caves"
        } as LongRestTransaction,
        ...largeTransactions,
      ]
    }

    const startTime = Date.now();
    TransactionLogToSpellUsage(log);
    const endTime = Date.now();

    expect(endTime - startTime).toBeLessThanOrEqual(100);
  })
})