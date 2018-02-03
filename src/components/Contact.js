import React from 'react';
import PropTypes from 'prop-types';

import './Contact.scss';
import portrait from '../img/viktor-kalajo-portrait.jpg';
import linkedinIcon from '../img/linkedin.png';
import githubIcon from '../img/github.png';
import facebookIcon from '../img/facebook.png';

export default function Contact(props) {
  return (
    <div className="contact">
      <img className="contact__portrait" src={portrait} alt="Portrait Viktor Kalajo" />
      <ul className="contact__list">
        <li className="contact__email">
          <a href={`mailto:${props.email}`}>{props.email}</a>
        </li>
        <li className="contact__phone">{props.phone}</li>
        <li>
          <ul className="contact__social">
            <li>
              <a href="http://se.linkedin.com/pub/viktor-kalajo/14/3/1a6/">
                <img src={linkedinIcon} alt="linkedin" />
              </a>
            </li>
            <li>
              <a href="https://github.com/viktorkalajo">
                <img src={githubIcon} alt="github" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/viktor.kalajo">
                <img src={facebookIcon} alt="facebook" />
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

Contact.propTypes = {
  email: PropTypes.string,
  phone: PropTypes.string
};
