import React from 'react';
import { css } from '@emotion/react';
import media from '../../styles/media';

const Styles = css`
  z-index: 3;
  position: relative;

  .green-pill {
    background: #34C55D;
    padding: 5px 20px;
    border-radius: 30px;
  }

  .container-rounded {
    background: #F6F6F6;
    border-radius:30px;
  }
  ${media.medium} {
    h1 {
      font-size: 3rem;
      width: 100%;
      text-align: center;
    }
  }
`;

const ProtocolsSupported = () => {
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
        </div>
      </div>
    </div>
  );
}

export default ProtocolsSupported;

