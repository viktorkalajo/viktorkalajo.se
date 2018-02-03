import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import 'normalize.css';
import '../sass/base.scss';
import '../sass/fonts.scss';
import '../sass/print.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Viktor Kalajo | Web developer from Stockholm" />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
