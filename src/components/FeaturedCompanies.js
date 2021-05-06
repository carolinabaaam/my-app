import React from 'react';

import { ReactComponent as BriefCaseIcon } from '../images/icon-briefcase.svg';
import SectionStyledContainer, { CircleIcon } from '../styles/SectionStyled';

const IconContainer = (props) => (
  <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
    <CircleIcon>
      <BriefCaseIcon />
    </CircleIcon>
    <p style={{ textAlign: 'center' }} className="tag black manropeBold">{props.title}</p>
  </div>
);

function FeaturedCompanies() {
  return (
    <SectionStyledContainer>
      <div className="title">
        <h1>Featured Companies</h1>
      </div>
      <div className="companyIcons">
        <IconContainer title="GrandParade" />
        <IconContainer title="Seargin" />
        <IconContainer title="DEX Ventures" />
        <IconContainer title="NBC" />
        <IconContainer title="SVT SP Zoo" />
        <IconContainer title="DG Tech" />
        <IconContainer title="PickSaaS" />
        <IconContainer title="BlackRose" />
        <IconContainer title="FrontKom" />
      </div>
    </SectionStyledContainer>
  );
}

export default FeaturedCompanies;
