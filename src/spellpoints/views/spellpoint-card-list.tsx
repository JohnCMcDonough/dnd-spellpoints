import { css } from 'emotion'
import React from 'react';
import { SpellPointPool } from '../interfaces';
import { SpellpointCardView } from './spellpoint-card';

export interface SpellPointCardListProps {
  modifyCastings: (level: number, change: number) => void
  pool: SpellPointPool;
}

function renderSpellCard(props: SpellPointCardListProps, spellLevel: number) {
  return (<SpellpointCardView
    level={spellLevel}
    pool={props.pool}
    cast={() => props.modifyCastings(spellLevel, 1)}
    uncast={() => props.modifyCastings(spellLevel, -1)}
  />);
}

export const SpellPointCardListView: React.FunctionComponent<SpellPointCardListProps> = (props: SpellPointCardListProps) => {
  return (<div className={css`
            display: flex;
            max-width: '100%';
            flex-wrap: wrap;
            justify-content: center;
          `}>
    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(v => renderSpellCard(props, v))}
  </div>)
}