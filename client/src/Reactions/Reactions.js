import React from 'react';
import VideoThumbnail from 'react-video-thumbnail';
import { BASE_VIDEO_URL } from '../configs/config';

const Reactions = props => {
    console.log(props.videos ? 'yes' : null);
    return (
        <div>
            {props.videos.reactions
                ? props.videos.reactions.map((reaction, index) => {
                      return (
                          <div
                              key={index}
                              className="col-xs-4 col-sm-4 col-lg-4 col-md-4"
                          >
                              <img
                                  alt={'Reaction image'}
                                  className="col-md-12 col-xs-12 col-lg-12 col-sm-12"
                                  src={`images/${index + 1}.jpg`}
                                  onClick={() =>
                                      props.updateSrc(
                                          `${reaction.reactionPath}`,
                                          reaction._id
                                      )
                                  }
                              />
                          </div>
                      );
                  })
                : null}
        </div>
    );
};
export { Reactions };
