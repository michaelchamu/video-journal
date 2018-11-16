import React, { Component } from 'react';
import { MapDisplay } from '../MapDisplay/MapDisplay';
import axios from 'axios';
import Modal from 'react-responsive-modal';
import { VideoDisplay } from '../VideoDisplay/VideoDisplay';
const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center'
};
class Home extends Component {
    state = {
        payload: {},
        open: false,
        video: null
    };

    componentDidMount() {
        this.fetchItems('http://localhost:7000/api/video');
    }
    onOpenModal = videolink => {
        console.log(videolink);
        this.setState({ open: true, video: videolink });
    };

    onCloseModal = () => {
        this.setState({ open: false, video: null });
    };
    fetchItems = apiLink => {
        axios.get(apiLink).then(result => {
            console.log(result.data);
            this.setState({
                payload: result.data
            });
            console.log(this.state.payload);
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
                            <center>
                                <h4>Reactions</h4>
                            </center>
                            ------------------------------------
                            <div className="row">Upload area</div>
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
