import React, { Component } from 'react';
import { MapDisplay } from '../MapDisplay/MapDisplay';
import axios from 'axios';
import Modal from 'react-responsive-modal';
import Button from '@material-ui/core/Button';
import { VideoDisplay } from '../VideoDisplay/VideoDisplay';
import { Uploader } from '../Uploader/Uploader';

const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center'
};
class Home extends Component {
    state = {
        payload: {},
        open: false,
        openDialogue: false,
        video: null
    };

    componentDidMount() {
        this.fetchItems('http://localhost:7000/api/video');
    }
    onOpenModal = videolink => {
        this.setState({ open: true, video: videolink });
    };

    onCloseModal = () => {
        this.setState({ open: false, video: null });
    };
    handleClose = () => {
        this.setState({ openDialogue: false });
    };
    handleClickOpen = () => {
        this.setState({ openDialogue: true });
    };
    fetchItems = apiLink => {
        axios.get(apiLink).then(result => {
            this.setState({
                payload: result.data
            });
        });
    };

    render() {
        const { open } = this.state;
        return (
            <div>
                <MapDisplay
                    data={this.state.payload}
                    onOpenModal={this.onOpenModal}
                />

                {this.state.video ? (
                    <div style={styles}>
                        <Modal open={open} onClose={this.onCloseModal} center>
                            <VideoDisplay video={this.state.video} />
                            <div className="row">
                                <center>
                                    <Button onClick={this.handleClickOpen}>
                                        <b>REACT TO THIS VIDEO</b>
                                    </Button>
                                    <Uploader
                                        openDialogue={this.state.openDialogue}
                                        handleClose={this.handleClose}
                                    />
                                </center>
                            </div>
                        </Modal>
                    </div>
                ) : (
                    ''
                )}
            </div>
        );
    }
}

export default Home;
