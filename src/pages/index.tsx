import * as React from "react";
import styled from 'styled-components';
import GlobalStyles from "components/Common/GlobalStyle";
import Introduction from "components/Main/Introduction";
import Footer from "components/Common/Footer";

const IndexPage = () => {
  return (
    <Container>
      <GlobalStyles />
      <Introduction />
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export default IndexPage;
