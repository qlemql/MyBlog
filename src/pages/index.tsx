import * as React from "react";
import styled from "styled-components";
import GlobalStyles from "components/Common/GlobalStyle";
import Introduction from "components/Main/Introduction";
import Footer from "components/Common/Footer";
import CategoryList from "components/Main/CategoryList";
import PostList from "components/Main/PostList";
import { graphql } from "gatsby";
import { PostListItemType } from "types/PostItem.types";

interface IndexPageProps {
  data: {
    allMdx: {
      edges: PostListItemType[];
    };
  };
}

const IndexPage: React.FC<IndexPageProps> = ({
  data: {
    allMdx: { edges },
  },
}) => {
  const CATEGORY_LIST = {
    All: 5,
    Web: 3,
    Mobile: 2,
  };

  return (
    <Container>
      <GlobalStyles />
      <Introduction />
      <CategoryList selectedCategory="Web" categoryList={CATEGORY_LIST}>
        as
      </CategoryList>
      <PostList posts={edges} />
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const getPostList = graphql`
  query MyQuery {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD")
            categories
            thumbnail
          }
        }
      }
    }
  }
`;

export default IndexPage;
