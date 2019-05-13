import React from 'react';

const Comments = props => {
    return (
        <div className="row text-center">
            {props.comments
                ? props.comments.map((comment, index) => {
                      return (
                          <div
                              key={index}
                              className="col-xs-4 col-sm-4 col-lg-4 col-md-4"
                              style={props.styles}
                          >
                              <img
                                  alt={''}
                                  className="col-md-12 col-xs-12 col-lg-12 col-sm-12"
                                  src={`http://img.youtube.com/vi/${
                                      comment.commentPath
                                  }/0.jpg`}
                                  onClick={() =>
                                      props.updateSrc(
                                          comment.commentPath,
                                          comment.reactionId
                                      )
                                  }
                              />
                          </div>
                      );
                  })
                : 'No comments'}
        </div>
    );
};

export { Comments };
