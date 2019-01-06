
import './VideoContainer.scss';
//import jpg from '';

import React from 'react';
import PropTypes from 'prop-types';

export default function VideoContainer(props) {
        return (
            <div className="VideoContainer">
                <iframe src="https://player.vimeo.com/video/22439234" width="100%" height="350" frameborder="0"></iframe>
            </div>
        )
    
}

VideoContainer.defaultProps = {};
VideoContainer.propTypes = {};
