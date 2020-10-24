import React from "react"
import styled from "styled-components"

const Header = ({ siteTitle }) => (
  <Wrapper>
    <ContentWrapper>
      <Logo>
        <a href="/">
          eleven
        </a>
      </Logo>
    </ContentWrapper>
  </Wrapper>
)

export default Header

const Wrapper = styled.div`
`

const ContentWrapper = styled.div`
  display: grid;
  padding: 40px;
`
const Logo = styled.h1`
  font-size: 18px;

  a {
    color: black;
    transition: 2s cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover {
      background: none;
      border-bottom: 3px solid black;
      padding: 0;
      margin: 0 10px;
    }
  }
`

