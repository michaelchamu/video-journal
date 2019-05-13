import React, { Component } from 'react';
import { News } from '../News/News';
import { ModalDisplay } from '../Modal/Modal';
import { Gallery } from '../Gallery/Gallery';
import { Uploader } from '../Uploader/Uploader';
import {
    fetchItems,
    saveItems,
    getComments
} from '../services/functions.services';
class Home extends Component {
    state = {
        payload: fetchItems(),
        videolink: '',
        video: null,
        comments: null,
        styles: null,
        open: false,
        openDialogue: false,
        reactionId: null
    };

    componentDidMount() {
        fetchItems().then(result => {
            this.setState({
                payload: result
            });
        });
    }

    chooseVideo = video => {
        this.setState({ videolink: video });
    };

    openModal = (video, style) => {
        this.setState({
            open: true,
            payload: video,
            comments: null,
            videolink: video.videoSnippet.path,
            styles: style
        });
    };

    openReactionModal = (reaction, id, style) => {
        getComments(id).then(comments => {
            return this.setState({
                open: true,
                videolink: reaction.reactionPath,
                comments: comments.data,
                reactionId: id,
                styles: style
            });
        });
    };

    onCloseModal = () => {
        fetchItems().then(result => {
            this.setState({
                payload: result,
                comments: null,
                open: false
            });
        });
    };

    saveComment = (event, reactionPath) => {
        event.preventDefault();
        let form = new FormData();
        form.append('country', event.target.country.value);
        form.append('video', event.target.video.files[0]);
        form.append('reactionPath', reactionPath);

        saveItems(form, this.state.reactionId).then(result => {
            getComments(this.state.reactionId).then(comments => {
                return this.setState({
                    openDialogue: false,
                    comments: comments.data
                });
            });
        });
    };

    changeSrc = (videolink, id) => {
        //get comments
        getComments(id).then(comments => {
            console.log(this.state);
            return this.setState({
                videolink: videolink,
                comments: comments.data,
                videoSnippet: null
            });
        });
    };

    handleClose = form => {
        this.setState({ openDialogue: false, open: true });
    };
    handleClickOpen = () => {
        this.setState({ openDialogue: true, open: false });
    };
    render() {
        return (
            <div className="row">
                <div className="col-xs-12 col-md-10 col-lg-10 col-sm-12 scrollit">
                    <center>
                        <h1>#TellTheSan</h1>
                    </center>
                    <Gallery
                        videos={this.state.payload}
                        openModal={this.openModal}
                        openReactionModal={this.openReactionModal}
                        closeModal={this.onCloseModal}
                    />
                </div>
                <div
                    className="col-xs-12 col-md-2 col-lg-2 col-sm-12 fixed desk"
                    style={{ paddingRight: '0px !important' }}
                >
 
                    <News />
                </div>
     
                {this.state.open ? (
                    <ModalDisplay
                        open={this.state.open}
                        onClose={this.onCloseModal}
                        videos={this.state.payload}
                        comments={this.state.comments}
                        updateSrc={this.changeSrc}
                        video={this.state.videolink}
                        handleClickOpen={this.handleClickOpen}
                        style={this.state.styles}
                    />
                ) : null}
                {this.state.openDialogue ? (
                    <Uploader
                        openDialogue={this.state.openDialogue}
                        handleClose={this.handleClose}
                        saveComment={this.saveComment}
                        videoLink={this.state.videolink}
                    />
                ) : null}
            </div>
        );
    }
}

export default Home;
