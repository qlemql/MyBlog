import * as React from "react";
import styled from 'styled-components';
import GlobalStyles from "components/Common/GlobalStyle";
import Introduction from "components/Main/Introduction";
import Footer from "components/Common/Footer";
import CategoryList from "components/Main/CategoryList";

const IndexPage = () => {

  const CATEGORY_LIST = {
    All: 5,
    Web: 3,
    Mobile: 2,
  }

  return (
    <Container>
      <GlobalStyles />
      <Introduction />
      <CategoryList selectedCategory="Web" categoryList={CATEGORY_LIST}>as</CategoryList>
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
