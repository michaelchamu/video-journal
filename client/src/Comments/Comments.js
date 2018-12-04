import React from "react";
import { BASE_VIDEO_URL } from "../configs/config";
import VideoThumbnail from "react-video-thumbnail";

const Comments = props => {
    console.log(props);
    return (
        <div className="row text-center">
            {props.comments
                ? props.comments.map((comment, index) => {
                      return (
                          <div
                              key={index}
                              className="col-xs-4 col-sm-4 col-lg-4 col-md-4"
                          >
                              <img
                                  alt={""}
                                  className="col-md-12 col-xs-12 col-lg-12 col-sm-12"
                                  src={`images/comment.png`}
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
                : "No comments"}
        </div>
    );
};

export { Comments };
