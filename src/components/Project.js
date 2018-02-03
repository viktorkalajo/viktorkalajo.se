import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Project.scss';

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
    this.toggleExpanded = this.toggleExpanded.bind(this);
  }

  toggleExpanded(e) {
    e.preventDefault();
    this.setState({
      expanded: !this.state.expanded
    });
  }

  render() {
    return (
      <article className="project">
        <h3>
          <span>
            <span>
              {this.props.from} - {this.props.to}
            </span>
          </span>
          {this.props.title}
        </h3>
        {this.props.children}
        <ul className="tags">{this.props.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
      </article>
    );
  }
}

Project.propTypes = {
  from: PropTypes.string,
  to: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.node,
  tags: PropTypes.arrayOf(PropTypes.string)
};
