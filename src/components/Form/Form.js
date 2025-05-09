import { Button, CircularProgress, Paper, TextField, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";
import useStyles from "./styles";

const Form = ({ currentId, setCurrentId, closeFormModal }) => {
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const post = useSelector((state) =>
    currentId && Array.isArray(state.posts) ? state.posts.find((p) => p.id === currentId) : null,
  );
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    if (post) setPostData(post);
    else if (!currentId) {
        setPostData({ title: "", message: "", tags: "", selectedFile: "" });
    }
  }, [post, currentId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!postData.title || !postData.message) {
        alert("Title and Message are required!"); 
        return;
    }
    setIsSubmitting(true);
    const payload = { ...postData, name: user?.result?.name };
    let success = false;

    try {
      if (currentId) {
        await dispatch(updatePost(currentId, payload));
      } else {
        await dispatch(createPost(payload));
      }
      success = true;
    } catch (error) {
      console.error("Form submission error caught in component:", error);
      alert(`Error: ${error.response?.data?.message || error.message || 'Could not save memory.'}`);
    } finally {
      setIsSubmitting(false);
      if (success) {
        clear();
        if (closeFormModal) closeFormModal();
      }
    }
  };

  if (!user?.result?.email) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Please sign in to like or create your own memories.
        </Typography>
      </Paper>
    );
  }

  const clear = () => {
    setCurrentId(null);
    setPostData({ title: "", message: "", tags: "", selectedFile: "" });
    if (closeFormModal && !currentId) closeFormModal();
    if (closeFormModal) closeFormModal();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPostData({ ...postData, selectedFile: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
        />
        <div className={classes.fileInputContainer}>
          <input
            accept="image/*"
            id="contained-button-file"
            type="file"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
          <label htmlFor="contained-button-file">
            <Button
              variant="outlined"
              color="primary"
              component="span"
              className={classes.fileInputButton}
            >
              Choose File
            </Button>
          </label>
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
          disabled={isSubmitting}
        >
          {isSubmitting ? <CircularProgress size={24} color="inherit" /> : 'Submit'}
        </Button>
        <Button
          variant="outlined"
          size="small"
          onClick={clear}
          fullWidth
          className={classes.buttonClear}
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
