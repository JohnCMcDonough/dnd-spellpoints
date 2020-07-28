import { Layer, InputGroup, Select, useTheme, Text, Divider } from 'sancho';
import React from 'react';
import { CardView } from '../common/card/card';
import { IncButton } from '../common/incbutton/incbutton';
import { SingleStatView } from '../common/singlestat/singlestat';
import { css } from 'emotion';
import { Character } from '../../models/character';
import { PlayerLevel, PLAYER_LEVEL_ARRAY } from '../../models/constants';
import { CasterType, POINTS_PER_SPELL_LEVEL_ARRAY } from '../../models/spells/constants';
import { GetSpellInfoForCharacter, SpellInfo } from '../../models/spells/spells';

export interface SpellPointsCardViewProps {
  levelInfo: SpellInfo["levels"][0];
  level: number;
}

export const SpellPointsCardView: React.FunctionComponent<SpellPointsCardViewProps> = (props) => {

  const theme = useTheme();

  const cardClassName = css`
    max-width: 300px;
    min-width: 200px;
    background-color: ${theme.colors.background.tint1} !important;
    /* padding: 10px; */
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    width: 100%;
  `;

  const rowClassName = css`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 10px;
  `;

  const itemClassName = css`
    flex-basis: 0;
    text-align: center;
    flex-grow: 1;
    flex-shrink: 1;
    min-width: 50px;
  `;

  return (
    <Layer className={cardClassName} elevation="xs">
      <div className={rowClassName + ` ${css`
          margin-bottom: 20px;
          background-color: ${theme.colors.background.tint2};
          border-top-left-radius: 1rem;
          border-top-right-radius: 1rem;
          padding: 0px 0px !important;
          height: 80px;
        `}
      `}>
        <div className={css`display: flex; flex-grow: 1; margin-left: 20px; margin-right: 0px;`}>
          <Text className={itemClassName + ` ${css`flex-grow: 2; text-align: left;`}`} variant="h1">Level {props.level + 1}</Text>
          <SingleStatView className={itemClassName + ` ${css`flex-grow: 1;`}`} variant="h6" title="Cost" value={POINTS_PER_SPELL_LEVEL_ARRAY[props.level]}></SingleStatView>
        </div>
      </div>
      <div className={rowClassName}>
        <SingleStatView className={itemClassName} variant="subtitle" valueVariant="lead" title="Remaining" value={props.levelInfo.slotsRemaining}></SingleStatView>
        <SingleStatView className={itemClassName} variant="subtitle" valueVariant="lead" title="Used" value={props.levelInfo.slotsUsed}></SingleStatView>
        <SingleStatView className={itemClassName} variant="subtitle" valueVariant="lead" title="Total" value={props.levelInfo.slotsTotal}></SingleStatView>
      </div>
      <div className={rowClassName}>
        <SingleStatView className={itemClassName} variant="subtitle" title="Unprepared" value={props.levelInfo.slotsUnprepared}></SingleStatView>
        <SingleStatView className={itemClassName} variant="subtitle" title="" value={""}></SingleStatView>
        <SingleStatView className={itemClassName} variant="subtitle" title="Lost" value={props.levelInfo.slotsRemaining}></SingleStatView>
      </div>
      <Divider />

    </Layer>
  )
}


