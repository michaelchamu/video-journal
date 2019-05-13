import React from 'react';
import Modal from 'react-responsive-modal';
import { Comments } from '../Comments/Comments';
import { Reactions } from '../Reactions/Reactions';
import { ReactionsModal } from '../Modal/ReactionsModal';
const ModalDisplay = props => {
    return (
        <div>
            {props.videos.videoSnippet && !props.comments ? (
                <Modal open={props.open} onClose={props.onClose} center>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <center>
                                    <h4
                                        className="modal-title"
                                        id="modal-header"
                                    >
                                        {`Video Snippet 
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
                                        <iframe
                                            title="Snippet"
                                            width="100%"
                                            height="315"
                                            src={`https://www.youtube.com/embed/${
                                                props.video
                                            }`}
                                        />
                                    </div>
                                </div>
                                <div
                                    className="container testimonial-group"
                                    style={{ width: '100%' }}
                                >
                                    <div className="row text-center">
                                        {props.comments ? (
                                            <Comments
                                                comments={props.comments}
                                                updateSrc={props.updateSrc}
                                                styles={props.style}
                                            />
                                        ) : (
                                            <Reactions
                                                videos={props.videos}
                                                updateSrc={props.updateSrc}
                                                styles={props.style}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            ) : (
                <ReactionsModal
                    open={props.open}
                    onClose={props.onClose}
                    comments={props.comments}
                    updateSrc={props.updateSrc}
                    video={props.video}
                    handleClickOpen={props.handleClickOpen}
                />
            )}
        </div>
    );
};
export { ModalDisplay };
