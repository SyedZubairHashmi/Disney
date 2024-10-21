import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg" />
          <span>HOME</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" />
          <span>ORIGINAL</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src="/images/zubair.jpg" />
    </Nav>
  );
}

export default Header;

const Logo = styled.img`
  width: 80px;
`;

const Nav = styled.nav`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;

`;
const NavMenu = styled.div`
  display: flex;
  margin-left: 40px;
  gap: 20px;
  flex: 1;
  cursor: pointer;
  align-items: center;

  a {
    display: flex;
    align-items: center; // It will center vertically
    // padding: 0 12px;
    letter-spacing: 1.42px;
    // gap: 5px;
    position: relative;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px; // Adjust this value to move the underline up or down
        opacity: 0;
        transform: scaleX(0); // Initially hidden
        transition: all 0.25s ease-in-out;
      }
    }

    &:hover 
    span:after {
      opacity: 1;
      transform: scaleX(1); // On hover, it will expand the underline
    }
  }
`;


const UserImg = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 100px;
  cursor: pointer;
`;
