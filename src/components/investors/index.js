import React from 'react';
import { css } from '@emotion/react';
import media from '../../styles/media';

const Styles = css`
  z-index: 3;
  position: relative;


  .green-pill {
    background: #34C55D;
    padding: 3px 20px;
    border-radius: 30px;
    font-weight:100;
    color: #fff;
    margin:30px 0;  
  }

  h3 {
    font-size: 1.8rem;
    width: 100%;
    text-align: center;
    font-weight: 100;
    line-height: 3rem;
    padding-bottom: 30px;
  }

  h2 {
    font-size: 2.5rem;
    width: 400px;
    font-weight: 100;
    line-height: 3rem;
    padding-bottom: 0;
  }

  .container-rounded {
    background: #F6F6F6;
    border-radius:30px;
    width: 100%;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .logos-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 60px 100px;
    :after{
      content:'';
      width: 30%;
    }
    .logo{
      width: 30%;
      border-top: 2px solid #E3DFDF;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px 0;
      img {
        width:60%;
      }
      a {
        font-size: 1.3rem;
      }
    }
  }
  .icon{
    position:absolute;
    right: 100px;
    width: 300px;
    bottom: -150px;
  }
  ${media.medium} {
    h2 {
      width: 80%;
      font-size: 2rem;
    }
    .green-pill {
      font-size: 1.8rem;
    }
    .logos-container {
      padding-bottom: 30px;
      .logo {
        width: 100%;
      }
    }
    .icon {
      width: 50%;
    }
  }
`;

const Investors = () => {
  return (
    <div css={[Styles]}>
      <div class="container">
        <div className="container-rounded">
          <span className="green-pill">
            Investors
          </span>

          <h2>
            Sensei Node is backed by these leading investors
          </h2>

          <h3>Institutionals</h3>
          <div class="logos-container">
            <div class="logo">
              <img alt="borderless"  src="https://i.lensdump.com/i/rea9mc.png" />
            </div>
            <div class="logo">
              <img alt="newtopia"  src="https://i.lensdump.com/i/rea6Tk.png" />
            </div>
            <div class="logo">
              <img alt="sur"  src="https://i3.lensdump.com/i/reaVZ1.png" />
            </div>
            <div class="logo">
              <img alt="spice" src="https://i1.lensdump.com/i/reaC7x.png" />
            </div>
            <div class="logo">
              <img alt="dg" src="https://i2.lensdump.com/i/reaJUH.png" />
            </div>
            <div class="logo">
              <img alt="xeibo" src="https://i3.lensdump.com/i/reaEye.png" />
            </div>
          </div>

          <h3>Individuals</h3>
          <div class="logos-container">
            <div class="logo">
              <a href="https://www.linkedin.com/in/abarmat/">Ariel Barmat</a>
            </div>
            <div class="logo">
              <a href="#">Ariel Schapira</a>
            </div>
            <div class="logo">
              <a href="https://www.linkedin.com/in/eordano/">Esteban Ordano</a>
            </div>
            <div class="logo">
              <a href="https://www.linkedin.com/in/fgarreton/">Facundo Garreton</a>
            </div>
            <div class="logo">
              <a href="https://www.linkedin.com/in/franciscoalvarezdemalde/">Francisco Alvarez-Demalde</a>
            </div>
            <div class="logo">
              <a href="https://www.linkedin.com/in/jamesfinn/">Jamie Finn</a>
            </div>
            <div class="logo">
              <a href="https://www.linkedin.com/in/jvillamizar/">Javier Villamizar</a>
            </div>
            <div class="logo">
              <a href="https://www.linkedin.com/in/marcosgalperin/">Marcos Galperin</a>
            </div>
            <div class="logo">
              <a href="https://www.linkedin.com/in/migoya/">Martin Migoya</a>
            </div>
            <div class="logo">
              <a href="https://www.linkedin.com/in/matiaswoloski/">Matias Woloski</a>
            </div>
            <div class="logo">
              <a href="https://www.linkedin.com/in/miguelsantosw/">Miguel Santos</a>
            </div>
            <div class="logo">
              <a href="https://www.linkedin.com/in/orlandopablo/">Pablo Orlando</a>
            </div>
            <div class="logo">
              <a href="https://www.linkedin.com/in/rodrigoteijeiro/">Rodrigo Tejeiro</a>
            </div>
            <div class="logo">
              <a href="https://www.linkedin.com/in/ryanfloyd1/">Ryan Floyd</a>
            </div>
          </div>
        </div>

      </div>
      <img src="https://i.lensdump.com/i/rni9s9.png" className="icon" />

  </div>
  );
}
export default Investors;

