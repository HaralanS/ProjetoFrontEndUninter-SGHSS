    import React from 'react';
    import PropTypes from 'prop-types';
    import styles from './YoutubeIFrame.module.css';

    const YoutubeIFrame = ({ embedId }) => (
      <div className={styles.videoResponsive}>
      {/* <div > */}
        <iframe
        //   width="853"
        //   height="480"
          src={`https://www.youtube.com/embed/${embedId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    );

    YoutubeIFrame.propTypes = {
      embedId: PropTypes.string.isRequired,
    };

    export default YoutubeIFrame;