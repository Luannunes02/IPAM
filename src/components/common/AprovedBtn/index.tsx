import React from 'react';
import styled from 'styled-components'

interface Text {
    text: string
    action: any
}

export default function AprovedBtn(props: Text) {
    return (
        <Button onClick={props.action}>
            {props.text}
        </Button>
    )
}

const Button = styled.button`
  border-radius: 1em;
  font-weight: 500;
  padding: 10px 40px;    
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  background: #ffffff;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  box-shadow: 3px 3px 0px 0px rgba(0,0,0,0.75);

&:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #00bb28;
  -webkit-transform: scale(0);
  transform: scale(0);
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
  border-radius: 1em;
  box-shadow: 7px 6px 42px 0px rgba(0,201,25,0.75);
}
&:hover, &:focus, &:active {
    border-radius: 1em;
  color: #ffffff;
}
&:hover:before, &:focus:before, &:active:before {
    border-radius: 1em;
  -webkit-transform: scale(1);
  transform: scale(1);
}
`
