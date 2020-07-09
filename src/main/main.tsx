import React from 'react';
import { useTheme, Container, Text, Divider } from 'sancho';
import { Global } from "@emotion/core";
import { SpellPointView } from '../spellpoints/views/spellpoints';

function App() {
  const theme = useTheme();
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
            padding: 0,
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
      <Container>
        <Text variant="display1">D&amp;D Spell Point Calculator</Text>
        <Divider />
        <SpellPointView />
      </Container>
    </>
  );
};

export default App;
