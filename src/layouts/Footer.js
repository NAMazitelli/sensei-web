import React from 'react';
import { css } from '@emotion/react';
import media from '../styles/media';

const footerStyle = css`
  padding: 20px;
  background: #3F3FF9;

  & > nav {
    margin: 0 auto;
    max-width: 1440px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .social-container {
      display: flex;
      flex-direction: column;
      span {
        font-size: 1.2rem;
        margin-bottom: 20px;
        color: #C4C4C4;
      }
      .social-buttons {
        margin-bottom: 80px;
        a { margin-right: 15px; }
      }
      .terms {
        a {
          margin-right:60px;
          text-decoration: underline;
        }
      }
    }
  }
  ${media.medium} {
    nav {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      .sensei-logo-container {
        margin-bottom: 40px;
      }
    }
  }
`;

const Footer = () => {
  return (
    <footer css={[footerStyle]}>
      <nav>
        <div className="sensei-logo-container">
          <img src="https://i3.lensdump.com/i/reGyIC.png"/>
        </div>
        <div className="social-container"> 
          <span>Connect with Sensei Node</span>
          <div className="social-buttons">
            <a href="twitter.com" href="_blank">
              <img src="https://i1.lensdump.com/i/reGGoz.png" />
            </a>
            <a href="linkedin.com" href="_blank">
              <img src="https://i2.lensdump.com/i/reGh8T.png" />
            </a>
          </div>

          <div className="terms">
            <a href="#"> Privacy Policy</a>
            <a href="#"> Terms & conditions </a>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
