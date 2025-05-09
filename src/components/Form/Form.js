import { Button, CircularProgress, Paper, TextField, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";
import * as API from "../../api";
import useStyles from "./styles";

const Form = ({ currentId, setCurrentId, closeFormModal }) => {
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const [selectedFileObject, setSelectedFileObject] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileUploadError, setFileUploadError] = useState(null);

  const post = useSelector((state) =>
    currentId && Array.isArray(state.posts.posts) ? state.posts.posts.find((p) => p.id === currentId) : null,
  );
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    if (post) {
      setPostData(post);
      setSelectedFileObject(null);
      setFileUploadError(null);
      if (imagePreviewUrl) {
        URL.revokeObjectURL(imagePreviewUrl);
      }
      setImagePreviewUrl(null);
    } else if (!currentId) {
      setPostData({ title: "", message: "", tags: "", selectedFile: "" });
      setSelectedFileObject(null);
      setFileUploadError(null);
      if (imagePreviewUrl) {
        URL.revokeObjectURL(imagePreviewUrl);
      }
      setImagePreviewUrl(null);
    }
  }, [post, currentId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!postData.title || !postData.message) {
      alert("Title and Message are required!");
      return;
    }
    setIsSubmitting(true);
    setFileUploadError(null);

    let finalSelectedFile = postData.selectedFile;

    if (selectedFileObject) {
      try {
        const { data: { uploadURL, key } } = await API.getSignedUploadUrl(selectedFileObject.name, selectedFileObject.type);
        
        await fetch(uploadURL, {
          method: 'PUT',
          headers: {
            'Content-Type': selectedFileObject.type,
          },
          body: selectedFileObject,
        });
        
        finalSelectedFile = key;
      } catch (error) {
        console.error("S3 Upload Error:", error);
        setFileUploadError(`S3 Upload Failed: ${error.message || 'Could not get upload URL or upload file.'}`);
        setIsSubmitting(false);
        return;
      }
    }

    const payload = { ...postData, selectedFile: finalSelectedFile, name: user?.result?.name };
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
    setSelectedFileObject(null);
    setFileUploadError(null);
    if (imagePreviewUrl) {
      URL.revokeObjectURL(imagePreviewUrl);
      setImagePreviewUrl(null);
    }
    if (closeFormModal) closeFormModal();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (imagePreviewUrl) {
        URL.revokeObjectURL(imagePreviewUrl);
      }
      setSelectedFileObject(file);
      setImagePreviewUrl(URL.createObjectURL(file));
      setPostData({ ...postData, selectedFile: "" });
      setFileUploadError(null);
    } else {
      if (imagePreviewUrl) {
        URL.revokeObjectURL(imagePreviewUrl);
      }
      setSelectedFileObject(null);
      setImagePreviewUrl(null);
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
        <div className={classes.fileInputContainer} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
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
            {selectedFileObject && (
              <Typography variant="body2" style={{ marginLeft: '8px', flexShrink: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {selectedFileObject.name}
              </Typography>
            )}
          </div>
          {imagePreviewUrl && (
            <div style={{ marginTop: '0px', alignSelf: 'flex-start' }}>
              <img
                src={imagePreviewUrl}
                alt="Preview"
                style={{
                  maxWidth: '100%',
                  maxHeight: '150px',
                  display: 'block',
                  border: '1px solid #ddd',
                  borderRadius: '4px'
                }}
              />
            </div>
          )}
          {fileUploadError && (
            <Typography variant="caption" color="error" display="block" style={{ marginTop: '0px' }}>
              {fileUploadError}
            </Typography>
          )}
          {!selectedFileObject && !imagePreviewUrl && postData.selectedFile && typeof postData.selectedFile === 'string' && postData.selectedFile.includes('uploads/') && (
            <div style={{ marginTop: '0px', alignSelf: 'flex-start' }}>
              <Typography variant="caption">Current image:</Typography>
              <img
                src={`${process.env.REACT_APP_S3_BASE_URL}${postData.selectedFile}`.replace(/\/\//g, '/')}
                alt="Current memory"
                style={{
                  maxWidth: '100%',
                  maxHeight: '100px',
                  display: 'block',
                  border: '1px solid #ddd',
                  borderRadius: '4px'
                }}
              />
            </div>
          )}
        </div>
        <div className={classes.buttonsContainer}>
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            disabled={isSubmitting}
            style={{ flex: 1 }}
          >
            {isSubmitting ? <CircularProgress size={24} color="inherit" /> : 'Submit'}
          </Button>
          <Button
            variant="outlined"
            size="small"
            onClick={clear}
            className={classes.buttonClear}
          >
            Clear
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default Form;
