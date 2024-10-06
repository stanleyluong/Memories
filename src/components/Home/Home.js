import React, { useState, useEffect } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import SearchBar from "../SearchBar/SearchBar";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./styles";
import { getPosts } from "../../actions/posts";

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  const filteredPosts = posts.filter(
    (post) =>
      (post.name &&
        post.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (post.message &&
        post.message.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (post.tags &&
        post.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase()),
        )) ||
      (post.title &&
        post.title.toLowerCase().includes(searchQuery.toLowerCase())),
  );

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Grow in>
      <Container className={classes.container}>
        <div className={classes.spacer}></div>
        <SearchBar onSearch={handleSearch} />
        <div className={classes.spacer}></div>
        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} posts={filteredPosts} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
