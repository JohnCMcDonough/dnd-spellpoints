import React from 'react';
import { CardView } from '../common/card/card';
import { SingleStatView } from '../common/singlestat/singlestat';
import { SpellPointsCardView } from './spellpoints-card';
import { css } from 'emotion';
import { Character } from '../../models/character';
import { SPELL_LEVEL_ARRAY } from '../../models/spells/constants';
import { GetSpellInfoForCharacter } from '../../models/spells/spells';

export interface SpellPointsViewProps {
  character: Character,
}

export const SpellPointsView: React.FunctionComponent<SpellPointsViewProps> = (props) => {
  const spellInfo = GetSpellInfoForCharacter(props.character);

  const singleStatClass = css`
    flex-grow: 1;
    flex-basis: 0;
  `;

  return (
    <CardView title="Spellpoints">
      <div className={css`
        display: flex;
        justify-content: space-evenly;
        flex-direction: row;
        margin-bottom: 20px;
      `}>
        <SingleStatView className={singleStatClass} title="Remaining Points" value={spellInfo.remainingPoints} />
        <SingleStatView className={singleStatClass} title="Used Points" value={spellInfo.usedPoints} />
        <SingleStatView className={singleStatClass} title="Max Points" value={`${spellInfo.maxPointsBase} (${(spellInfo.spellPointModifier >= 0 ? "+" : "-") + spellInfo.spellPointModifier})`} />
      </div>
      <div className={css`
        display: flex;
        justify-content: space-evenly;
        flex-direction: row;
        flex-wrap: wrap;
      `}>
        {SPELL_LEVEL_ARRAY.map((v, i) => v <= spellInfo.maxSpellLevel ? <SpellPointsCardView level={v} levelInfo={spellInfo.levels[i]} /> : null)}
      </div>
    </CardView >
  )
}