import * as api from "../api/index";
import {
    CREATE,
    DELETE,
    FETCH_ALL,
    LIKE,
    LIKE_POST_FAILED,
    OPTIMISTIC_LIKE_POST,
    UPDATE,
} from "../constants/actionTypes";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: FETCH_ALL, payload: data.data });
  } catch (error) {
    console.log(error);
    // Not rethrowing here as getPosts failures are often handled by showing empty state or loader
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE, payload: data });
    // return data; // Optional: return data if components need it directly
  } catch (error) {
    console.error("Error in createPost action:", error.response ? error.response.data : error.message);
    throw error; // Rethrow for the component to catch
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: UPDATE, payload: data });
    // return data; // Optional: return data
  } catch (error) {
    console.error("Error in updatePost action:", error.response ? error.response.data : error.message);
    throw error; // Rethrow for the component to catch
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch, getState) => {
  const profile = JSON.parse(localStorage.getItem("profile"));
  const userId = profile?.result?.sub || profile?.result?.googleId || profile?.result?.id;

  if (!userId) {
    console.error("LIKE_POST_ACTION: User ID not found for optimistic like.");
    return; 
  }

  const currentPosts = getState().posts;
  const postToLike = currentPosts.find(p => p.id === id);

  if (!postToLike) {
      console.error(`LIKE_POST_ACTION: Post with id ${id} not found in state for optimistic like.`);
      try {
        const { data } = await api.likePost(id);
        dispatch({ type: LIKE, payload: data });
        return;
      } catch (error) {
        console.log("LIKE_POST_ACTION: Direct API likePost failed after post not found in state", error);
        return;
      }
  }

  dispatch({ type: OPTIMISTIC_LIKE_POST, payload: { postId: id, userId } });

  try {
    const { data } = await api.likePost(id);
    dispatch({ type: LIKE, payload: data }); 
  } catch (error) {
    console.log("LIKE_POST_ACTION: API call failed, attempting to revert.", error);
    dispatch({ type: LIKE_POST_FAILED, payload: { postId: id, userId, originalPost: postToLike } });
  }
};
