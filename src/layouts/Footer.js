import React from 'react';
import { css } from '@emotion/react';

const footerStyle = css`
  padding: 150px 16px 50px;
  & > nav {
    margin: 0 auto;
    max-width: 1440px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      width: 2rem;
      height: 2rem;
    }
  }
`;

const Footer = () => {
  return (
    <footer css={[footerStyle]}>
      <nav>
        <div>{new Date().getFullYear()} &copy; Wanted crew</div>
      </nav>
    </footer>
  );
};

export default Footer;
