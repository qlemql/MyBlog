import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterWrapper>
        Thank You for Visiting My Blog, Have a Good Day 😆
      <br />© 2022 Developer Hyun, Powered By Gatsby.
    </FooterWrapper>
  )
}

const FooterWrapper = styled.div`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;
`

export default Footer