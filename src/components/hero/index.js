import React from 'react';
import { css } from '@emotion/react';
import media from '../../styles/media';

const Styles = css`
  height: 600px;
  background: #0C0C0C;
  z-index: 2;
  position: relative;
  h1 {
    font-size: 4rem;
    text-align: center;
    color: #fff;
    z-index: 3;
    font-weight: 100;
  }

  h2 {
    font-size: 1.5rem;
    text-align: center;
    color: #fff;
    z-index: 3;
    font-weight: 100;
  }

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hero-image {
    max-width: 100%;
  }

  ${media.medium} {
    height: 300px;
    .background {
      width: 80%;
      height: 200px;
      margin: auto;
    }

    .title {
      width: 100%;
      overflow: hidden;
    }

    h1 {
      font-size: 3rem;
      width: 100%;
      text-align: center;
    }
  }
`;

const Hero = () => {
  return (
    <section css={[Styles]}>
      <div class="container">
        <div class="title">
            <h1>The revolution will be decentralized.</h1>
            <img class="hero-image" src="public/hero-1.png" />
            <h1>Own your node.</h1>
            <h2>Accesible and reliable one-click private nodes for everybody.</h2>
        </div>
      </div>
    </section>
  );
}

export default Hero;

