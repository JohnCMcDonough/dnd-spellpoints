import { SpellLevel, SPELL_LEVEL_ARRAY, POINTS_PER_SPELL_LEVEL_ARRAY, GetProgressionByCasterType } from "./constants";
import { Character } from "../character";
import { normalize } from "path";



export interface SpellUsage {
  unpreparedCastings: number[];
  castings: number[];

  spellPointModifier: number;
}

export interface SpellInfo {
  maxPointsBase: number;
  maxSpellLevel: SpellLevel;
  spellPointModifier: number;
  maxPoints: number;
  usedPoints: number;
  remainingPoints: number;
  levels: {
    usedPoints: number;
    usedPointsUnprepared: number;
    slotsTotal: number;
    slotsRemaining: number;
    slotsUsed: number;
    slotsLost: number;
    slotsUnprepared: number;
  }[]
}

function padArray<T>(array: T[], length: number, value: T) {
  if (array.length === length) return array;
  return array.concat(new Array(length - array.length).fill(value))
}

function sanitize(usage: SpellUsage): SpellUsage {
  return {
    castings: padArray(usage.castings, SPELL_LEVEL_ARRAY.length, 0),
    unpreparedCastings: padArray(usage.unpreparedCastings, SPELL_LEVEL_ARRAY.length, 0),
    spellPointModifier: !isNaN(usage.spellPointModifier) ? usage.spellPointModifier : 0,
  }
}

export function GetSpellInfoForCharacter(character: Character): SpellInfo {
  const usage = sanitize(character.spellUsage);

  const progression = GetProgressionByCasterType(character.casterType);
  const currentProgression = progression[character.level];

  const usedPointsStandard = usage.castings.map((usage, index) => { return usage * POINTS_PER_SPELL_LEVEL_ARRAY[index] })
  const usedPointsUnprepared = usage.unpreparedCastings.map((usage, index) => { return usage * (index + 1) });
  const usedPoints = usedPointsStandard.map((v, index) => v + usedPointsUnprepared[index]);

  const maxPoints = Math.max(currentProgression.maxSpellPoints + usage.spellPointModifier, 0);
  const totalUsedPoints = Math.max(Math.min(usedPoints.reduce((p, v) => p + v, 0), maxPoints), 0);
  const totalRemainingPoints = Math.max(maxPoints - totalUsedPoints, 0);

  const totalCasts = SPELL_LEVEL_ARRAY.map((level, index) => {
    const remaining = Math.max(Math.floor(maxPoints / POINTS_PER_SPELL_LEVEL_ARRAY[index]), 0)
    if (level > currentProgression.maxSpellLevel) {
      return 0;
    }
    if (level >= SpellLevel.SIX) {
      return Math.min(remaining, 1);
    }
    return remaining;
  });
  const remainingCasts = SPELL_LEVEL_ARRAY.map((level, index) => {
    const remaining = Math.max(Math.floor(totalRemainingPoints / POINTS_PER_SPELL_LEVEL_ARRAY[index]), 0)
    if (level > currentProgression.maxSpellLevel) {
      return 0;
    }
    if (level >= SpellLevel.SIX) {
      return Math.min(remaining, 1);
    }
    return remaining;
  });
  const lostCasts = totalCasts.map((v, index) => v - (usage.castings[index] + remainingCasts[index]))

  const levels = totalCasts.map((_, index) => {
    return {
      usedPoints: usedPointsStandard[index] || 0,
      usedPointsUnprepared: usedPointsUnprepared[index] || 0,

      slotsTotal: totalCasts[index] || 0,
      slotsRemaining: remainingCasts[index] || 0,
      slotsLost: lostCasts[index] || 0,

      slotsUsed: usage.castings[index] || 0,
      slotsUnprepared: usage.unpreparedCastings[index] || 0,
    }
  })

  return {
    maxPointsBase: currentProgression.maxSpellPoints,
    maxSpellLevel: currentProgression.maxSpellLevel,
    maxPoints: maxPoints,

    spellPointModifier: usage.spellPointModifier,

    usedPoints: totalUsedPoints,
    remainingPoints: totalRemainingPoints,
    levels,
  }
}

