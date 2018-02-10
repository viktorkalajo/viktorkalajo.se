import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import Contact from './Contact';
import './BlogLayout.scss';

const BlogLayout = ({ children }) => (
  <div className="blog-layout">
    <header className="blog-layout__header">
      <div className="blog-layout__header-inner">
        <Link to="/" className="blog-layout__title-link">
          <h1 className="blog-layout__title">viktorkalajo.se - anteckningar om webbutveckling</h1>
        </Link>
      </div>
    </header>
    <div>{children}</div>
    <footer className="blog-layout__footer">
      <div className="blog-layout__footer-inner">
        <p>
          <Link to="/cv">Länk till CV</Link>
        </p>
        <h3 className="blog-layout__footer-title">Kontakt</h3>
        <Contact email="viktor.kalajo@gmail.com" phone="073 313 70 33" />
      </div>
    </footer>
  </div>
);

BlogLayout.propTypes = {
  children: PropTypes.node
};

export default BlogLayout;
