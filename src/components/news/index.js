import React from 'react';
import { useState, createRef, useEffect } from 'react';
import { css } from '@emotion/react';
import media from '../../styles/media';
import NewsIcon from '../icons/news';

const news = [
  {
    title: "Upcoming Tech Devs in Latam",
    date: "12.3.22",
    description: "Automating node deployment on mmultiple protocolsAutomating node deployment on mmultiple protocols",
    picture: "https://i3.lensdump.com/i/rnZgbZ.png",
    link: "techinsider.com",
  },
  {
    title: "Upcoming Tech Devs in Latam",
    date: "12.3.22",
    description: "Automating node deployment on mmultiple protocolsAutomating node deployment on mmultiple protocols",
    picture: "https://i3.lensdump.com/i/rnZgbZ.png",
    link: "techinsider.com",
  },
  {
    title: "Upcoming Tech Devs in Latam",
    date: "12.3.22",
    description: "Automating node deployment on mmultiple protocolsAutomating node deployment on mmultiple protocols",
    picture: "https://i3.lensdump.com/i/rnZgbZ.png",
    link: "techinsider.com",
  },
  {
    title: "Upcoming Tech Devs in Latam",
    date: "12.3.22",
    description: "Automating node deployment on mmultiple protocolsAutomating node deployment on mmultiple protocols",
    picture: "https://i3.lensdump.com/i/rnZgbZ.png",
    link: "techinsider.com",
  },
  {
    title: "Upcoming Tech Devs in Latam",
    date: "12.3.22",
    description: "Automating node deployment on mmultiple protocolsAutomating node deployment on mmultiple protocols",
    picture: "https://i3.lensdump.com/i/rnZgbZ.png",
    link: "techinsider.com",
  },
  {
    title: "Upcoming Tech Devs in Latam",
    date: "12.3.22",
    description: "Automating node deployment on mmultiple protocolsAutomating node deployment on mmultiple protocols",
    picture: "https://i3.lensdump.com/i/rnZgbZ.png",
    link: "techinsider.com",
  },
  {
    title: "Upcoming Tech Devs in Latam",
    date: "12.3.22",
    description: "Automating node deployment on mmultiple protocolsAutomating node deployment on mmultiple protocols",
    picture: "https://i3.lensdump.com/i/rnZgbZ.png",
    link: "techinsider.com",
  },
  {
    title: "Upcoming Tech Devs in Latam",
    date: "12.3.22",
    description: "Automating node deployment on mmultiple protocolsAutomating node deployment on mmultiple protocols",
    picture: "https://i3.lensdump.com/i/rnZgbZ.png",
    link: "techinsider.com",
  },
];

const NewBox = ({title, date, description, picture, link}) => {
  return(
  <div class="new-container">
    <h3>{title}</h3>
    <span className="date">{date}</span>
    <p className="title">{description}</p>
    <img src={picture} />
    <div className="link-icon">
      <a target="_blank" href={link} >
        <NewsIcon />
        <span>{link}</span>
      </a>
    </div>
  </div>
  );
}

const News = () => {
  const [ isDragging, setIsDragging ] = useState(false);
  const [ position, setPosition ] = useState({
    top: 0,
    left: 0,
    x: 0,
    y: 0,
  });

  const Styles = css`
    z-index: 1;
    position: relative;
    width: 100vw;
    overflow: hidden;

    .container {
      flex-direction: column;
      align-items: flex-start;
    }
    p {
      margin-top: 20px;
    }
    h2 {
      color: #fff;
      font-weight: 300;
      text-align: left;
      padding-bottom: 40px;
    }
    .tag {
      background: #000;
      color: #fff;
      border-radius: 60px;
      padding: 5px 20px;
      font-size: 2rem;
      font-weight: 400;
      margin-bottom: 60px;
    }
    .slider-container {
      width: 100vw;
      overflow:scroll;
      padding-left: calc((100vw - 1200px) / 2 );
      /* Hide scrollbar for Chrome, Safari and Opera */
      ::-webkit-scrollbar {
        display: none;
      }

      /* Hide scrollbar for IE, Edge and Firefox */
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
      cursor: ${ isDragging ? 'grab' : 'pointer' };
    }

    .news-container {
      max-width: 1000vw;
      width: auto;
      z-index:3;
      padding-top: 40px;
      float: left;
      display: flex;
      .new-container {
        width: 400px;
        position:relative;
        background: #14302B;
        border-radius: 15px;
        margin-right: 20px;
        padding:25px;

        .date {
          color: #B0EFA8;
        }

        p {
          color:white;
          font-size: 1.3rem;
          line-height: 2rem;
          font-weight:100;
        }

        h3 {
          font-size: 1.6rem;
          font-weight: 300;
          padding-top:0;
          color: #fff;
        }
        .link-icon a  {
          display: flex;
          flex-direction: row;
          position: absolute;
          bottom: 20px;
          left: 20px;
          justify-content:center;
          align-items: center;
          svg {
            width: 30px;
            height: 30px;
          }
          span {
            color: #C8C8C8;
            font-weight: 100;
            margin-left: 10px;
          }
        }
        span {
          font-size: 1.5rem;
          font-weight: 100;
          color: #34C55D;
          width: 100%;
          display: block;
        }
        img {
          margin-top: 30px;
          border-radius: 0 0 30px 30px;
          float:right;
          margin-bottom:40px;
        }

      }
    }

    ${media.medium} {
      .container {padding:20px;}
      .slider-container {
        padding-left: 20px;
        .new-container {
          max-width: 80vw;
        }
      }
      h2 { font-size: 3rem; line-height: 3.5rem; padding-right: 20px;}
    }
  `;
  
  const myRef = createRef();

  const handleMouseMove = (e) => {
    if (isDragging) {
      const dx = e.clientX - position.x;
      const dy = e.clientY - position.y;

      // Scroll the element
      myRef.current.scrollTop = position.top - dy;
      myRef.current.scrollLeft = position.left - dx;
    }
  }

  const handleMouseDown = (e) => {
    setPosition({
      left: myRef.current.scrollLeft,
      top: myRef.current.scrollTop,
      x: e.clientX,
      y: e.clientY,
    })
    setIsDragging(true);
  }

  const handleMouseUp = (e) => {
    setIsDragging(false);
  }

  return (
    <div css={[Styles]}>
      <div class="container">
        <span class="tag">
          In the News
        </span>
        <h2>See who's talking about SenseiNode in the press.</h2>
      </div>

      <div className="slider-container"
        onMouseDown={handleMouseDown} 
        onMouseUp={handleMouseUp} 
        onMouseMove={handleMouseMove}
        ref={myRef}>
        <div className="news-container">
          { news.map((newdata) => <NewBox {...newdata} />) }
        </div>
      </div>
    </div>
  );
}

export default News;

