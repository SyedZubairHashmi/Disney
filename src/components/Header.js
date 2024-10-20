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
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 36px;
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
    align-items: center; //it wiil center verticaly
    padding: 0 12px;
    gap: 5px;

    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
    }
  }
`;

const UserImg = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 100px;
  cursor: pointer;
`;
