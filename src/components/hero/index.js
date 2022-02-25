import React from 'react';
import { css } from '@emotion/react';
import media from '../../styles/media';
import Slider from 'react-slick';
const Styles = css`
  background: #0C0C0C;
  z-index: 2;
  position: relative;
  height: calc(100vh - 100px);
  position: relative;
  z-index: 4;
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
  .slick-arrow {
    display: none!important;
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
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div css={[Styles]}>
      <Slider {...settings}>
        <section >
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

        <section className="hero-2" >
          <div class="container">
            <div class="title">
                <h1>HERO 2</h1>
                <img class="hero-image" src="https://i1.lensdump.com/i/ref1se.png" />
                <img class="hero-image-mobile" src="https://i.lensdump.com/i/rnJTvP.png" />
                <h1>Own your node.</h1>
                <h2>Accesible and reliable one-click private nodes for everybody.</h2>
            </div>
          </div>
        </section>

        <section >
          <div class="container">
            <div class="title">
                <h1>HHERO 3.</h1>
                <img class="hero-image" src="https://i1.lensdump.com/i/ref1se.png" />
                <img class="hero-image-mobile" src="https://i.lensdump.com/i/rnJTvP.png" />
                <h1>Own your node.</h1>
                <h2>Accesible and reliable one-click private nodes for everybody.</h2>
            </div>
          </div>
        </section>
      </Slider>
    </div>

  );
}

export default Hero;

