import React from 'react';
import { BASE_VIDEO_URL } from '../configs/config';
let style = {};
let style2 = {};
const colorChange = props => {
    console.log(props);
    // #9E163A
    // #E6165E
    // #442775
    // #429398
    // #E6AC22
    // #E1CF5D
    // #1E8545
    // #88BD2E

    switch (props.position) {
        case 1:
            return (
                (style = {
                    backgroundColor: '#9E163A',
                    paddingBottom: '20px',
                    paddingTop: '20px',
                    display: 'inline-block'
                }),
                (style2 = {
                    backgroundColor: '#9E163A',
                    fontSize: '48px',
                    paddingBottom: '20px',
                    paddingTop: '18px'
                })
            );
        case 2:
            return (
                (style = {
                    backgroundColor: '#E6165E',
                    paddingBottom: '20px',
                    paddingTop: '20px',
                    display: 'inline-block'
                }),
                (style2 = {
                    backgroundColor: '#E6165E',
                    fontSize: '48px',
                    paddingBottom: '20px',
                    paddingTop: '18px'
                })
            );
        case 3:
            return (
                (style = {
                    backgroundColor: '#442775',
                    paddingBottom: '20px',
                    paddingTop: '20px',
                    display: 'inline-block'
                }),
                (style2 = {
                    backgroundColor: '#442775',
                    fontSize: '48px',
                    paddingBottom: '20px',
                    paddingTop: '18px'
                })
            );
        case 4:
            return (
                (style = {
                    backgroundColor: '#429398',
                    paddingBottom: '20px',
                    paddingTop: '20px',
                    display: 'inline-block'
                }),
                (style2 = {
                    backgroundColor: '#429398',
                    fontSize: '48px',
                    paddingBottom: '20px',
                    paddingTop: '18px'
                })
            );
        case 5:
            return (
                (style = {
                    backgroundColor: '#E6AC22',
                    paddingBottom: '20px',
                    paddingTop: '20px',
                    display: 'inline-block'
                }),
                (style2 = {
                    backgroundColor: '#E6AC22',
                    fontSize: '48px',
                    paddingBottom: '20px',
                    paddingTop: '18px'
                })
            );
        case 6:
            return (
                (style = {
                    backgroundColor: '#E1CF5D',
                    paddingBottom: '20px',
                    paddingTop: '20px',
                    display: 'inline-block'
                }),
                (style2 = {
                    backgroundColor: '#E1CF5D',
                    fontSize: '48px',
                    paddingBottom: '20px',
                    paddingTop: '18px'
                })
            );
        case 7:
            return (
                (style = {
                    backgroundColor: '#1E8545',
                    paddingBottom: '20px',
                    paddingTop: '20px',
                    display: 'inline-block'
                }),
                (style2 = {
                    backgroundColor: '#1E8545',
                    fontSize: '48px',
                    paddingBottom: '20px',
                    paddingTop: '18px'
                })
            );
        case 8:
            return (
                (style = {
                    backgroundColor: '#88BD2E',
                    paddingBottom: '20px',
                    paddingTop: '20px',
                    display: 'inline-block'
                }),
                (style2 = {
                    backgroundColor: '#88BD2E',
                    fontSize: '48px',
                    paddingBottom: '20px',
                    paddingTop: '18px'
                })
            );
        default:
            return null;
    }
};
const Gallery = props => {
    return (
        <div>
            {props.videos.length
                ? props.videos.map((videos, position) => {
                      let image = `${BASE_VIDEO_URL}${
                          videos.videoSnippet.path
                      }`;
                      colorChange(videos.videoSnippet);
                      console.log(style);
                      return (
                          <div
                              key={position}
                              className="row"
                              //move this entire blocl
                              style={{ margin: '0px' }} //style={style}
                          >
                              <div className="col-md-3 col-lg-3" style={style}>
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
                              <div
                                  className="row"
                                  style={{
                                      marginLeft: '0px',
                                      marginRight: '0px'
                                  }}
                              >
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
                                                          //   style={{
                                                          //       verticalAlign:
                                                          //           'center'
                                                          //   }}
                                                          style={style2}
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
