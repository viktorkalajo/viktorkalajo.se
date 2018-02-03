import React from 'react';
import PropTypes from 'prop-types';
import './SkillSet.scss';

export default function SkillSet(props) {
  return (
    <section className="skill-set">
      <h3>{props.level}</h3>
      <ul className="tags">{props.skills.map(skill => <li key={skill}>{skill}</li>)}</ul>
    </section>
  );
}

SkillSet.propTypes = {
  level: PropTypes.string,
  levelDescription: PropTypes.string,
  skills: PropTypes.arrayOf(PropTypes.string)
};
