import React from "react";
import VideoThumbnail from "react-video-thumbnail";
import { BASE_VIDEO_URL } from "../configs/config";

const Gallery = props => {
    return (
        <div>
            {props.videos.length
                ? props.videos.map((videos, position) => {
                      return (
                          <div
                              key={position}
                              className="row"
                              style={{ margin: "0px" }}
                          >
                              <div
                                  className="col-md-3 col-lg-3"
                                  style={{
                                      backgroundColor: "orange",
                                      paddingBottom: "20px",
                                      paddingTop: "18px",
                                      display: "inline-block"
                                  }}
                              >
                                  <a
                                      href="#"
                                      onClick={() => props.openModal(videos)}
                                  >
                                      <VideoThumbnail
                                          videoUrl={`${BASE_VIDEO_URL}${
                                              videos.videoSnippet.path
                                          }`}
                                      />
                                  </a>
                              </div>
                              <div className="row">
                                  <div className="container testimonial-group force-style">
                                      <div
                                          className="row text-center"
                                          style={{}}
                                      >
                                          {videos.reactions.map(
                                              (reactions, index) => {
                                                  return (
                                                      <div
                                                          key={index}
                                                          className="col-xs-4"
                                                          id="video1"
                                                          style={{
                                                              verticalAlign:
                                                                  "center"
                                                          }}
                                                      >
                                                          <a
                                                              href="#"
                                                              onClick={() =>
                                                                  props.openReactionModal(
                                                                      reactions,
                                                                      reactions._id
                                                                  )
                                                              }
                                                          >
                                                              <VideoThumbnail
                                                                  videoUrl={`${BASE_VIDEO_URL}${
                                                                      reactions.reactionPath
                                                                  }`}
                                                              />
                                                          </a>
                                                      </div>
                                                  );
                                              }
                                          )}
                                      </div>
                                  </div>
                              </div>
                          </div>
                      );
                  })
                : null}

            <div className="col-xs-10 col-md-10 col-lg-10 col-sm-12 scrollit" />
        </div>
    );
};
export { Gallery };
