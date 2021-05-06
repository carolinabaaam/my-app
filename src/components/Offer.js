import React from 'react';
import styled from 'styled-components';

const SquareButton = styled.button`
  background-color:#266EFD;
  border-radius:5px;
  box-shadow: 0px 3px 17px #3876F194;
  height:46px;
  width:43px;
  position:absolute;
  right:0;
  bottom:0;
  float:right;
`;

const Arrow = styled.i`
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  margin-right:6px;
  padding: 4px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);

`;
function Offer(props) {
  return (
    <div style={{ position: 'relative', height: '100%' }} className={`${props.border && 'border'} `}>
      <div className="title">
        <p className="noMargin tag manropeBold">{props.title}</p>
        <p style={{ fontFamily: 'Manrope Medium !important' }} className="link smallP gray manropeMedium time">{props.time}</p>
      </div>
      <p className="noMargin"><span className="black">Frontkom</span>{" "}Wrclaw, Polska</p>
      <p style={{ maxWidth: '90%' }}>
        {props.description}
        <SquareButton><Arrow /></SquareButton>
      </p>
    </div>
  );
}

export default Offer;
