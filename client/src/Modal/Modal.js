import React from 'react';
import Modal from 'react-responsive-modal';
import { BASE_VIDEO_URL } from '../configs/config';
import { THUMBNAILS } from '../configs/config';
const ModalDisplay = props => {
    console.log(props.video);
    return (
        <div>
            <Modal open={props.open} onClose={props.onClose} center>
                {props.videos ? (
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <center>
                                    <h4
                                        className="modal-title"
                                        id="modal-header"
                                    >
                                        {props.comments
                                            ? 'Reaction comments'
                                            : `Video Snippet 
                                              ${
                                                  props.videos.videoSnippet
                                                      .position
                                              }`}
                                    </h4>
                                </center>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <video
                                            src={`${BASE_VIDEO_URL}${
                                                props.video
                                            }`}
                                            className="col-md-12 col-xs-12 col-lg-12 col-sm-12"
                                            height="100%"
                                            controls
                                        />
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
                                                            alt={''}
                                                            onClick={() =>
                                                                props.updateSrc(
                                                                    `${
                                                                        reaction.reactionPath
                                                                    }`,
                                                                    reaction._id
                                                                )
                                                            }
                                                            src={`${THUMBNAILS}${
                                                                reaction.thumbnail
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
            </Modal>
        </div>
    );
};
export { ModalDisplay };
