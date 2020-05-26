import React from 'react';
import PropTypes from 'prop-types';

function YoutubePlayer({ youtube, name }) {
  if (youtube) {
    return (
      <div className="youtubeContainer">
        <iframe
          title={name}
          src={youtube}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }
  return null;
}

YoutubePlayer.propTypes = {
  name: PropTypes.string.isRequired,
  youtube: PropTypes.string,
};
YoutubePlayer.defaultProps = {
  youtube: null,
};

export default YoutubePlayer;
