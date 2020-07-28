import { CasterType } from "./spells/constants";
import { SpellUsage } from "./spells/spells";
import { PlayerLevel } from "./constants";


export interface Character {
  level: PlayerLevel;
  casterType: CasterType;
  spellUsage: SpellUsage;
}