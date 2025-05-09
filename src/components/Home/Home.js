import { Container, Dialog, DialogContent, DialogTitle, Fab, Grid, Grow } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../actions/posts";
import Form from "../Form/Form";
import Posts from "../Posts/Posts";
import SearchBar from "../SearchBar/SearchBar";
import useStyles from "./styles";

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const [openFormModal, setOpenFormModal] = useState(false);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  const handleOpenFormModal = () => {
    setOpenFormModal(true);
  };

  const handleCloseFormModal = () => {
    setOpenFormModal(false);
  };
  
  const handleEditPost = (id) => {
    setCurrentId(id);
    handleOpenFormModal();
  };

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const filteredPosts = posts?.length > 0 ? posts.filter(
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
  ) : [];

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Grow in>
      <Container className={classes.container} maxWidth="lg">
        <div className={classes.spacer}></div>
        <SearchBar onSearch={handleSearch} />
        <div className={classes.spacer}></div>
        <Grid
          container
          justifyContent="center"
          spacing={3}
          className={classes.mainContainer}
        >
          <Grid item xs={12} sm={10} md={8}>
            <Posts setCurrentId={handleEditPost} posts={filteredPosts} />
          </Grid>
        </Grid>

        <Dialog open={openFormModal} onClose={handleCloseFormModal} aria-labelledby="form-dialog-title" fullWidth maxWidth="sm">
          <DialogTitle id="form-dialog-title" style={{textAlign: 'center', fontWeight: 'bold'}}>
            {currentId ? 'Edit Your Memory' : 'Create a New Memory'}
          </DialogTitle>
          <DialogContent>
            <Form currentId={currentId} setCurrentId={setCurrentId} closeFormModal={handleCloseFormModal} />
          </DialogContent>
        </Dialog>

        <Fab 
          color="primary" 
          aria-label="add memory"
          className={classes.fab} 
          onClick={() => {
            setCurrentId(null);
            handleOpenFormModal();
          }}
        >
          <AddIcon />
        </Fab>
      </Container>
    </Grow>
  );
};

export default Home;
