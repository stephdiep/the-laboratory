import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <TextWrapper>
      <h1>the laboratory</h1>
      <p>a space for learning and exchanging</p>
    </TextWrapper>
  </Layout>
)

export default IndexPage

const TextWrapper = styled.div`
  display: grid;
  gap: 20px;
  padding: 0 0 20px;
`
