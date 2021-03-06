import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import IconButton from "@material-ui/core/IconButton";
const styles = theme => ({
    button: {
        margin: theme.spacing.unit
    }
});

const Uploader = props => {
    const classes = styles;
    const reactionPath = props.videoLink.substring(
        0,
        props.videoLink.lastIndexOf("/")
    );
    return (
        <div>
            <Dialog
                open={true}
                onClose={props.handleClose}
                aria-labelledby="form-dialog-title"
            >
                <form
                    id="content-form"
                    encType="multipart/form-data"
                    onSubmit={event => props.saveComment(event, reactionPath)}
                >
                    <DialogTitle id="form-dialog-title">Comment</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To submit a reaction to this video to this website,
                            please enter the details here.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            name="comment"
                            label="Comment"
                            type="text"
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            name="country"
                            label="Country"
                            type="text"
                            fullWidth
                            required
                        />
                        <input
                            accept="video/*"
                            id="icon-button-file"
                            type="file"
                            name="video"
                            style={{ display: "none" }}
                            required
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
                        <Button
                            type="submit"
                            form="content-form"
                            color="primary"
                        >
                            Submit
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
};
export { Uploader };
