import React from 'react';
import { BASE_VIDEO_URL } from '../configs/config';
const Video = props => {
    console.log(props.videos);
    return (
        <div>
            {props.videos ? (
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <center>
                                <h4 className="modal-title" id="modal-header">
                                    Video Snippet{' '}
                                    {props.videos.videoSnippet.position}
                                </h4>
                            </center>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <video
                                        src={`${BASE_VIDEO_URL}${
                                            props.videos.videoSnippet.path
                                        }`}
                                        className="col-md-12 col-xs-12 col-lg-12 col-sm-12"
                                        height="100%"
                                        controls
                                    >
                                        {/* <source src={videolink} type="video/mp4" id="video_source" /> */}
                                    </video>

                                    {/* {props.updateSrc(
                                            `${BASE_VIDEO_URL}${
                                                props.videos.videoSnippet.path
                                            }`,
                                            props.videos._id
                                        )} */}
                                </div>
                            </div>
                            <div
                                className="container testimonial-group"
                                style={{ width: '100%' }}
                            >
                                <div className="row text-center">
                                    {props.videos.reactions.map(
                                        (reaction, index) => {
                                            return (
                                                <div
                                                    key={index}
                                                    className="col-xs-4 col-sm-4 col-lg-4 col-md-4"
                                                >
                                                    <img
                                                        onClick={() =>
                                                            props.updateSrc(
                                                                `${BASE_VIDEO_URL}${
                                                                    reaction.reactionPath
                                                                }`,
                                                                reaction._id
                                                            )
                                                        }
                                                        src="http://localhost:3000/images/1.jpg"
                                                        className="col-xs-12 col-sm-12"
                                                    />
                                                </div>
                                            );
                                        }
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <div className="row">
                                <div className="col-md-6 col-xs-6 col-sm-6 col-lg-6">
                                    <button
                                        type="button"
                                        className="btn btn-default btn-block"
                                        data-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                </div>
                                <div className="col-md-6 col-xs-6 col-sm-6 col-lg-6">
                                    <button
                                        type="button"
                                        className="btn btn-success btn-block"
                                    >
                                        Upload
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export { Video };
