const path = require('path');

/**
 * Creates a blog post slug and date out of a absolute file path on a certain format
 * @param {string} absPath absolute path on format "/something/something/2018-01-12_foo-bar-baz.md"
 * @return {object}
 * @return {object.date} example above would be "2018-01-12"
 * @return {object.slug} example above would be "foo-bar-baz"
 */
function blogPostAbsPathToSlugAndDate(absPath) {
  const fileName = absPath.split('/').pop();
  const fileNameNoExtension = fileName.split('.').shift();
  const [, date, slug] = fileNameNoExtension.split(/(\d{4}-\d{2}-\d{2})_/);
  return { date, slug };
}

exports.onCreateNode = ({ node, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;

  if (node.internal.type === 'MarkdownRemark') {
    const { date, slug } = blogPostAbsPathToSlugAndDate(node.fileAbsolutePath);
    createNodeField({
      node,
      name: 'slug',
      value: slug
    });
    createNodeField({
      node,
      name: 'url',
      value: `/post/${slug}`
    });
    createNodeField({
      node,
      name: 'date',
      value: date
    });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise(resolve => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
                url
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.url,
          component: path.resolve('./src/templates/BlogPostTemplate.js'),
          context: {
            slug: node.fields.slug
          }
        });
      });
      resolve();
    });
  });
};
