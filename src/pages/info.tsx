import React from "react";
import { graphql } from "gatsby";
import styled from 'styled-components';

const Text = styled.div`
  font-size: 20px;
  color: gray
`


interface InfoPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        author: string;
      };
    };
  };
}

const InfoPage: React.FC<InfoPageProps> = function ({
  data: {
    site: {
      siteMetadata: { title, description, author },
    },
  },
}) {
  return (
    <div>
    <Text>{title}</Text>
      {description}
      {author}
    </div>
  );
};

export default InfoPage;

export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
