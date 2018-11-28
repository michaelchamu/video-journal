import React, { Component } from 'react';
import { Tweets } from '../Tweets/Tweets';
import { News } from '../News/News';

import { fetchItems, saveItems } from '../services/functions.services';
class Home extends Component {
    state = {
        payload: fetchItems(),
        open: false,
        openDialogue: false,
        video: null
    };

    componentDidMount() {
        fetchItems().then(result => {
            this.setState({
                payload: result
            });
        });
    }
    onOpenModal = videolink => {
        this.setState({ open: true, video: videolink });
    };

    saveComment = event => {
        event.preventDefault();
        let form = new FormData();
        form.append('longitude', event.target.longitude.value);
        form.append('latitude', event.target.latitude.value);
        form.append('video', event.target.video.files[0]);

        saveItems(form).then(result => {
            console.log(result);
        });
    };

    onCloseModal = () => {
        this.setState({ open: false, video: null });
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
                    styles={{ paddingRight: '0px !important' }}
                >
                    <Tweets />
                    <hr />
                    <News />
                </div>

                <div className="col-xs-10 col-md-10 col-lg-10 col-sm-12 scrollit">
                    <div className="row" styles={{ margin: '0px !important;' }}>
                        <div
                            className="col-md-3 col-lg-3"
                            style={{
                                backgroundColor: 'orange',
                                paddingbottom: '20px',
                                paddingTop: '18px',
                                display: 'inline-block'
                            }}
                            id="videoSnippet"
                        />
                        <div className="row">
                            <div
                                className="container testimonial-group"
                                style={{ marginRight: '0px' }}
                            >
                                <div className="row text-center">
                                    <div className="col-xs-4" id="video1" />
                                    <div className="col-xs-4" id="video2" />
                                    <div className="col-xs-4" id="video3" />
                                    <div className="col-xs-4" id="video4" />
                                    <div className="col-xs-4" id="video5" />
                                    <div className="col-xs-4" id="video6" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
