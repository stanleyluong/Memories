import React from 'react';
import { Modal, Backdrop, Fade, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,  // Removed padding to reduce white space
        maxWidth: '90%',
        maxHeight: '90%',
        overflow: 'hidden',  // Ensures no content overflows the modal
    },
    image: {
        maxWidth: '100%',
        maxHeight: '100%',
        width: 'auto',
        height: 'auto',
        objectFit: 'contain',  // Keeps the image aspect ratio intact
        display: 'block',      // Ensure image is block-level to remove any extra spacing
    },
    closeButton: {
        position: 'absolute',
        top: theme.spacing(1),
        right: theme.spacing(1),
        color: theme.palette.grey[500],
    },
}));

const ImageModal = ({ open, handleClose, imageUrl }) => {
    const classes = useStyles();

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <div className={classes.paper}>
                    {/* Close Button */}
                    <IconButton
                        className={classes.closeButton}
                        onClick={handleClose}
                    >
                        <CloseIcon />
                    </IconButton>

                    {/* Image */}
                    <img src={imageUrl} alt="Post" className={classes.image} />
                </div>
            </Fade>
        </Modal>
    );
};

export default ImageModal;
