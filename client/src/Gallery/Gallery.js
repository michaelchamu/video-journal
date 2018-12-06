import React from 'react';
import { BASE_VIDEO_URL } from '../configs/config';

const Gallery = props => {
    return (
        <div>
            {props.videos.length
                ? props.videos.map((videos, position) => {
                      let image = `${BASE_VIDEO_URL}${
                          videos.videoSnippet.path
                      }`;

                      return (
                          <div
                              key={position}
                              className="row"
                              style={{ margin: '0px' }}
                          >
                              <div
                                  className="col-md-3 col-lg-3"
                                  style={{
                                      backgroundColor: 'orange',
                                      paddingBottom: '20px',
                                      paddingTop: '18px',
                                      display: 'inline-block'
                                  }}
                              >
                                  <img
                                      alt={''}
                                      className="col-md-12 col-xs-12 col-lg-12 col-sm-12"
                                      src={`${image.substring(
                                          0,
                                          image.lastIndexOf('.')
                                      )}.png`}
                                      onClick={() => props.openModal(videos)}
                                  />
                              </div>
                              <div className="row">
                                  <div className="container testimonial-group force-style">
                                      <div
                                          className="row text-center"
                                          style={{}}
                                      >
                                          {videos.reactions.map(
                                              (reactions, index) => {
                                                  let reactionImage = `${BASE_VIDEO_URL}${
                                                      reactions.reactionPath
                                                  }`;

                                                  return (
                                                      <div
                                                          key={index}
                                                          className="col-xs-4"
                                                          id="video1"
                                                          style={{
                                                              verticalAlign:
                                                                  'center'
                                                          }}
                                                      >
                                                          <img
                                                              alt={''}
                                                              className="col-md-12 col-xs-12 col-lg-12 col-sm-12"
                                                              src={`${reactionImage.substring(
                                                                  0,
                                                                  reactionImage.lastIndexOf(
                                                                      '.'
                                                                  )
                                                              )}.png`}
                                                              onClick={() =>
                                                                  props.openReactionModal(
                                                                      reactions,
                                                                      reactions._id
                                                                  )
                                                              }
                                                          />
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
