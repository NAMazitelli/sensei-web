import React from 'react';
import { css } from '@emotion/react';

import Hero from '../components/hero';
import ImageWithText from '../components/image-text';
import StyledSection from '../components/styled-section';
import CompanyOverview from '../components/company-overview';
import OnboardingProcess from '../components/onboarding-process';
import ServicesList from '../components/services-list';
import ProtocolsSupported from '../components/protocols-supported'
const HomePage = () => {
  return (
    <>
      <Hero />

      <StyledSection color={"gray"} >
        <CompanyOverview />
        <OnboardingProcess />
      </StyledSection>

      <StyledSection color={"white"} >
      </StyledSection>

      <StyledSection color={"black"} >
        <ServicesList />
      </StyledSection>
      <StyledSection color={"white"} >
        <ProtocolsSupported />
      </StyledSection>

      <StyledSection color={"gray"} >
      </StyledSection>

      <StyledSection color={"white"} >
      </StyledSection>

      <StyledSection color={"green"} >
      </StyledSection>
    </>
  );
};

export default HomePage;
