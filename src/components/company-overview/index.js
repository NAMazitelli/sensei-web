import React from 'react';
import { css } from '@emotion/react';
import media from '../../styles/media';

const Styles = css`
  z-index: 1;
  position: relative;
  .gray-background-round {
    margin-top: -250px;
    background: #EEE;
    padding:300px 120px 120px;
    border-radius: 30px;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    z-index: 1;
    &:after{
      content: '';
      width: 100%;
    }
  }

  p {
    margin-top: 20px;
  }

  .tag {
    background: #000;
    color: #fff;
    border-radius: 60px;
    padding: 5px 10px;
    font-size: 1.2rem;
  }
  
  .content-left {
    width: 100%;
    font-size: 2rem;
    line-height: 3rem;
    .blue-line { color: blue; }
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

const CompanyOverview = () => {
  return (
    <div css={[Styles]}>
      <div class="container">
        <div class="gray-background-round">
          <div class="content-left">
            <span class="tag">
              Company Overview
            </span>

            <p>
              We drive the decentralization of the blockchain
              ecosystem in Latin America with a <span class="blue-line">simple, 
              scalable and secure</span> node management platform.
              Our nodes provide enterprise level availability,
              distributed on leading hosting facilities locally on
              each market.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyOverview;

