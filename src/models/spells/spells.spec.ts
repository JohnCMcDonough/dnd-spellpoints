import { GetSpellInfoForCharacter } from "./spells"
import { CasterType, SpellLevel } from "./constants"
import { PlayerLevel } from "../constants";

describe("Spell Points", () => {
  it("should handle the general use case", () => {
    const info = GetSpellInfoForCharacter({
      casterType: CasterType.FULL,
      level: PlayerLevel.ELEVEN,
      spellUsage: {
        castings: [0],
        spellPointModifier: 0,
        unpreparedCastings: [0],
      }
    });
    expect(info).toEqual({
      maxPointsBase: 73,
      maxSpellLevel: SpellLevel.SIX,
      spellPointModifier: 0,
      maxPoints: 73,
      usedPoints: 0,
      remainingPoints: 73,
      levels: [
        {
          usedPoints: 0,
          usedPointsUnprepared: 0,
          slotsTotal: 36,
          slotsRemaining: 36,
          slotsUsed: 0,
          slotsLost: 0,
          slotsUnprepared: 0,
        },
        {
          usedPoints: 0,
          usedPointsUnprepared: 0,
          slotsTotal: 24,
          slotsRemaining: 24,
          slotsUsed: 0,
          slotsLost: 0,
          slotsUnprepared: 0,
        },
        {
          usedPoints: 0,
          usedPointsUnprepared: 0,
          slotsTotal: 14,
          slotsRemaining: 14,
          slotsUsed: 0,
          slotsLost: 0,
          slotsUnprepared: 0,
        },
        {
          usedPoints: 0,
          usedPointsUnprepared: 0,
          slotsTotal: 12,
          slotsRemaining: 12,
          slotsUsed: 0,
          slotsLost: 0,
          slotsUnprepared: 0,
        },
        {
          usedPoints: 0,
          usedPointsUnprepared: 0,
          slotsTotal: 10,
          slotsRemaining: 10,
          slotsUsed: 0,
          slotsLost: 0,
          slotsUnprepared: 0,
        },
        {
          usedPoints: 0,
          usedPointsUnprepared: 0,
          slotsTotal: 1,
          slotsRemaining: 1,
          slotsUsed: 0,
          slotsLost: 0,
          slotsUnprepared: 0,
        },
        {
          usedPoints: 0,
          usedPointsUnprepared: 0,
          slotsTotal: 0,
          slotsRemaining: 0,
          slotsUsed: 0,
          slotsLost: 0,
          slotsUnprepared: 0,
        },
        {
          usedPoints: 0,
          usedPointsUnprepared: 0,
          slotsTotal: 0,
          slotsRemaining: 0,
          slotsUsed: 0,
          slotsLost: 0,
          slotsUnprepared: 0,
        },
        {
          usedPoints: 0,
          usedPointsUnprepared: 0,
          slotsTotal: 0,
          slotsRemaining: 0,
          slotsUsed: 0,
          slotsLost: 0,
          slotsUnprepared: 0,
        },
      ]
    });
  });

  it("should handle bonus spell points", () => {
    const info = GetSpellInfoForCharacter({
      casterType: CasterType.FULL,
      level: PlayerLevel.ELEVEN,
      spellUsage: {
        castings: [0],
        spellPointModifier: 10,
        unpreparedCastings: [0],
      }
    });
    expect(info).toEqual({
      maxPointsBase: 73,
      maxSpellLevel: SpellLevel.SIX,
      spellPointModifier: 10,
      maxPoints: 83,
      usedPoints: 0,
      remainingPoints: 83,
      levels: [
        {
          usedPoints: 0,
          usedPointsUnprepared: 0,
          slotsTotal: 41,
          slotsRemaining: 41,
          slotsUsed: 0,
          slotsLost: 0,
          slotsUnprepared: 0,
        },
        {
          usedPoints: 0,
          usedPointsUnprepared: 0,
          slotsTotal: 27,
          slotsRemaining: 27,
          slotsUsed: 0,
          slotsLost: 0,
          slotsUnprepared: 0,
        },
        {
          usedPoints: 0,
          usedPointsUnprepared: 0,
          slotsTotal: 16,
          slotsRemaining: 16,
          slotsUsed: 0,
          slotsLost: 0,
          slotsUnprepared: 0,
        },
        {
          usedPoints: 0,
          usedPointsUnprepared: 0,
          slotsTotal: 13,
          slotsRemaining: 13,
          slotsUsed: 0,
          slotsLost: 0,
          slotsUnprepared: 0,
        },
        {
          usedPoints: 0,
          usedPointsUnprepared: 0,
          slotsTotal: 11,
          slotsRemaining: 11,
          slotsUsed: 0,
          slotsLost: 0,
          slotsUnprepared: 0,
        },
        {
          usedPoints: 0,
          usedPointsUnprepared: 0,
          slotsTotal: 1,
          slotsRemaining: 1,
          slotsUsed: 0,
          slotsLost: 0,
          slotsUnprepared: 0,
        },
        {
          usedPoints: 0,
          usedPointsUnprepared: 0,
          slotsTotal: 0,
          slotsRemaining: 0,
          slotsUsed: 0,
          slotsLost: 0,
          slotsUnprepared: 0,
        },
        {
          usedPoints: 0,
          usedPointsUnprepared: 0,
          slotsTotal: 0,
          slotsRemaining: 0,
          slotsUsed: 0,
          slotsLost: 0,
          slotsUnprepared: 0,
        },
        {
          usedPoints: 0,
          usedPointsUnprepared: 0,
          slotsTotal: 0,
          slotsRemaining: 0,
          slotsUsed: 0,
          slotsLost: 0,
          slotsUnprepared: 0,
        },
      ]
    });
  });

  it("should handle penalty spell points", () => {
    const info = GetSpellInfoForCharacter({
      casterType: CasterType.FULL,
      level: PlayerLevel.ELEVEN,
      spellUsage: {
        castings: [0],
        spellPointModifier: -10,
        unpreparedCastings: [0],
      }
    });
    expect(info).toEqual({
      maxPointsBase: 73,
      maxSpellLevel: SpellLevel.SIX,
      spellPointModifier: -10,
      maxPoints: 63,
      usedPoints: 0,
      remainingPoints: 63,
      levels: [
        {
          usedPoints: 0,
          usedPointsUnprepared: 0,
          slotsTotal: 31,
          slotsRemaining: 31,
          slotsUsed: 0,
          slotsLost: 0,
          slotsUnprepared: 0,
        },
        {
          usedPoints: 0,
          usedPointsUnprepared: 0,
          slotsTotal: 21,
          slotsRemaining: 21,
          slotsUsed: 0,
          slotsLost: 0,
          slotsUnprepared: 0,
        },
        {
          usedPoints: 0,
          usedPointsUnprepared: 0,
          slotsTotal: 12,
          slotsRemaining: 12,
          slotsUsed: 0,
          slotsLost: 0,
          slotsUnprepared: 0,
        },
        {
          usedPoints: 0,
          usedPointsUnprepared: 0,
          slotsTotal: 10,
          slotsRemaining: 10,
          slotsUsed: 0,
          slotsLost: 0,
          slotsUnprepared: 0,
        },
        {
          usedPoints: 0,
          usedPointsUnprepared: 0,
          slotsTotal: 9,
          slotsRemaining: 9,
          slotsUsed: 0,
          slotsLost: 0,
          slotsUnprepared: 0,
        },
        {
          usedPoints: 0,
          usedPointsUnprepared: 0,
          slotsTotal: 1,
          slotsRemaining: 1,
          slotsUsed: 0,
          slotsLost: 0,
          slotsUnprepared: 0,
        },
        {
          usedPoints: 0,
          usedPointsUnprepared: 0,
          slotsTotal: 0,
          slotsRemaining: 0,
          slotsUsed: 0,
          slotsLost: 0,
          slotsUnprepared: 0,
        },
        {
          usedPoints: 0,
          usedPointsUnprepared: 0,
          slotsTotal: 0,
          slotsRemaining: 0,
          slotsUsed: 0,
          slotsLost: 0,
          slotsUnprepared: 0,
        },
        {
          usedPoints: 0,
          usedPointsUnprepared: 0,
          slotsTotal: 0,
          slotsRemaining: 0,
          slotsUsed: 0,
          slotsLost: 0,
          slotsUnprepared: 0,
        },
      ]
    });
  });

  it("should handle penalty spell points that total points negative", () => {
    const info = GetSpellInfoForCharacter({
      casterType: CasterType.FULL,
      level: PlayerLevel.ELEVEN,
      spellUsage: {
        castings: [0],
        spellPointModifier: -74,
        unpreparedCastings: [0],
      }
    });
    expect(info).toEqual({
      maxPointsBase: 73,
      maxSpellLevel: SpellLevel.SIX,
      spellPointModifier: -74,
      maxPoints: 0,
      usedPoints: 0,
      remainingPoints: 0,
      levels: [
        {
          usedPoints: 0,
          usedPointsUnprepared: 0,
          slotsTotal: 0,
          slotsRemaining: 0,
          slotsUsed: 0,
          slotsLost: 0,
          slotsUnprepared: 0,
        },
        {
          usedPoints: 0,
          usedPointsUnprepared: 0,
          slotsTotal: 0,
          slotsRemaining: 0,
          slotsUsed: 0,
          slotsLost: 0,
          slotsUnprepared: 0,
        },
        {
          usedPoints: 0,
          usedPointsUnprepared: 0,
          slotsTotal: 0,
          slotsRemaining: 0,
          slotsUsed: 0,
          slotsLost: 0,
          slotsUnprepared: 0,
        },
        {
          usedPoints: 0,
          usedPointsUnprepared: 0,
          slotsTotal: 0,
          slotsRemaining: 0,
          slotsUsed: 0,
          slotsLost: 0,
          slotsUnprepared: 0,
        },
        {
          usedPoints: 0,
          usedPointsUnprepared: 0,
          slotsTotal: 0,
          slotsRemaining: 0,
          slotsUsed: 0,
          slotsLost: 0,
          slotsUnprepared: 0,
        },
        {
          usedPoints: 0,
          usedPointsUnprepared: 0,
          slotsTotal: 0,
          slotsRemaining: 0,
          slotsUsed: 0,
          slotsLost: 0,
          slotsUnprepared: 0,
        },
        {
          usedPoints: 0,
          usedPointsUnprepared: 0,
          slotsTotal: 0,
          slotsRemaining: 0,
          slotsUsed: 0,
          slotsLost: 0,
          slotsUnprepared: 0,
        },
        {
          usedPoints: 0,
          usedPointsUnprepared: 0,
          slotsTotal: 0,
          slotsRemaining: 0,
          slotsUsed: 0,
          slotsLost: 0,
          slotsUnprepared: 0,
        },
        {
          usedPoints: 0,
          usedPointsUnprepared: 0,
          slotsTotal: 0,
          slotsRemaining: 0,
          slotsUsed: 0,
          slotsLost: 0,
          slotsUnprepared: 0,
        },
      ]
    });
  });

  it("should handle calculating used spells", () => {
    const info = GetSpellInfoForCharacter({
      casterType: CasterType.FULL,
      level: PlayerLevel.ELEVEN,
      spellUsage: {
        castings: [3],
        spellPointModifier: 0,
        unpreparedCastings: [0],
      }
    });
    expect(info).toEqual({
      maxPointsBase: 73,
      maxSpellLevel: SpellLevel.SIX,
      spellPointModifier: 0,
      maxPoints: 73,
      usedPoints: 6,
      remainingPoints: 67,
      levels: [
        {
          usedPoints: 6,
          usedPointsUnprepared: 0,
          slotsTotal: 36,
          slotsRemaining: 33,
          slotsUsed: 3,
          slotsLost: 0,
          slotsUnprepared: 0,
        },
        {
          usedPoints: 0,
          usedPointsUnprepared: 0,
          slotsTotal: 24,
          slotsRemaining: 22,
          slotsUsed: 0,
          slotsLost: 2,
          slotsUnprepared: 0,
        },
        {
          usedPoints: 0,
          usedPointsUnprepared: 0,
          slotsTotal: 14,
          slotsRemaining: 13,
          slotsUsed: 0,
          slotsLost: 1,
          slotsUnprepared: 0,
        },
        {
          usedPoints: 0,
          usedPointsUnprepared: 0,
          slotsTotal: 12,
          slotsRemaining: 11,
          slotsUsed: 0,
          slotsLost: 1,
          slotsUnprepared: 0,
        },
        {
          usedPoints: 0,
          usedPointsUnprepared: 0,
          slotsTotal: 10,
          slotsRemaining: 9,
          slotsUsed: 0,
          slotsLost: 1,
          slotsUnprepared: 0,
        },
        {
          usedPoints: 0,
          usedPointsUnprepared: 0,
          slotsTotal: 1,
          slotsRemaining: 1,
          slotsUsed: 0,
          slotsLost: 0,
          slotsUnprepared: 0,
        },
        {
          usedPoints: 0,
          usedPointsUnprepared: 0,
          slotsTotal: 0,
          slotsRemaining: 0,
          slotsUsed: 0,
          slotsLost: 0,
          slotsUnprepared: 0,
        },
        {
          usedPoints: 0,
          usedPointsUnprepared: 0,
          slotsTotal: 0,
          slotsRemaining: 0,
          slotsUsed: 0,
          slotsLost: 0,
          slotsUnprepared: 0,
        },
        {
          usedPoints: 0,
          usedPointsUnprepared: 0,
          slotsTotal: 0,
          slotsRemaining: 0,
          slotsUsed: 0,
          slotsLost: 0,
          slotsUnprepared: 0,
        },
      ]
    });
  })
  it("should handle calculating ritual spells", () => {
    const info = GetSpellInfoForCharacter({
      casterType: CasterType.FULL,
      level: PlayerLevel.ELEVEN,
      spellUsage: {
        castings: [3],
        spellPointModifier: 0,
        unpreparedCastings: [2],
      }
    });
    expect(info).toEqual({
      maxPointsBase: 73,
      maxSpellLevel: SpellLevel.SIX,
      spellPointModifier: 0,
      maxPoints: 73,
      usedPoints: 8,
      remainingPoints: 65,
      levels: [
        {
          usedPoints: 6,
          usedPointsUnprepared: 2,
          slotsTotal: 36,
          slotsRemaining: 32,
          slotsUsed: 3,
          slotsLost: 1,
          slotsUnprepared: 2,
        },
        {
          usedPoints: 0,
          usedPointsUnprepared: 0,
          slotsTotal: 24,
          slotsRemaining: 21,
          slotsUsed: 0,
          slotsLost: 3,
          slotsUnprepared: 0,
        },
        {
          usedPoints: 0,
          usedPointsUnprepared: 0,
          slotsTotal: 14,
          slotsRemaining: 13,
          slotsUsed: 0,
          slotsLost: 1,
          slotsUnprepared: 0,
        },
        {
          usedPoints: 0,
          usedPointsUnprepared: 0,
          slotsTotal: 12,
          slotsRemaining: 10,
          slotsUsed: 0,
          slotsLost: 2,
          slotsUnprepared: 0,
        },
        {
          usedPoints: 0,
          usedPointsUnprepared: 0,
          slotsTotal: 10,
          slotsRemaining: 9,
          slotsUsed: 0,
          slotsLost: 1,
          slotsUnprepared: 0,
        },
        {
          usedPoints: 0,
          usedPointsUnprepared: 0,
          slotsTotal: 1,
          slotsRemaining: 1,
          slotsUsed: 0,
          slotsLost: 0,
          slotsUnprepared: 0,
        },
        {
          usedPoints: 0,
          usedPointsUnprepared: 0,
          slotsTotal: 0,
          slotsRemaining: 0,
          slotsUsed: 0,
          slotsLost: 0,
          slotsUnprepared: 0,
        },
        {
          usedPoints: 0,
          usedPointsUnprepared: 0,
          slotsTotal: 0,
          slotsRemaining: 0,
          slotsUsed: 0,
          slotsLost: 0,
          slotsUnprepared: 0,
        },
        {
          usedPoints: 0,
          usedPointsUnprepared: 0,
          slotsTotal: 0,
          slotsRemaining: 0,
          slotsUsed: 0,
          slotsLost: 0,
          slotsUnprepared: 0,
        },
      ]
    });
  });
})
