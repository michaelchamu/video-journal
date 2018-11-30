import React, { Component } from 'react';
import { Tweets } from '../Tweets/Tweets';
import { News } from '../News/News';
import { ModalDisplay } from '../Modal/Modal';
import { Gallery } from '../Gallery/Gallery';
import { fetchItems, saveItems } from '../services/functions.services';
class Home extends Component {
    state = {
        payload: fetchItems(),
        videolink: '',
        video: null,
        open: false
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
    reloadContainer = e => e.target.parentElement.reload();
    openModal = video => {
        console.log('modal open');
        this.setState({ open: true, payload: video });
        console.log({ open: true, payload: this.state.payload });
    };
    onCloseModal = () => {
        console.log('modal closed');
        fetchItems().then(result => {
            this.setState({
                payload: result,
                open: false
            });
            console.log({ open: this.state.open, payload: this.state.payload });
        });
    };

    saveComment = event => {
        event.preventDefault();
        let form = new FormData();
        form.append('country', event.target.longitude.value);
        form.append('video', event.target.video.files[0]);

        saveItems(form).then(result => {
            console.log(result);
        });
    };

    changeSrc = (videolink, key) => {
        console.log(key);
        return this.setState({ videolink: videolink });
        //     <Testimonials videolink={videolink} />
        // <video
        //     src={videolink}
        //     key={key}
        //     className="col-md-12 col-xs-12 col-lg-12 col-sm-12"
        //     height="100%"
        //     controls
        // >
        //     {/* <source src={videolink} type="video/mp4" id="video_source" /> */}
        // </video>
    };

    handleClose = form => {
        this.setState({ openDialogue: false });
    };
    handleClickOpen = () => {
        this.setState({ openDialogue: true });
    };
    fetchItems = apiLink => {};

    render() {
        return (
            <div className="row">
                <div
                    className="col-xs-2 col-md-2 col-lg-2 col-sm-0 fixed"
                    style={{ paddingRight: '0px !important' }}
                >
                    <Tweets />
                    <hr />
                    <News />
                </div>

                <div className="col-xs-10 col-md-10 col-lg-10 col-sm-12 scrollit">
                    <Gallery
                        videos={this.state.payload}
                        openModal={this.openModal}
                        closeModal={this.onCloseModal}
                    />
                </div>

                {this.state.open ? (
                    <ModalDisplay
                        open={this.state.open}
                        onClose={this.onCloseModal}
                        videos={this.state.payload}
                        updateSrc={this.changeSrc}
                    />
                ) : null}
            </div>
        );
    }
}

export default Home;
