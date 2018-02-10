import React, { Component, PropTypes } from 'react';

import PageBlock from './PageBlock';

import './BlogPost.scss';

export default class BlogPost extends Component {
  render() {
    const { title, date, html } = this.props;
    return (
      <article className="blog-post">
        <PageBlock>
          <h1 className="blog-post__title">
            <span>{date}</span>
            {title}
          </h1>
          <div className="blog-post__body" dangerouslySetInnerHTML={{ __html: html }} />
        </PageBlock>
      </article>
    );
  }
}

BlogPost.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  html: PropTypes.string
};
