import React, { useState } from 'react';
import { useTheme, Text, Divider } from 'sancho';
import { Global } from "@emotion/core";

import { CharacterView } from '../views/character/character';
import { SpellPointsView } from '../views/spellpoints/spellpoints';
import { CasterType } from '../models/spells/constants';
import { Character } from '../models/character';

function App() {
  const theme = useTheme();

  const [character, updateCharacter] = useState<Character>({
    casterType: CasterType.FULL, level: 5, spellUsage: {
      castings: [1, 1, 2, 0, 0, 0, 0, 0, 0],
      spellPointModifier: 5,
      unpreparedCastings: [0, 0, 1, 0, 0, 0, 0, 0, 0],
    }
  });

  function setClass(type: CasterType) {
    character.casterType = type;
    updateCharacter({ ...character })
  }

  function setLevel(level: number) {
    character.level = level;
    updateCharacter({ ...character })
  }

  return (
    <>
      <Global
        styles={{
          html: {
            background: theme.colors.background.default,
            color: theme.colors.text.default,
            fontFamily: theme.fonts.base,
          },
          body: {
            // padding: 0,
            margin: 0,
            marginBottom: '50vh',
            width: '100vw',
            height: '100vh',
            "*:focus": {
              outline: 'none'
            },
            overflow: 'auto'
          }
        }}
      />
      <div className="container">
        <CharacterView character={character} onClassChange={setClass} onLevelChange={setLevel} />
        <SpellPointsView character={character} />
      </div>
    </>
  );
};

export default App;
