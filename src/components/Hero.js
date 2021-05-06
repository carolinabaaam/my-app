import React from 'react';

import HeroStyledContainer from '../styles/HeroStyle';

function Hero() {
  return (
    <HeroStyledContainer>
      <div className="heroContent">
        <h1 className="noMargin">Juniors make IT work.</h1>
        <p className="noMargin">Hire and invest in highly skilled juniors now.</p>
        <button><p className="noMargin">Post Offer Now</p></button>
      </div>
    </HeroStyledContainer>
  );
}

export default Hero;
