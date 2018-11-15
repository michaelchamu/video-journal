import React from 'react';
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';

const VideoDisplay = props => {
    return <Player playsInline poster="" src={props.video_path} />;
};

export { VideoDisplay };
