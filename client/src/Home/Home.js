import React, { Component } from "react";
// import { Tweets } from "../Tweets/Tweets";
import { News } from "../News/News";
import { ModalDisplay } from "../Modal/Modal";
import { Gallery } from "../Gallery/Gallery";
import { Uploader } from "../Uploader/Uploader";
import {
    fetchItems,
    saveItems,
    getComments
} from "../services/functions.services";
class Home extends Component {
    state = {
        payload: fetchItems(),
        videolink: "",
        video: null,
        comments: null,
        open: false,
        openDialogue: false
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

    openModal = video => {
        console.log(video);
        this.setState({
            open: true,
            payload: video,
            comments: null,
            videolink: video.videoSnippet.path
        });

        console.log({ open: true, payload: this.state.payload });
    };

    openReactionModal = (reaction, id) => {
        console.log(reaction.reactionPath);
        getComments(id).then(comments => {
            console.log(comments.data);
            return this.setState({
                open: true,
                videolink: reaction.reactionPath,
                comments: comments.data
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
            console.log({ open: this.state.open, payload: this.state.payload });
        });
    };

    saveComment = event => {
        event.preventDefault();
        let form = new FormData();
        form.append("country", event.target.country.value);
        form.append("video", event.target.video.files[0]);

        saveItems(form).then(result => {
            console.log(result);
        });
    };

    changeSrc = (videolink, id) => {
        //get comments
        getComments(id).then(comments => {
            console.log(comments);
            return this.setState({
                videolink: videolink,
                comments: comments.data
            });
        });
    };

    handleClose = form => {
        this.setState({ openDialogue: false });
    };
    handleClickOpen = () => {
        this.setState({ openDialogue: true, open: false });
    };
    fetchItems = apiLink => {};
    render() {
        return (
            <div className="row">
                <div
                    className="col-xs-2 col-md-2 col-lg-2 col-sm-0 fixed"
                    style={{ paddingRight: "0px !important" }}
                >
                    {/* <Tweets /> */}
                    <hr />
                    <News />
                </div>

                <div className="col-xs-10 col-md-10 col-lg-10 col-sm-12 scrollit">
                    <Gallery
                        videos={this.state.payload}
                        openModal={this.openModal}
                        openReactionModal={this.openReactionModal}
                        closeModal={this.onCloseModal}
                    />
                </div>

                {this.state.open ? (
                    <ModalDisplay
                        open={this.state.open}
                        onClose={this.onCloseModal}
                        videos={this.state.payload}
                        comments={this.state.comments}
                        updateSrc={this.changeSrc}
                        video={this.state.videolink}
                    />
                ) : null}
                {this.state.openDialogue ? (
                    <Uploader
                        openDialogue={this.state.openDialogue}
                        handleClose={this.handleClose}
                        handleClickOpen={this.handleClickOpen}
                    />
                ) : null}
            </div>
        );
    }
}

export default Home;
