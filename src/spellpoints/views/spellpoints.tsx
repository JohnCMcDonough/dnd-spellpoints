import React, { Component } from 'react';
import { useTheme, Text, InputGroup, Select, Input, Layer, Button, IconCircle, IconTarget } from 'sancho';
import { ReactComponent } from '*.svg';
import { CasterType, PointsPerSpellLevel } from '../constants';
import * as util from '../utilities';
import { css } from 'emotion';
import { SpellpointCardView } from './spellpoint-card';
import { SpellPointPool } from '../interfaces';
import { SpellPointCardListView } from './spellpoint-card-list';

interface SpellPointProps {
}

export const SpellPointView: React.FunctionComponent<SpellPointProps> = (props) => {

  const [pool, setPool] = React.useState<SpellPointPool>({ casterType: CasterType.FULL, level: 1, usedSpells: [0, 0, 0, 0, 0, 0, 0, 0, 0] });

  function updateCasterType(casterType: CasterType) {
    setPool({ ...pool, casterType: casterType });
  }

  function updateCasterLevel(level: number) {
    setPool({ ...pool, usedSpells: [0, 0, 0, 0, 0, 0, 0, 0, 0], level })
  }

  function modifyCastings(level: number, times: number) {
    const newPool: SpellPointPool = JSON.parse(JSON.stringify(pool));
    newPool.usedSpells[level] += times;
    setPool(newPool)
  }

  function renderSpellPointHeader() {
    const totalSpellPointsForLevel = util.getCurrentProgression(pool).maxSpellPoints
    const remainingSpellPoints = util.getRemainingSpellPoints(pool);
    const usedSpellPoints = util.getUsedSpellPoints(pool);
    return (<div className={css`
              display: flex;
              justify-content: space-between;
              align-items: left;
              text-align: left;
        `}>
      <Text className={css`
            width: 33%;
          `} variant='h4'>Remaining Spell Points {remainingSpellPoints}</Text>
      <Text className={css`
            width: 33%;
          `} variant='h4'>Used Spell Points {usedSpellPoints}</Text>
      <Text className={css`
            width: 33%;
          `} variant='h4'>Total Spell Points {totalSpellPointsForLevel}</Text>
    </div>
    )
  }

  return (
    <>
      <InputGroup label="spellpoint-info">
        <Select inputSize="sm" onChange={(evt) => updateCasterType(+evt.target.value as any)}>
          <option value={CasterType.FULL}>Full Caster</option>
          <option value={CasterType.HALF}>Half Caster</option>
          <option value={CasterType.THIRD}>Third Caster</option>
          <option value={CasterType.ARTIFICER}>Artificer</option>
        </Select>
        <Select inputSize="sm" onChange={(evt) => updateCasterLevel(+evt.target.value as any)}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(l => (
            <option value={l}>Level {l}</option>
          ))}
        </Select>
      </InputGroup>

      {renderSpellPointHeader()}

      <SpellPointCardListView
        modifyCastings={(level, change) => { modifyCastings(level, change) }}
        pool={pool}
      />
      <Text>
        {JSON.stringify(util.getCurrentProgression(pool), null, 2)}
        {JSON.stringify(util.getRemainingSpellSlotsLeftByLevel(pool), null, 2)}
      </Text>
    </>
  )
}