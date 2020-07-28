import { Layer, Text, Divider } from 'sancho';
import React from 'react';
import { css } from 'emotion';

export interface CardViewProps {
  title: string;
}

export const CardView: React.FunctionComponent<CardViewProps> = (props) => {
  return (
    <Layer
      className={css`
                padding: 10px;
                margin: 10px;
            `}
      elevation="sm"
    >
      <Text variant="h1">{props.title}</Text>
      <Divider />
      {props.children}
    </Layer >
  )
}


