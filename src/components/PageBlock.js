import React from 'react';
import './PageBlock.scss';

export default props => {
  return (
    <section className="page-block">
      <div className="page-block__content">{props.children}</div>
    </section>
  );
};
