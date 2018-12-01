import React from 'react';
import { THUMBNAILS } from '../configs/config';

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
                                  alt={''}
                                  onClick={() =>
                                      props.updateSrc(
                                          `${reaction.reactionPath}`,
                                          reaction._id
                                      )
                                  }
                                  src={`${THUMBNAILS}${reaction.thumbnail}`}
                                  className="col-xs-12 col-sm-12"
                              />
                          </div>
                      );
                  })
                : null}
            {/* props.videos.reactions.map( (reaction, index) =>{' '}
            {
               
            }
            ) */}
        </div>
    );
};
export { Reactions };
