import React from 'react';

import Offer from './Offer';
import JobOffersStyledContainer from '../styles/SectionStyled';

function JobOffers() {
  return (
    <JobOffersStyledContainer>
      <div className="title">
        <h1>
          Newest Job Offers
          <button className="link manropeBold mobile">View all job offers ➜</button>
        </h1>
        <button className="link manropeBold computer">View all job offers ➜</button>
      </div>
      <div className="offers">
        <Offer description="I am currently looking for a Java Developer. Project for Public Sector Location: Wrocław (during the pandemic remote work) $ up to PLN 550 net / MD B2B" time="2 hours ago" title="Junior Java Developer" />
        <Offer description="Join us in the Lublin office to build innovative long-term projects. Exciting international clients and partners and a work environment focused on learning and growth awaits you!" time="3 hours ago" title="Junior Project Manager" border />
        <Offer description="I am currently looking for a Java Developer. Project for Public Sector Location: Wrocław (during the pandemic remote work) $ up to PLN 550 net / MD B2B" time="2 day ago" title="Junior Project Manager" />
      </div>
    </JobOffersStyledContainer>
  );
}

export default JobOffers;
