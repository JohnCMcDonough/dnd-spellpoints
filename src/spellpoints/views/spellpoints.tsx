import React from 'react';
import { Text, InputGroup, Select, Button } from 'sancho';
import { CasterType, PLAYER_LEVELS } from '../constants';
import * as util from '../utilities';
import { css } from 'emotion';
import { SpellPointPool } from '../interfaces';
import { SpellPointCardListView } from './spellpoint-card-list';

// @ts-ignore:nextline
import useLocalStorage from 'local-storage-hook'

interface SpellPointProps {
}

export const SpellPointView: React.FunctionComponent<SpellPointProps> = () => {

  const [pool, setPool] = useLocalStorage('spellpoint-config', { casterType: CasterType.FULL, level: 1, usedSpells: [0, 0, 0, 0, 0, 0, 0, 0, 0] }) as [SpellPointPool, (p: SpellPointPool) => void];

  function updateCasterType(casterType: CasterType) {
    setPool({ ...pool, casterType: casterType });
  }

  function updateCasterLevel(level: number) {
    setPool({ ...pool, usedSpells: [0, 0, 0, 0, 0, 0, 0, 0, 0], level })
  }

  function longRest() {
    setPool({ ...pool, usedSpells: [0, 0, 0, 0, 0, 0, 0, 0, 0] })
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
        <Select value={pool.casterType} inputSize="sm" onChange={(evt) => updateCasterType(+evt.target.value as any)}>
          <option value={CasterType.FULL}>Full Caster</option>
          <option value={CasterType.HALF}>Half Caster</option>
          <option value={CasterType.THIRD}>Third Caster</option>
          <option value={CasterType.ARTIFICER}>Artificer</option>
        </Select>
        <Select value={pool.level} inputSize="sm" onChange={(evt) => updateCasterLevel(+evt.target.value as any)}>
          {PLAYER_LEVELS.map(l => (
            <option value={l}>Level {l}</option>
          ))}
        </Select>
      </InputGroup>
      <div>
        <Button onClick={() => { if (window.confirm('Are you sure you want to Long Rest?')) longRest() }}>Long Rest</Button>
      </div>


      {renderSpellPointHeader()}

      <SpellPointCardListView
        modifyCastings={(level, change) => { modifyCastings(level, change) }}
        pool={pool}
      />
    </>
  )
}