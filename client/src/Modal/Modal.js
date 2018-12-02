import React from "react";
import Modal from "react-responsive-modal";
import { Comments } from "../Comments/Comments";
import { Reactions } from "../Reactions/Reactions";
import { ReactionsModal } from "../Modal/ReactionsModal";
import { BASE_VIDEO_URL } from "../configs/config";
const ModalDisplay = props => {
    console.log(props);
    return (
        <div>
            {props.videos.videoSnippet ? (
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
                                    style={{ width: "100%" }}
                                >
                                    <div className="row text-center">
                                        {props.comments ? (
                                            <Comments
                                                comments={props.comments}
                                                updateSrc={props.updateSrc}
                                            />
                                        ) : (
                                            <Reactions
                                                videos={props.videos}
                                                updateSrc={props.updateSrc}
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
