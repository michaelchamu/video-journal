import React from 'react';
import { BASE_VIDEO_URL } from '../configs/config';

const Reactions = props => {
    return (
        <div>
            {props.videos.reactions
                ? props.videos.reactions.map((reaction, index) => {
                      let reactionImage = `${BASE_VIDEO_URL}${
                          reaction.reactionPath
                      }`;
                      return (
                          <div
                              key={index}
                              className="col-xs-4 col-sm-4 col-lg-4 col-md-4"
                          >
                              <img
                                  alt={'Reaction image'}
                                  className="col-md-12 col-xs-12 col-lg-12 col-sm-12"
                                  src={`${reactionImage.substring(
                                      0,
                                      reactionImage.lastIndexOf('.')
                                  )}.png`}
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
