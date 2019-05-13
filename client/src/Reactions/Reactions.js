import React from 'react';

const Reactions = props => {
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
                                  alt={'reaction'}
                                  className="col-md-12 col-xs-12 col-lg-12 col-sm-12"
                                  src={`http://img.youtube.com/vi/${
                                      reaction.reactionPath
                                  }/0.jpg`}
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
