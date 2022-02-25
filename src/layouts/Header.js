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
          padding: 5px 10px;
          font-size: 16px;
          background: #C4C4C4;
          color: #000;
          border-radius: 20px;
        }
      }
    }
    ${media.medium} {
      background: transparent;
      position: absolute;

      padding-left: 20px;
      height: 70px;
      z-index: 6;
      .logo-container {
        max-width:80vw;
        img {
          max-width:100%;
        }
      }
      .menu {
        display: none;
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

        <nav class="menu">
          <ul>
            <li>
              <Link to="/about-us">
                About
              </Link>
            </li>
            <li>
              <Link to="/services">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact">
                Team
              </Link>
            </li>
            <li>
              <Link to="/contact">
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
