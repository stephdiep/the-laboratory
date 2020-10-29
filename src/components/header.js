import React from "react"
import styled from "styled-components"

const Header = ({ siteTitle }) => (
  <Wrapper>
    <LogoWrapper>
      <Logo>
        <img src={require('../images/the-laboratory.svg')} alt="The Laboratory Logo"/>
      </Logo>
      <h1>the laboratory</h1>
    </LogoWrapper>
    <NavigationWrapper>
      <a href="#">react</a>
      <a href="#">gatsby</a>
      <a href="#">google analytics</a>
      <a href="#">firebase</a>
      <a href="#">contribute</a>
    </NavigationWrapper>
  </Wrapper>
)

export default Header

const Wrapper = styled.div`
  background-color: #7CA3DC;
  display: flex;
  justify-content: space-between;
  padding: 30px 40px;
`

const LogoWrapper = styled.div`
  display: grid;
  grid-template-columns: 30px auto;
  align-items: center;
  gap: 20px;

  h1 {
    font-size: 18px;
    font-weight: normal;
    color: white;
  }
`
const Logo = styled.div`
  img {
    width: 30px;
  }
`

const NavigationWrapper = styled.div`
  display: grid;
  gap: 20px;
  align-items: center;
  grid-template-columns: repeat(5, auto);

  a {
    color: white;
    transition: 5s cubic-bezier(0.075, 0.82, 0.165, 1);
    font-size: 15px;

    &:hover {
      font-weight: bold;
      border-bottom: 1px solid white;
    }
  }
`
