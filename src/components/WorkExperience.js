import React from 'react';
import PropTypes from 'prop-types';
import './WorkExperience.scss';

export default function WorkExperience(props) {
  return (
    <article className="work-experience">
      <h3>
        <span>
          <span>
            {props.employer} | {props.from} - {props.to}
          </span>
        </span>
        {props.title}
      </h3>
    </article>
  );
}

WorkExperience.propTypes = {
  from: PropTypes.string,
  to: PropTypes.string,
  title: PropTypes.string,
  employer: PropTypes.string
};
