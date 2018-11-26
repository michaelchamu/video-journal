import React, { Component } from 'react';
import { MapDisplay } from '../MapDisplay/MapDisplay';
import Modal from 'react-responsive-modal';
import Button from '@material-ui/core/Button';
import { fetchItems, saveItems } from '../services/functions.services';
import { VideoDisplay } from '../VideoDisplay/VideoDisplay';
import { Uploader } from '../Uploader/Uploader';

const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center'
};
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
        const { open } = this.state;
        return (
            <div>
                {this.state.payload ? (
                    <MapDisplay
                        data={this.state.payload}
                        onOpenModal={this.onOpenModal}
                    />
                ) : (
                    ''
                )}

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
                                        saveComment={this.saveComment}
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
