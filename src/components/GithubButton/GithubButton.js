import React from 'react';
import PropTypes from 'prop-types';

const GithubButton = props => {
  const {
    user, repo, type, width, height, count, large
  } = props;
  let src = `https://ghbtns.com/github-btn.html?user=${user}&repo=${repo}&type=${type}`;
  if (count) src += '&count=true';
  if (large) src += '&size=large';

  return (
    <iframe
      title={`github-button-${user}-${repo}-${type}`}
      src={src}
      frameBorder="0"
      scrolling="0"
      width={width}
      height={height}
      style={{ border: 'none', width, height }}
    />
  );
};

GithubButton.propTypes = {
  user: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['star', 'watch', 'fork', 'follow']).isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  count: PropTypes.bool.isRequired,
  large: PropTypes.bool.isRequired
};

export default GithubButton;
