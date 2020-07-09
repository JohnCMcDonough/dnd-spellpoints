import { CasterType } from './constants';

export interface SpellPointPool {
  casterType: CasterType;
  level: number;
  usedSpells: number[];
  tempSpellPointMod: number;
  permanentSpellPointMod: number;
}