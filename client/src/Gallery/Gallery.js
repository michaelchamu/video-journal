import React from 'react';
import { THUMBNAILS } from '../configs/config';
const Gallery = props => {
    return (
        <div>
            {props.videos.length
                ? props.videos.map((videos, position) => {
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
                                      onClick={() => props.openModal(videos)}
                                      src={`${THUMBNAILS}${
                                          videos.videoSnippet.thumbnail
                                      }`}
                                      className="col-xs-12 col-sm-12"
                                  />
                              </div>
                              <div className="row">
                                  <div className="container testimonial-group force-style">
                                      <div className="row text-center">
                                          {videos.reactions.map(
                                              (reactions, index) => {
                                                  return (
                                                      <div
                                                          key={index}
                                                          className="col-xs-4"
                                                          id="video1"
                                                      >
                                                          <img
                                                              alt={''}
                                                              onClick={() =>
                                                                  props.openModal(
                                                                      videos
                                                                  )
                                                              }
                                                              src={`${THUMBNAILS}${
                                                                  reactions.thumbnail
                                                              }`}
                                                              className="col-xs-12 col-sm-12"
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
