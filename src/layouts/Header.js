import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { css } from '@emotion/react';

import media from '../styles/media';
import { palette } from '../styles/palette';
import { useThemeContext } from '../contexts/ThemeContext';

const Header = () => {
  const { pathname } = useLocation();
  const { isLight, toggleTheme } = useThemeContext();
  const [ menuOpened, setMenuOpened ]= useState(false);

  const handleToggleMenu = () => {
    setMenuOpened(!menuOpened);
  }

  const headerStyle = (isLight) => css`
    height: 100px;
    background-color: #0C0C0C;
    display: flex;
    align-items: center;
    justify-content: center;
    
    .menu-container a {
      color: #ffc515;
      padding: 10px 15px;
    }

    .menu {
      width: 400px;
      ul {
        display:flex;
        li {
          margin: 0 10px;
          text-align: center;
          width: 100%;
          display: inline;
          padding: 10px 10px;
          font-size: 16px;
          background: #C4C4C4;
          color: #000;
          border-radius: 20px;
        }
      }
    }
    ${media.medium} {      
        .logo-container {
          width: 60px;
          img {
            width: 100%;
          }
        }
        padding-left: 20px;
        height: 70px;
      

      .menu {
        overflow: hidden;
        height: auto;
        max-height: ${ menuOpened ? '100%' : '0' };
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        width: 100%;
        bottom: 0;
        z-index: 10;
        display: flex;
        transition: all 0.5s;
        ul {
          flex-direction: column; 
          width: 50%;
          margin: auto;
          li {
            color: #fff;
            border-bottom: 2px solid #FFC515;
            &:last-child {
              border: 0;
            }
          }
        }
      }
    }
  `;
  
  const StylesMenuMobile = css`
    display: none;
    ${media.medium} {
      z-index: 12;
      display: block;
      position: ${ menuOpened ? 'fixed' : 'absolute' };
      right: 20px;
      top: 20px;

      button {
        background: #000;
        color:#fff;
        border:none;

        &.open {
          .container {
            display: inline-block;
            cursor: pointer;
          }

          .bar1, .bar2, .bar3 {
            width: 35px;
            height: 5px;
            background-color: #fff;
            margin: 6px 0;
            transition: 0.4s;
          }

          &.change .bar1 {
            -webkit-transform: rotate(-45deg) translate(-8px, 6px);
            transform: rotate(-45deg) translate(-8px, 6px);
          }

          &.change .bar2 {opacity: 0;}

          &.change .bar3 {
            -webkit-transform: rotate(45deg) translate(-8px, -8px);
            transform: rotate(45deg) translate(-8px, -8px);
          }
        }
      } 
    }
  `;

  return (
    <header css={[headerStyle(isLight)]}>
      <div class="container">
        <div class="logo-container">
          <Link to="/" replace={pathname === '/'}>
            <img src={'https://i2.lensdump.com/i/refRDk.png'} />
          </Link>
        </div>
        <div css={[StylesMenuMobile]}>
          <button onClick={handleToggleMenu} 
          className={`open ${menuOpened ? 'change' : ''}`}>
            <div class="container">
              <div class="bar1"></div>
              <div class="bar2"></div>
              <div class="bar3"></div>
            </div>

          </button>
        </div>
        
        <nav class="menu">
          <ul>
            <li>
              <Link onClick={() => setMenuOpened(false)} to="/about-us">
                About
              </Link>
            </li>
            <li>
              <Link onClick={() => setMenuOpened(false)} to="/services">
                Services
              </Link>
            </li>
            <li>
              <Link onClick={() => setMenuOpened(false)} to="/contact">
                Team
              </Link>
            </li>
            <li>
              <Link onClick={() => setMenuOpened(false)} to="/contact">
                News
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
