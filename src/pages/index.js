import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Home" />
      <HeroWrapper>
        <TextWrapper>
          <h1>the laboratory: become a mad coder</h1>
          <p>From front-end to back-end, and passing by different APIs, become a mad coder by creating amazing applications with the latest technology on the market with step-by-step instructions.</p>
        </TextWrapper>
        <ImageWrapper>
          <img src={require('../images/scientist.svg')} alt="scientist"/>
        </ImageWrapper>
      </HeroWrapper>
      <WhySection>
        <ImageWrapper>
          <img src={require('../images/medical-laboratory.svg')} alt="laboratory jug"/>
        </ImageWrapper>
        <TextWrapper>
          <h2>why the laboratory?</h2>
          <p><strong>the laboratory</strong> is an open-source project created to help junior and more experienced coders level up their skills in order to becode a mad coder. </p>
        </TextWrapper>
      </WhySection>
    </Layout>
  )
}

export default IndexPage

const HeroWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  gap: 20px;
  padding: 100px 0;

  img {
    width: 200px;
  }
`

const TextWrapper = styled.div`
  display: grid;
  gap: 20px;
  padding: 0 0 20px;

  p {
    max-width: 750px;
  }
`

const ImageWrapper = styled.div`
  justify-items: center;
`

const WhySection = styled.div`
  display: grid;
  grid-template-columns: 400px auto;
  align-items: center;
  gap: 20px;
  padding: 100px 0;

  img {
    max-width: 200px;
  }

  div {
    justify-items: end;
    text-align: right;
  }
`
