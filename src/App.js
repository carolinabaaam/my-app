import React from 'react';

import FeaturedCompanies from './components/FeaturedCompanies';
import Hero from './components/Hero';
import JobOffers from './components/JobOffers';
import GlobalStyle from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Hero />
      <JobOffers />
      <FeaturedCompanies />
    </>
  );
}

export default App;
