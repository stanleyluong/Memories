import { CircularProgress, Typography } from "@material-ui/core";
import React from "react";
import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = ({ setCurrentId, posts, isLoading }) => {
  const classes = useStyles();

  if (isLoading) {
    return <CircularProgress />;
  }

  if (!posts || posts.length === 0) {
    return (
      <Typography variant="h6" align="center" style={{ marginTop: '20px' }}>
        No memories yet. Be the first to create one!
      </Typography>
    );
  }

  return (
    <div className={classes.postsContainer}>
      {posts.map((post) => (
        <div key={post.id} className={classes.postWrapper}>
          <Post post={post} setCurrentId={setCurrentId} />
        </div>
      ))}
    </div>
  );
};

export default Posts;
