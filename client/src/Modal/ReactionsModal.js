import React from 'react';
import Modal from 'react-responsive-modal';
import { Comments } from '../Comments/Comments';
import { BASE_VIDEO_URL } from '../configs/config';
const ReactionsModal = props => {
    console.log(props);
    return (
        <div>
            <Modal open={props.open} onClose={props.onClose} center>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <center>
                                <h4 className="modal-title" id="modal-header">
                                    Reaction
                                </h4>
                            </center>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <video
                                        src={`${BASE_VIDEO_URL}${props.video}`}
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
                                {props.comments ? (
                                    <Comments
                                        comments={props.comments}
                                        updateSrc={props.updateSrc}
                                    />
                                ) : (
                                    <div>
                                        <h3>No comments</h3>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="modal-footer">
                            <div className="row">
                                <div className="col-md-6 col-xs-6 col-sm-6 col-lg-6">
                                    <button
                                        type="button"
                                        className="btn btn-default btn-block"
                                        onClick={() => props.onClose()}
                                    >
                                        Close
                                    </button>
                                </div>
                                <div className="col-md-6 col-xs-6 col-sm-6 col-lg-6">
                                    <button
                                        type="button"
                                        className="btn btn-success btn-block"
                                        onClick={() => props.handleClickOpen()}
                                    >
                                        Upload
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};
export { ReactionsModal };
