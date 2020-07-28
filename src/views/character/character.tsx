import { Layer, InputGroup, Select } from 'sancho';
import React from 'react';
import { CardView } from '../common/card/card';
import { IncButton } from '../common/incbutton/incbutton';
import { css } from 'emotion';
import { Character } from '../../models/character';
import { PlayerLevel, PLAYER_LEVEL_ARRAY } from '../../models/constants';
import { CasterType } from '../../models/spells/constants';

export interface CharacterViewProps {
  character: Character,
  onLevelChange?: (level: number) => void;
  onClassChange?: (level: number) => void;
}

export const CharacterView: React.FunctionComponent<CharacterViewProps> = (props) => {

  let onPlayerLevelChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(+evt.target.value, props)
    if (props.onLevelChange)
      props.onLevelChange(+evt.target.value);
  }

  let onPlayerClassChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(+evt.target.value, props)
    if (props.onClassChange)
      props.onClassChange(+evt.target.value);
  }

  return (
    <CardView title="Player">
      <InputGroup label="Player Level">
        <Select value={props.character.level} onChange={onPlayerLevelChange}>
          {PLAYER_LEVEL_ARRAY.map((level, index) => (
            <option value={index}>{level}</option>
          ))}
        </Select>
      </InputGroup>
      <InputGroup label="Caster Type">
        <Select value={props.character.casterType} onChange={onPlayerClassChange}>
          <option value={CasterType.FULL}>Full Caster (Bard, Cleric, Druid, Sorcerer, Wizard)</option>
          <option value={CasterType.HALF}>Half Caster (Paladin, Ranger)</option>
          <option value={CasterType.ARTIFICER}>Two Thirds Caster (Artificer)</option>
          <option value={CasterType.THIRD}>Third Caster (Arcane Trickster, Eldritch Knight)</option>
          <option value={CasterType.NONE}>None</option>
        </Select>
      </InputGroup>
    </CardView>
  )
}


