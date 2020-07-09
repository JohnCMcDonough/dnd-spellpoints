import React from 'react';
import { Text, InputGroup, Select, Button, Layer, useTheme, Input } from 'sancho';
import { CasterType, PLAYER_LEVELS } from '../constants';
import * as util from '../utilities';
import { css } from 'emotion';
import { SpellPointPool } from '../interfaces';
import { SpellPointCardListView } from './spellpoint-card-list';

// @ts-ignore:nextline
import useLocalStorage from 'local-storage-hook'

interface SpellPointProps {
}

const defaultSpellPointPool: SpellPointPool = { casterType: CasterType.FULL, level: 1, usedSpells: [0, 0, 0, 0, 0, 0, 0, 0, 0], tempSpellPointMod: 0, permanentSpellPointMod: 0 };

export const SpellPointView: React.FunctionComponent<SpellPointProps> = () => {

  const theme = useTheme();

  let [pool, setPool] = useLocalStorage('spellpoint-config', defaultSpellPointPool ) as [SpellPointPool, (p: SpellPointPool) => void];

  pool = {...defaultSpellPointPool, ...pool};

  function updateCasterType(casterType: CasterType) {
    setPool({ ...pool, casterType: casterType });
  }

  function updateCasterLevel(level: number) {
    setPool({ ...pool, usedSpells: [0, 0, 0, 0, 0, 0, 0, 0, 0], level })
  }

  function updatePermanentSpellPoints(points: number) {
    const previousMod = pool.permanentSpellPointMod;
    const pointsRemaining = util.getRemainingSpellPoints(pool);
    const unmodifiedPointsRemaining = pointsRemaining - previousMod;
    if(-points > unmodifiedPointsRemaining) {
      points = -unmodifiedPointsRemaining;
    };
    setPool({ ...pool, permanentSpellPointMod: points });
  }

  function updateTemporarySpellPoints(points: number) {
    const previousMod = pool.tempSpellPointMod;
    const pointsRemaining = util.getRemainingSpellPoints(pool);
    const unmodifiedPointsRemaining = pointsRemaining - previousMod;
    if(-points > unmodifiedPointsRemaining) {
      points = -unmodifiedPointsRemaining;
    };
    setPool({ ...pool, tempSpellPointMod: points });
  }

  function longRest() {
    setPool({ ...pool, usedSpells: [0, 0, 0, 0, 0, 0, 0, 0, 0], tempSpellPointMod: 0 })
  }

  function modifyCastings(level: number, times: number) {
    const newPool: SpellPointPool = JSON.parse(JSON.stringify(pool));
    newPool.usedSpells[level] += times;
    setPool(newPool)
  }

  function renderSpellPointHeader() {
    const totalSpellPointsForLevel = util.getMaxSpellPoints(pool)
    const remainingSpellPoints = util.getRemainingSpellPoints(pool);
    const usedSpellPoints = util.getUsedSpellPoints(pool);

    const cell = css`
      width: 33%;
      border-right: 1px solid ${theme.colors.border.muted};
    `;
    const head = css`
      width: 33%;
      border-right: 1px solid ${theme.colors.border.muted};
      border-top: 1px solid ${theme.colors.border.muted};
    `;
    const row = css`
    `;

    return (
      <>
        <table className={css`
        width: 100%;
        text-align: center;
        border: 2px solid ${theme.colors.border.muted};
        border-collapse: collapse;
      `}>
          <tr className={row}>
            <th className={head}>Spell Points Remaining</th>
            <th className={head}>Spell Points Used</th>
            <th className={head}>Spell Points Total</th>
          </tr>
          <tr className={row}>
            <td className={cell}>{remainingSpellPoints}</td>
            <td className={cell}>{usedSpellPoints}</td>
            <td className={cell}>{totalSpellPointsForLevel}</td>
          </tr>
          {/* <tr className={row}>
            <th className={head}>Total Spell Point Modifier</th>
            <th className={head}>Temporary Spell Point Modifier</th>
            <th className={head}>Permanent Spell Point Modifier</th>
          </tr>
          <tr className={row}>
            <td className={cell}>{remainingSpellPoints}</td>
            <td className={cell}></td>
            <td className={cell}></td>
          </tr> */}
        </table>
      </>
    )
  }

  const optionCss = css`
    background-color: ${theme.colors.background.tint1} !important;
    color: ${theme.colors.text.default} !important;
    border: none;
  `;

  return (
    <Layer elevation="xs" className={css`
      padding: 15px;
    `}>
      <Text variant='h1'> Spell Casting</Text>
      <hr />
      <InputGroup label="Spell Caster Type">
        <Select value={pool.casterType} inputSize="sm" onChange={(evt) => updateCasterType(+evt.target.value as any)}>
          <option className={optionCss} value={CasterType.FULL}>Full Caster</option>
          <option className={optionCss} value={CasterType.HALF}>Half Caster</option>
          <option className={optionCss} value={CasterType.THIRD}>Third Caster</option>
          <option className={optionCss} value={CasterType.ARTIFICER}>Artificer</option>
        </Select>
      </InputGroup>
      <InputGroup label="Spell Caster Level">
        <Select value={pool.level} inputSize="sm" onChange={(evt) => updateCasterLevel(+evt.target.value as any)}>
          {PLAYER_LEVELS.map(l => (
            <option className={optionCss} value={l}>Level {l}</option>
          ))}
        </Select>
      </InputGroup>
      {/* <hr className={css`
        margin: 25px 0px;
        border-color: ${theme.colors.border.default};
      `} /> */}
      <div className={css`
        margin-top: 20px;
        margin-bottom: 10px;
      `}>
        <Button className={css`
          width: 50%;
        `} onClick={() => { if (window.confirm('Are you sure you want to Long Rest?')) longRest() }}>Long Rest</Button>
        <InputGroup className={css`
          width: 25%;
          display: inline-block;
        `} label="Temp Spell Point Mod"><Input type="number" value={pool.tempSpellPointMod} onChange={(evt)=>updateTemporarySpellPoints(+evt.target.value)} /></InputGroup>
        <InputGroup className={css`
          width: 25%;
          display: inline-block;
        `} label="Permanent Spell Point Mod"><Input type="number" value={pool.permanentSpellPointMod} onChange={(evt)=>updatePermanentSpellPoints(+evt.target.value)} /></InputGroup>
      </div>
      {/* <div className={css`
        margin: 10px 0px;
      `}>
        <Button className={css`
          width: calc(25% - 10px);
        `} onClick={() => { if (window.confirm('Are you sure you want to Long Rest?')) longRest() }}>Long Rest</Button>

        <InputGroup className={css`
          width: calc(25% - 20px);
          display: inline-block;
          margin: 0px 10px;
          padding: 0px;
        `} label="Spell Level">
          <Select value={pool.level} inputSize="sm" >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(l => (
              <option value={l}>Spell Level {l}</option>
            ))}
          </Select>
        </InputGroup>

        <InputGroup className={css`
          width: calc(25% - 20px);
          display: inline-block;
          margin: 0px 10px;
          padding: 0px;
        `} label="Spell Variant">
          <Select value={pool.level} inputSize="sm" >
            {['Prepared', 'Unprepared', 'Unprepared Ritual'].map(v => (
              <option value={v}>{v}</option>
            ))}
          </Select>
        </InputGroup>

        <Button className={css`
          width: calc(25% - 10px);
        `} onClick={() => { if (window.confirm('Are you sure you want to Long Rest?')) longRest() }}>Cast</Button>
      </div> */}

      {renderSpellPointHeader()}

      <SpellPointCardListView
        modifyCastings={(level, change) => { modifyCastings(level, change) }}
        pool={pool}
      />
    </Layer>
  )
}