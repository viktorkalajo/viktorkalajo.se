import React, { Component, PropTypes } from 'react';
import Link from 'gatsby-link';

import './BlogPostTeaser.scss';

export default class BlogPostTeaser extends Component {
  render() {
    const { title, url, date, excerpt } = this.props;
    return (
      <article className="blog-post-teaser">
        <Link to={url} className="blog-post-teaser__title-link">
          <h2 className="blog-post-teaser__title">
            <span>{date}</span>
            {title}
          </h2>
        </Link>
        <p className="blog-post-teaser__excerpt">
          {excerpt} <Link to={url}>Läs mer</Link>
        </p>
      </article>
    );
  }
}

BlogPostTeaser.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  excerpt: PropTypes.string,
  date: PropTypes.string
};
