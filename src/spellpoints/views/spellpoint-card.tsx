import { Component } from 'react';
import { SpellPointPool } from '../interfaces';
import React from 'react';
import { css } from "emotion";
import { IconButton, IconPlus, IconMinus, Layer, useTheme, Text, IconCircle, Divider } from 'sancho';
import { PointsPerSpellLevel } from '../constants';
import * as util from '../utilities';


export interface SpellpointCardProps {
  level: number;
  pool: SpellPointPool;
  cast: Function;
  uncast: Function;
}

function renderSpellPointBubbleGrid(bubbles: string[]) {
  return bubbles.map((b, i) => <>{i % 10 === 0 ? <br /> : ''}{renderSpellPointBubble(b as any)}</>)
}

function renderSpellPointBubble(state: 'used' | 'remaining' | 'lost') {
  let color: string = 'black';
  let fill: string = '';
  if (state === 'used') {
    fill = 'black'
  }
  if (state === 'remaining') {
    color = 'white'
    fill='rgba(0,0,0,0)'
  }
  if (state === 'lost') {
    fill = 'darkred';
  }
  // return (<IconCircle color={fill} />)
  return (<svg height="20" width="20">
    <circle cx="10" cy="10" r="8" stroke={color} stroke-width="1" fill={fill} />
  </svg>)
}

export const SpellpointCardView: React.FunctionComponent<SpellpointCardProps> = (props) => {
  const theme = useTheme();

  const displaySpellLevel = props.level + 1;
  const remainingCasts = util.getRemainingSpellSlotsLeftForLevel(props.pool, props.level);
  const lostByOtherLevels = util.getCastingsUsedByOtherLevels(props.pool, props.level);
  const timesCast = props.pool.usedSpells[props.level];
  const costToCast = PointsPerSpellLevel[props.level];
  const totalCasts = util.getTotalAvailableCastsForLevel(props.pool, props.level);
  if (totalCasts <= 0) {
    return (<></>)
  }

  console.log(props, timesCast, remainingCasts, lostByOtherLevels);

  const bubblesArray: string[] = [
    ...new Array(timesCast).fill('used'),
    ...new Array(remainingCasts).fill('remaining'),
    ...new Array(lostByOtherLevels).fill('lost'),
  ]

  const layer = css`
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      padding: 10px;
      width: 200px;
      text-align: center;
      margin: 20px;
      border-radius: 5px;
      background-color: ${theme.colors.background.tint2};
    `;

  const row = css`
      display: flex;
      width: 100%;
      flex-grow: 0;
      flex-shrink: 0;
      height: 50px;
    `;

  const item = css`
      flex-grow: 1;
      flex-shrink: 0; 
      background-color: ${theme.colors.background.overlay};
      justify-content: center;
      text-align: center;
      vertical-align: center;
      border-width: 5px;
      border-style: 'solid';
      border-color: 'red';
    `;

  return (
    <Layer elevation='sm' className={layer}>


      {/* Row 1 */}
      <div className={row}>
        {/* Spell Level */}
        <div className={item}>
          <Text variant='display3'>{displaySpellLevel}</Text>
        </div>
        {/* Cast and Uncast */}
        <div className={item}>
          <IconButton disabled={timesCast === 0} label='uncast' icon={<IconMinus />} onClick={() => props.uncast()}></IconButton>
          <IconButton disabled={remainingCasts === 0} label='cast' icon={<IconPlus />} onClick={() => props.cast()}></IconButton>
        </div>
        {/* Spellpoint Cost */}
        <div className={item}>
          <Text>Cost:<br />{costToCast}sp</Text>
        </div>
      </div>
      {/* Row 2 */}
      <div className={row}>
        {/* Remaining */}
        <div className={item}>
          <Text>Left:<br />{remainingCasts}</Text>
        </div>
        {/* Used */}
        <div className={item}>
          <Text>Cast:<br />{timesCast}</Text>
        </div>
        {/* Total */}
        <div className={item}>
          <Text>Total:<br />{totalCasts}</Text>
        </div>
      </div>


      {/* Row 3 */}
      <div className={css`
        justify-content: left;
        text-align: left;
        vertical-align: top;
        flex-grow: 1;
        flex-shrink: 0;
      `}>
        {renderSpellPointBubbleGrid(bubblesArray)}
      </div>
    </Layer>
  )
}