import { CircularProgress, Grid } from "@material-ui/core";
import React from "react";
import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = ({ setCurrentId, posts }) => {
  const classes = useStyles();
  return !posts?.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post.id} item xs={12} sm={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
