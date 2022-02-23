import React from 'react';
import { css } from '@emotion/react';

import Hero from '../components/hero';
import ImageWithText from '../components/image-text';
import StyledSection from '../components/styled-section';
import CompanyOverview from '../components/company-overview';
import OnboardingProcess from '../components/onboarding-process';

const HomePage = () => {
  return (
    <>
      <Hero />

      <StyledSection color={"gray"} >
        <CompanyOverview />
        <OnboardingProcess />

      </StyledSection>

      <StyledSection color={"black"} >

      </StyledSection>
    </>
  );
};

export default HomePage;
