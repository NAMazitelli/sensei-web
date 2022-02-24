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

  h2 {
    font-size: 2.5rem;
    width: 400px;
    font-weight: 100;
    line-height: 3rem;
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
  ${media.medium} {
    h1 {
      font-size: 3rem;
      width: 100%;
      text-align: center;
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

          <div class="logos-container">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Investors;

