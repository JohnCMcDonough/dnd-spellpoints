export const POINTS_PER_SPELL_LEVEL_ARRAY = [
  2,
  3,
  5,
  6,
  7,
  9,
  10,
  11,
  13,
];
export const SPELL_LEVEL_ARRAY = [0, 1, 2, 3, 4, 5, 6, 7, 8];

export enum CasterType {
  FULL,
  HALF,
  THIRD,
  ARTIFICER,
  NONE,
}
export enum SpellLevel {
  ONE = 0,
  TWO = 1,
  THREE = 2,
  FOUR = 3,
  FIVE = 4,
  SIX = 5,
  SEVEN = 6,
  EIGHT = 7,
  NINE = 8,
}

export const FullCasterSpellProgression = [
  {
    maxSpellPoints: 4,
    maxSpellLevel: SpellLevel.ONE,
  },
  {
    maxSpellPoints: 6,
    maxSpellLevel: SpellLevel.ONE,
  },
  {
    maxSpellPoints: 14,
    maxSpellLevel: SpellLevel.TWO,
  },
  {
    maxSpellPoints: 17,
    maxSpellLevel: SpellLevel.TWO,
  },
  {
    maxSpellPoints: 27,
    maxSpellLevel: SpellLevel.THREE,
  },
  {
    maxSpellPoints: 32,
    maxSpellLevel: SpellLevel.THREE,
  },
  {
    maxSpellPoints: 38,
    maxSpellLevel: SpellLevel.FOUR,
  },
  {
    maxSpellPoints: 44,
    maxSpellLevel: SpellLevel.FOUR,
  },
  {
    maxSpellPoints: 57,
    maxSpellLevel: SpellLevel.FIVE,
  },
  {
    maxSpellPoints: 64,
    maxSpellLevel: SpellLevel.FIVE,
  },
  {
    maxSpellPoints: 73,
    maxSpellLevel: SpellLevel.SIX,
  },
  {
    maxSpellPoints: 73,
    maxSpellLevel: SpellLevel.SIX,
  },
  {
    maxSpellPoints: 83,
    maxSpellLevel: SpellLevel.SEVEN,
  },
  {
    maxSpellPoints: 83,
    maxSpellLevel: SpellLevel.SEVEN,
  },
  {
    maxSpellPoints: 94,
    maxSpellLevel: SpellLevel.EIGHT,
  },
  {
    maxSpellPoints: 94,
    maxSpellLevel: SpellLevel.EIGHT,
  },
  {
    maxSpellPoints: 107,
    maxSpellLevel: SpellLevel.NINE,
  },
  {
    maxSpellPoints: 114,
    maxSpellLevel: SpellLevel.NINE,
  },
  {
    maxSpellPoints: 123,
    maxSpellLevel: SpellLevel.NINE,
  },
  {
    maxSpellPoints: 133,
    maxSpellLevel: SpellLevel.NINE,
  }]
export const HalfCasterSpellProgression = [
  {
    maxSpellPoints: 0,
    maxSpellLevel: 0,
  },
  {
    maxSpellPoints: 4,
    maxSpellLevel: SpellLevel.ONE,
  },
  {
    maxSpellPoints: 6,
    maxSpellLevel: SpellLevel.ONE,
  },
  {
    maxSpellPoints: 6,
    maxSpellLevel: SpellLevel.ONE,
  },
  {
    maxSpellPoints: 14,
    maxSpellLevel: SpellLevel.TWO,
  },
  {
    maxSpellPoints: 14,
    maxSpellLevel: SpellLevel.TWO,
  },
  {
    maxSpellPoints: 17,
    maxSpellLevel: SpellLevel.TWO,
  },
  {
    maxSpellPoints: 17,
    maxSpellLevel: SpellLevel.TWO,
  },
  {
    maxSpellPoints: 27,
    maxSpellLevel: SpellLevel.THREE,
  },
  {
    maxSpellPoints: 27,
    maxSpellLevel: SpellLevel.THREE,
  },
  {
    maxSpellPoints: 32,
    maxSpellLevel: SpellLevel.THREE,
  },
  {
    maxSpellPoints: 32,
    maxSpellLevel: SpellLevel.THREE,
  },
  {
    maxSpellPoints: 38,
    maxSpellLevel: SpellLevel.FOUR,
  },
  {
    maxSpellPoints: 38,
    maxSpellLevel: SpellLevel.FOUR,
  },
  {
    maxSpellPoints: 44,
    maxSpellLevel: SpellLevel.FOUR,
  },
  {
    maxSpellPoints: 44,
    maxSpellLevel: SpellLevel.FOUR,
  },
  {
    maxSpellPoints: 57,
    maxSpellLevel: SpellLevel.FIVE,
  },
  {
    maxSpellPoints: 57,
    maxSpellLevel: SpellLevel.FIVE,
  },
  {
    maxSpellPoints: 64,
    maxSpellLevel: SpellLevel.FIVE,
  },
  {
    maxSpellPoints: 64,
    maxSpellLevel: SpellLevel.FIVE,
  }];
