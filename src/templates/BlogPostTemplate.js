import React from 'react';
import Helmet from 'react-helmet';

import BlogLayout from '../components/BlogLayout';
import BlogPost from '../components/BlogPost';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <BlogLayout>
      <Helmet title={`Viktor Kalajo | ${post.frontmatter.title}`} />
      <BlogPost title={post.frontmatter.title} date={post.frontmatter.date} html={post.html} />
    </BlogLayout>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`;
