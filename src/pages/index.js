import React from 'react';

import PageBlock from '../components/PageBlock';
import BlogLayout from '../components/BlogLayout';
import BlogPostTeaser from '../components/BlogPostTeaser';

const index = ({ data }) => {
  return (
    <BlogLayout>
      <PageBlock>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <BlogPostTeaser
              key={node.fields.slug}
              url={node.fields.url}
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              excerpt={node.excerpt}
            />
          );
        })}
      </PageBlock>
    </BlogLayout>
  );
};

export default index;

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          html
          fields {
            slug
            url
          }
        }
      }
    }
  }
`;
