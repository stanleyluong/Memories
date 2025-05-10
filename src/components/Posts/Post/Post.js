import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
import moment from "moment";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../actions/posts";
import ImageModal from "./ImageModal";
import useStyles from "./styles";

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const [openImageModal, setOpenImageModal] = useState(false);

  const currentUserId = user?.result?.sub || user?.result?.googleId || user?.result?.id;

  // Construct S3 image URL
  let imageUrl = post.selectedFile; // Default to what's in selectedFile
  // Check if selectedFile is likely an S3 key (i.e., not a full URL or base64)
  if (post.selectedFile && !post.selectedFile.startsWith('http') && !post.selectedFile.startsWith('data:')) {
    const s3BaseUrl = process.env.REACT_APP_S3_BASE_URL || `https://DEFAULT_S3_BUCKET.s3.DEFAULT_REGION.amazonaws.com/`; // Fallback just in case
    console.log(`S3 Base URL: ${s3BaseUrl}`);
    // Safe join: ensure only one slash between base and key, but don't break https://
    imageUrl = s3BaseUrl.replace(/\/$/, '') + '/' + post.selectedFile.replace(/^\//, '');
    console.log(`Image URL: ${imageUrl}`);
  }

  const handleOpenImageModal = () => setOpenImageModal(true);
  const handleCloseImageModal = () => setOpenImageModal(false);

  const Likes = () => {
    if (post.likes?.length > 0) {
      const isLikedByCurrentUser = post.likes.find((like) => like === currentUserId);
      return isLikedByCurrentUser ? (
        <>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp;
          {post.likes.length > 2
            ? `You and ${post.likes.length - 1} others`
            : `${post.likes.length} like${post.likes.length > 1 ? "s" : ""}`}
        </>
      ) : (
        <>
          <ThumbUpAltOutlined fontSize="small" />
          &nbsp;{post.likes.length} {post.likes.length === 1 ? "Like" : "Likes"}
        </>
      );
    }
    return (
      <>
        <ThumbUpAltOutlined fontSize="small" />
        &nbsp;Like
      </>
    );
  };

  const isCreator = post?.creator === currentUserId;

  return (
    <Card className={classes.card}>
      <div className={classes.cardHeader}>
        <Avatar 
          className={classes.avatar}
          alt={post.name} 
        >
          {post.name?.charAt(0)?.toUpperCase()}
        </Avatar>
        <div className={classes.creatorInfo}>
          <Typography className={classes.creatorName} variant="body1">
            {post.name}
          </Typography>
          <Typography className={classes.timestamp} variant="caption">
            {console.log(`Post ID: ${post.id}, createdAt raw: ${post.createdAt}, typeof: ${typeof post.createdAt}`)}
            {moment.utc(post.createdAt).local().fromNow()}
            </Typography>
        </div>
        {isCreator && (
          <IconButton 
            style={{ marginLeft: 'auto', color: '#8e8e8e' }}
            size="small"
            onClick={(e) => {
              e.stopPropagation();
              setCurrentId(post.id);
            }}
          >
            <EditIcon fontSize="small" />
          </IconButton>
        )}
      </div>

      {post.selectedFile && (
        <CardMedia
          className={classes.media}
          image={imageUrl}
          title={post.title}
          onClick={handleOpenImageModal}
        />
      )}

      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          className={classes.actionButton}
          disabled={!user?.result}
          onClick={(e) => {
            e.stopPropagation();
            dispatch(likePost(post.id));
          }}
        >
          <Likes />
        </Button>
        {isCreator && (
          <IconButton
            size="small"
            className={classes.actionButton}
            style={{ color: '#262626' }}
            onClick={(e) => {
              e.stopPropagation();
              dispatch(deletePost(post.id));
            }}
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        )}
      </CardActions>

      <CardContent className={classes.cardContent}>
        <Typography className={classes.title} variant="h6" component="h2">
          {post.title}
        </Typography>
        <Typography className={classes.message} variant="body2" component="p">
          {post.message}
        </Typography>
         {post.tags && post.tags.length > 0 && (
          <div className={classes.details}>
            <Typography variant="body2" color="textSecondary" className={classes.tags}>
              {post.tags.map((tag) => `#${tag.trim()} `)}
            </Typography>
          </div>
        )}
      </CardContent>

      {post.selectedFile && (
          <ImageModal
            open={openImageModal}
            handleClose={handleCloseImageModal}
            imageUrl={imageUrl}
          />
      )}
    </Card>
  );
};

export default Post;
