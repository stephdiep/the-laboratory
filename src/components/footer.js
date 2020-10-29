import React from "react"
import styled from "styled-components"

const Footer = () => (
  <Wrapper>
    <div>
      <LogoWrapper>
        <img src={require('../images/the-laboratory.svg')} alt="The Laboratory Logo"/>
      </LogoWrapper>
      <TitleWrapper>
        <h1>the laboratory</h1>
        <Subtitle>
          a space for learning and exchanging
        </Subtitle>
      </TitleWrapper>
      <LinksWrapper>
        <a href="#">Examine all lessons</a>
        <a href="#">Terms of Use</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Site Map</a>
        <p>© 2020 eleven</p>
      </LinksWrapper>
    </div>
    <SocialWrapper>
      <SocialIcons>
        <img src={require('../images/github.svg')} alt="github" onClick={() => { window.open('https://github.com/11-eleven') }}/>
        <img src={require('../images/twitter.svg')} alt="github" onClick={() => { window.open('https://twitter.com/steph_the_dev') }}/>
      </SocialIcons>
      <Form onSubmit={() => {
        console.log('Form submitted')
        }}>
        <p>stay up to date</p>
        <div>
          <input name="email" placeholder="email address" required></input>
          <button>
            <img src={require('../images/paper-plane.svg')} alt="Paper plane"/>
          </button>
        </div>
      </Form>
    </SocialWrapper>
  </Wrapper>
)

export default Footer

const Wrapper = styled.div`
  padding: 30px 40px;
  border-top: 5px solid #7CA3DC;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

const LogoWrapper = styled.div`
  position: absolute;
  left: 50vw;
  top: -30px;
  background: #EBF2FE;
  border-radius: 50%;
  padding: 10px;

  img {
    width: 30px;
  }
`

const TitleWrapper = styled.div`
  display: grid;

  h1 {
    font-size: 15px;
  }
`

const Subtitle = styled.p`
  font-size: 12px;
`

const LinksWrapper = styled.div`
  display: grid;
  gap: 10px;
  padding: 20px 0;

  p, a {
    font-size: 12px;
    color: #0C2851;
  }
`

const SocialWrapper = styled.div`
  display: grid;
  gap: 20px;
`

const SocialIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 25px);
  justify-items: center;
  gap: 10px;

  img {
    width: 25px;
    cursor: pointer;
  }
`

const Form = styled.form`
/* TO DO: Remove on selected state, it's ugly */
  p {
    font-weight: bold;
    font-size: 12px;
  }

  div {
    display: grid;
    grid-template-columns: auto auto;
    gap: 10px;
  }

  input {
    border: none;
    border-bottom: 2px solid #7CA3DC;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 12px;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }
  
  img {
    width: 20px;
  }
`
