import { Layer, Button, Input, InputGroup } from 'sancho';
import React from 'react';
import { css } from 'emotion';

export interface IncButtonProps {
  title: string;
  className?: string;
}

export const IncButton: React.FunctionComponent<IncButtonProps> = (props) => {
  const buttonClass = css`
        width: 42px;
        height: 42px;
    `;
  return (
    <div className={
      `${props.className} ` +
      css`
                display: flex;
            `
    }>
      <Button className={buttonClass}>-</Button>
      <Input className={css`flex-grow: 2;`} type="number" />
      <Button className={buttonClass}>+</Button>
    </div >
  )
}


