import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';
const styles = theme => ({
    button: {
        margin: theme.spacing.unit
    }
});
const Uploader = props => {
    const classes = styles;
    return (
        <div>
            <Dialog
                open={props.openDialogue}
                onClose={props.handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email
                        address here. We will send updates occasionally.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="comment"
                        label="Comment"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="longitude"
                        label="Longitude"
                        type="number"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="latitude"
                        label="Latitude"
                        type="number"
                        fullWidth
                    />
                    <input
                        accept="video/*"
                        id="icon-button-file"
                        type="file"
                        style={{ display: 'none' }}
                    />
                    <label htmlFor="icon-button-file">
                        <IconButton
                            color="primary"
                            className={classes.button}
                            component="span"
                        >
                            <PhotoCamera />
                        </IconButton>
                    </label>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={props.handleClose} color="primary">
                        Subscribe
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
export { Uploader };