export const ThirdCasterSpellProgression = [
  {
    maxSpellPoints: 0,
    maxSpellLevel: 0,
  },
  {
    maxSpellPoints: 0,
    maxSpellLevel: 0,
  },
  {
    maxSpellPoints: 4,
    maxSpellLevel: SpellLevel.ONE,
  },
  {
    maxSpellPoints: 6,
    maxSpellLevel: SpellLevel.ONE,
  },
  {
    maxSpellPoints: 6,
    maxSpellLevel: SpellLevel.ONE,
  },
  {
    maxSpellPoints: 6,
    maxSpellLevel: SpellLevel.ONE,
  },
  {
    maxSpellPoints: 14,
    maxSpellLevel: SpellLevel.TWO,
  },
  {
    maxSpellPoints: 14,
    maxSpellLevel: SpellLevel.TWO,
  },
  {
    maxSpellPoints: 14,
    maxSpellLevel: SpellLevel.TWO,
  },
  {
    maxSpellPoints: 17,
    maxSpellLevel: SpellLevel.TWO,
  },
  {
    maxSpellPoints: 17,
    maxSpellLevel: SpellLevel.TWO,
  },
  {
    maxSpellPoints: 17,
    maxSpellLevel: SpellLevel.TWO,
  },
  {
    maxSpellPoints: 27,
    maxSpellLevel: SpellLevel.THREE,
  },
  {
    maxSpellPoints: 27,
    maxSpellLevel: SpellLevel.THREE,
  },
  {
    maxSpellPoints: 27,
    maxSpellLevel: SpellLevel.THREE,
  },
  {
    maxSpellPoints: 32,
    maxSpellLevel: SpellLevel.THREE,
  },
  {
    maxSpellPoints: 32,
    maxSpellLevel: SpellLevel.THREE,
  },
  {
    maxSpellPoints: 32,
    maxSpellLevel: SpellLevel.THREE,
  },
  {
    maxSpellPoints: 38,
    maxSpellLevel: SpellLevel.FOUR,
  },
  {
    maxSpellPoints: 38,
    maxSpellLevel: 4
  }];
export const ArtificerCasterSpellProgression = [
  {
    maxSpellPoints: 4,
    maxSpellLevel: SpellLevel.ONE,
  },
  {
    maxSpellPoints: 4,
    maxSpellLevel: SpellLevel.ONE,
  },
  {
    maxSpellPoints: 6,
    maxSpellLevel: SpellLevel.ONE,
  },
  {
    maxSpellPoints: 6,
    maxSpellLevel: SpellLevel.ONE,
  },
  {
    maxSpellPoints: 14,
    maxSpellLevel: SpellLevel.TWO,
  },
  {
    maxSpellPoints: 14,
    maxSpellLevel: SpellLevel.TWO,
  },
  {
    maxSpellPoints: 17,
    maxSpellLevel: SpellLevel.TWO,
  },
  {
    maxSpellPoints: 17,
    maxSpellLevel: SpellLevel.TWO,
  },
  {
    maxSpellPoints: 27,
    maxSpellLevel: SpellLevel.THREE,
  },
  {
    maxSpellPoints: 27,
    maxSpellLevel: SpellLevel.THREE,
  },
  {
    maxSpellPoints: 32,
    maxSpellLevel: SpellLevel.THREE,
  },
  {
    maxSpellPoints: 32,
    maxSpellLevel: SpellLevel.THREE,
  },
  {
    maxSpellPoints: 38,
    maxSpellLevel: SpellLevel.FOUR,
  },
  {
    maxSpellPoints: 38,
    maxSpellLevel: SpellLevel.FOUR,
  },
  {
    maxSpellPoints: 44,
    maxSpellLevel: SpellLevel.FOUR,
  },
  {
    maxSpellPoints: 44,
    maxSpellLevel: SpellLevel.FOUR,
  },
  {
    maxSpellPoints: 57,
    maxSpellLevel: SpellLevel.FIVE,
  },
  {
    maxSpellPoints: 57,
    maxSpellLevel: SpellLevel.FIVE,
  },
  {
    maxSpellPoints: 64,
    maxSpellLevel: SpellLevel.FIVE,
  },
  {
    maxSpellPoints: 64,
    maxSpellLevel: SpellLevel.FIVE,
  }];
export const NonCasterSpellProgression = [
  {
    maxSpellPoints: 0,
    maxSpellLevel: 0,
  },
  {
    maxSpellPoints: 0,
    maxSpellLevel: 0,
  },
  {
    maxSpellPoints: 0,
    maxSpellLevel: 0,
  },
  {
    maxSpellPoints: 0,
    maxSpellLevel: 0,
  },
  {
    maxSpellPoints: 0,
    maxSpellLevel: 0,
  },
  {
    maxSpellPoints: 0,
    maxSpellLevel: 0,
  },
  {
    maxSpellPoints: 0,
    maxSpellLevel: 0,
  },
  {
    maxSpellPoints: 0,
    maxSpellLevel: 0,
  },
  {
    maxSpellPoints: 0,
    maxSpellLevel: 0,
  },
  {
    maxSpellPoints: 0,
    maxSpellLevel: 0,
  },
  {
    maxSpellPoints: 0,
    maxSpellLevel: 0,
  },
  {
    maxSpellPoints: 0,
    maxSpellLevel: 0,
  },
  {
    maxSpellPoints: 0,
    maxSpellLevel: 0,
  },
  {
    maxSpellPoints: 0,
    maxSpellLevel: 0,
  },
  {
    maxSpellPoints: 0,
    maxSpellLevel: 0,
  },
  {
    maxSpellPoints: 0,
    maxSpellLevel: 0,
  },
  {
    maxSpellPoints: 0,
    maxSpellLevel: 0,
  },
  {
    maxSpellPoints: 0,
    maxSpellLevel: 0,
  },
  {
    maxSpellPoints: 0,
    maxSpellLevel: 0,
  },
  {
    maxSpellPoints: 0,
    maxSpellLevel: 0,
  }];


export function GetProgressionByCasterType(type: CasterType) {
  switch (type) {
    case CasterType.FULL: return FullCasterSpellProgression;
    case CasterType.HALF: return HalfCasterSpellProgression;
    case CasterType.THIRD: return ThirdCasterSpellProgression;
    case CasterType.ARTIFICER: return ArtificerCasterSpellProgression;
    case CasterType.NONE: return NonCasterSpellProgression;
  }
}