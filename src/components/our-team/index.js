import React from 'react';
import { css } from '@emotion/react';
import media from '../../styles/media';

const Styles = css`
  z-index: 1;
  position: relative;
  .container {
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  p {
    margin-top: 20px;
  }

  .tag {
    background: #fff;
    color: #000;
    border-radius: 60px;
    padding: 5px 20px;
    font-size: 2rem;
    border: 1px solid #000;
  }
  
  .members-container {
    padding-top: 40px;
    display: flex;
    flex-wrap: wrap;
    .member-container {
      width: 28%;
      margin-right: 50px;
      h3 {
        font-size: 2.5rem;
        font-weight: 100;
        text-transform: uppercase;
        color: #000;
        border-top:2px solid #000;
      }

      span {
        font-size: 1.5rem;
        color: #34C55D;
        width: 100%;
        display: block;
      }
      img {
        width:100%;
        margin-top: 30px;
        border-radius: 0 0 30px 30px;
      }
      ul {
        padding: 20px;
      }
      li {
        font-size: 1.5rem;
        line-height: 2rem;
        list-style: initial ;
        margin-left: 15px;

      }
    }
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
/*
https://i1.lensdump.com/i/rnjgXb.png
https://i2.lensdump.com/i/rnjtr7.png
https://i3.lensdump.com/i/rnj14r.png
https://i.lensdump.com/i/rnjRNF.png
https://i1.lensdump.com/i/rnjEi3.png
*/
const teamMembers = [
  {
    name: "Rodrigo Benzaquen",
    title: "President",
    subtitle: "Presidente",
    picture: "https://i1.lensdump.com/i/rnjEi3.png",
    description: [
      "MercadoLibre's first employee, managing infrastructure for 15 years.",
      "Founder of NubeliU, a private cloud company, that was sold to Logicalis in 2017",
      "Serial entrepreneur and Bitcoin early adopter, having mined and invested in BTC since 2011.",
    ]
  },
  {
    name: "Pablo Larguia",
    title: "CEO",
    subtitle: "Chief Executive Officer",
    picture: "https://i.lensdump.com/i/rnjRNF.png",
    description: [
      "Founder of Bumeran",
      "Founder of Red Innova",
      "Singularity University GSP14 Alumni",
      "Board Member Universidad Di Tella",
      "Crypto Fund & Syndicate RIF.",
    ]
  },
  {
    name: "Martin Fernandez",
    title: "CTO",
    subtitle: "Chief Technology Officer",
    picture: "https://i1.lensdump.com/i/rnjEi3.png",
    description: [
      "Bitcoin early adopter (2011)",
      "Expert in PoW mining and POS protocols",
      "Cofounded EOS Argentina (Block Producer)",
      "Founder of BTCTrip.com (Bitcoin Startup)",
      "Start-Up Chile Alumni",
    ]
  },
  {
    name: "Nacho Roizman",
    title: "COO",
    subtitle: "Chief Operating Officer",
    picture: "https://i1.lensdump.com/i/rnjEi3.png",
    description: [
      "+20 years leading multi-country operations in Latin America.",
      "Founder of USMC, Communitana & Jumba Media Group.",
      "President of Taringa Network, sold to IOV Labs in 2019.",
      "Board Member Entrepreneurs Organization since 2016.",
    ]
  },
  {
    name: "Jesus Chitty",
    title: "CEO",
    subtitle: "Chief Arquitect",
    picture: "https://i1.lensdump.com/i/rnjEi3.png",
    description: [
      "Co-Founder of EOS Argentina.",
      "Current miner and node validator on over 20 different Blockchains.",
      "Creator of open source DEFI Platform Evodex.io",
    ]
  }
];

const MemberBox = ({name, title, subtitle, picture, description}) => {
  return(
  <div class="member-container">
    <h3>{name}</h3>
    <span className="title">{title}</span>
    <span className="subtitle">{subtitle}</span>
    <img src={picture} />
    <ul>
      {description && description.map( (e) => <li>{e}</li>) }
    </ul>
  </div>
  );
}

const OurTeam = () => {
  return (
    <div css={[Styles]}>
      <div class="container">
        <span class="tag">
          Our Team
        </span>
        <div class="members-container">
          { teamMembers.map((member) => <MemberBox {...member} />) }
        </div>
      </div>
    </div>
  );
}

export default OurTeam;

