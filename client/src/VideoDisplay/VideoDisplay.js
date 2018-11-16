import React from 'react';
import { Player } from 'video-react';

import 'video-react/dist/video-react.css';
import { BASE_VIDEO_URL } from '../configs/config';

const VideoDisplay = props => {
    const video = BASE_VIDEO_URL + props.video;
    return (
        <Player playsInline aspectRatio={'auto'} fluid={false} src={video} />
    );
};

export { VideoDisplay };
