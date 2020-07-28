import { SpellLevel, SPELL_LEVEL_ARRAY } from "../spells/constants";
import { Transaction, TransactionLog } from "./transaction";
import { SpellUsage } from "../spells/spells";
import { TransactionsSinceLastLongRest } from "./long-rest-transaction";

export interface SpellTransaction extends Transaction {
  TYPE: "SpellTransaction";

  /**
   * If casting a spell, allows you to enter the name of the spell.
   */
  spellName?: string;

  /**
   * Controls what level the spell was cast at.
   */
  spellLevel?: SpellLevel;

  /**
   * Was the spell cast as a ritual?
   */
  ritual?: boolean;

  /**
   * Was the spell cast unprepared?s
   */
  unprepared?: boolean;

  /**
   * Allows adding or removing points.
   */
  spellPointModifier?: number;
}

export function TransactionLogToSpellUsage(log: TransactionLog) {
  const transactions = TransactionsSinceLastLongRest(log.transactions);

  const emptySpellArray = () => [...SPELL_LEVEL_ARRAY].fill(0)
  const usage = {
    castings: emptySpellArray(),
    unpreparedCastings: emptySpellArray(),
    spellPointModifier: 0
  } as SpellUsage;

  for (const transaction of transactions) {
    // Handle Long Rests
    if (transaction.TYPE === "LongRestTransaction") {
      usage.castings = emptySpellArray();
      usage.spellPointModifier = 0;
      usage.unpreparedCastings = emptySpellArray();
    }

    // Handle Spells
    if (transaction.TYPE === "SpellTransaction") {
      const st = transaction as SpellTransaction;
      const lvl = st.spellLevel;
      if (!st.ritual)
        usage.castings[lvl]++;
      if (st.unprepared)
        usage.unpreparedCastings[lvl]++;
      if (st.spellPointModifier)
        usage.spellPointModifier += st.spellPointModifier;
    }
  }

  return usage;
}