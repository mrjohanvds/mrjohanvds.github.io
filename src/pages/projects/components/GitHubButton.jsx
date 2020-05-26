import React from 'react';
import PropTypes from 'prop-types';
import GithubCorner from 'react-github-corner';

function GitHubButton({ github }) {
  if (github) {
    return (<GithubCorner href={github} />);
  }
  return null;
}

GitHubButton.propTypes = {
  github: PropTypes.string,
};
GitHubButton.defaultProps = {
  github: null,
};

export default GitHubButton;
