import { CasterType, FullCasterSpellPoints, HalfCasterSpellPoints, ThirdCasterSpellPoints, PointsPerSpellLevel, SpellLevel, ArtificerCasterSpellPoints, progressionByCasterType } from './constants';

export interface SpellPointPool {
  casterType: CasterType;
  level: number;
  usedSpells: number[];
}

export function getUsedSpellPoints(pool: SpellPointPool) {
  let used = 0;
  pool.usedSpells.forEach((usedForLevel, level) => {
    used += usedForLevel * PointsPerSpellLevel[level];
  });
  return used;
}

export function getRemainingSpellSlotsLeftByLevel(pool: SpellPointPool) {
  const progression = getCurrentProgression(pool);
  const remaining = getRemainingSpellPoints(pool);
  return PointsPerSpellLevel.map((l, i) => {
    if (i > progression.maxSpellLevel - 1) return 0;
    if (i >= SpellLevel.SIX) { // only allow one cast
      if (pool.usedSpells[i] > 0) {
        return 0;
      } else {
        return Math.min((remaining / l) | 0, 1);
      }
    } // only one sixth level spell per long rest
    return (remaining / l) | 0;
  })
}

export function getRemainingSpellSlotsLeftForLevel(pool: SpellPointPool, spellLevel: number) {
  return getRemainingSpellSlotsLeftByLevel(pool)[spellLevel];
}

export function getRemainingSpellPoints(pool: SpellPointPool) {
  return getCurrentProgression(pool).maxSpellPoints - getUsedSpellPoints(pool);
}

export function getTotalAvailableCastsForLevel(pool: SpellPointPool, level: number) {
  const progression = getCurrentProgression(pool);
  const costPerCast = PointsPerSpellLevel[level];

  if (level > progression.maxSpellLevel - 1) return 0;
  if (level >= SpellLevel.SIX) return 1; // only one sixth level spell per long rest
  return Math.floor((progression.maxSpellPoints / costPerCast))
}

export function getCastingsUsedByOtherLevels(pool: SpellPointPool, level: number) {
  const totalAvailableCasts = getTotalAvailableCastsForLevel(pool, level);
  const timesCast = pool.usedSpells[level];
  const remainingCasts = getRemainingSpellSlotsLeftForLevel(pool, level);
  const lost = totalAvailableCasts - timesCast - remainingCasts;
  return lost;
}

export function getCurrentProgression(pool: SpellPointPool) {
  const myProgression = progressionByCasterType(pool.casterType);
  return myProgression[pool.level - 1];
}