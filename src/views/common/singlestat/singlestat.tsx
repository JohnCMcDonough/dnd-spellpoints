import React from 'react';
import { Text } from 'sancho';
import { Global } from "@emotion/core";
import { css } from 'emotion';


export interface SingleStatViewProps {
  title: string;
  value?: number | string;
  className?: string;
  variant?: "body" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "uppercase" | "hidden" | "paragraph" | "subtitle" | "lead" | "display3" | "display2" | "display1";
  valueVariant?: "body" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "uppercase" | "hidden" | "paragraph" | "subtitle" | "lead" | "display3" | "display2" | "display1";
}

export const SingleStatView: React.FunctionComponent<SingleStatViewProps> = (props) => {
  return (
    <div className={props.className + " " + css`
            display: flex;
            flex-direction: column;
            text-align: center;
        `}>
      <Text variant={props.variant || "h4"}>{props.title}</Text>
      <Text variant={props.valueVariant}>{props.value !== undefined ? props.value : props.children}</Text>
    </div>
  )
}