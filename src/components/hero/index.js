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
  .hero-image-mobile {
    display:none;
  }
  ${media.medium} {
    padding-top: 0;
    height: calc(100vh);
    padding:40px;

    .background {
      width: 80%;
      height: 200px;
      margin: auto;
    }

    .title {
      width: 100%;
      overflow: hidden;
    }

    .hero-image-mobile {
      display: block;
    }

    .hero-image {
      display:none;
    }

    h1 {
      font-size: 3.5rem;
      width: 100%;
      text-align: center;
      margin-bottom:50px;
    }
    h2 {
      font-size: 2rem;
      padding: 0 30px;
      line-height: 2.5rem;
    }
  }
`;

const Hero = () => {
  return (
    <section css={[Styles]}>
      <div class="container">
        <div class="title">
            <h1>The Revolution will be Decentralized.</h1>
            <img class="hero-image" src="https://i1.lensdump.com/i/ref1se.png" />
            <img class="hero-image-mobile" src="https://i.lensdump.com/i/rnJTvP.png" />
            <h1>Own your node.</h1>
            <h2>Accesible and reliable one-click private nodes for everybody.</h2>
        </div>
      </div>
    </section>
  );
}

export default Hero;

