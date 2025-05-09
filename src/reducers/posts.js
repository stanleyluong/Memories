import {
    CREATE,
    DELETE,
    FETCH_POSTS_FAILURE,
    FETCH_POSTS_START,
    FETCH_POSTS_SUCCESS,
    LIKE,
    LIKE_POST_FAILED,
    OPTIMISTIC_LIKE_POST,
    UPDATE,
} from "../constants/actionTypes";

const initialState = {
  items: [],
  isLoading: true, // Start with loading true until first fetch
  error: null,
  currentPage: 1, // Assuming you might want to keep pagination info here
  numberOfPages: 1
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_START:
      return { ...state, isLoading: true, error: null };
    case FETCH_POSTS_SUCCESS: // Also handles FETCH_ALL due to alias
      return {
        ...state,
        items: action.payload.data, // Assuming payload is { data: [...], currentPage: ..., numberOfPages: ... }
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
        isLoading: false,
        error: null,
      };
    case FETCH_POSTS_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case OPTIMISTIC_LIKE_POST: {
      const { postId, userId } = action.payload;
      console.log("OPTIMISTIC_LIKE_POST", { postId, userId });
      return {
        ...state,
        items: state.items.map((post) => {
          if (post.id === postId) {
            const alreadyLiked = post.likes.includes(userId);
            if (alreadyLiked) {
              console.log(`Optimistically unliking post ${postId} for user ${userId}`);
              return { ...post, likes: post.likes.filter((id) => id !== userId) };
            } else {
              console.log(`Optimistically liking post ${postId} for user ${userId}`);
              return { ...post, likes: [...post.likes, userId] };
            }
          }
          return post;
        }),
      };
    }
    case LIKE:
      console.log("LIKE (SUCCESS_CONFIRMED_BY_SERVER)", action.payload);
      return {
        ...state,
        items: state.items.map((post) =>
          post.id === action.payload.id ? action.payload : post,
        ),
      };
    case LIKE_POST_FAILED: {
      const { postId, userId, originalPost } = action.payload;
      console.log("LIKE_POST_FAILED, attempting to revert for post:", postId, "original state:", originalPost);
      if (originalPost) {
          return {
              ...state,
              items: state.items.map(post => post.id === postId ? originalPost : post)
          };
      }
      console.warn("LIKE_POST_FAILED: originalPost not available for precise revert, attempting toggle.")
      return {
        ...state,
        items: state.items.map((post) => {
          if (post.id === postId) {
            const currentlyLikedAfterOptimistic = post.likes.includes(userId);
            if (currentlyLikedAfterOptimistic) {
              return { ...post, likes: post.likes.filter((id) => id !== userId) };
            } else {
              return { ...post, likes: [...post.likes, userId] };
            }
          }
          return post;
        }),
      };
    }
    case CREATE:
      console.log("create", action);
      return {
        ...state,
        items: [action.payload, ...state.items], // Prepend new post
        // Optionally, if CREATE returns the full new post list or pagination info, update that too
      };
    case UPDATE:
      console.log("update", action);
      return {
        ...state,
        items: state.items.map((post) =>
          post.id === action.payload.id ? action.payload : post,
        ),
      };
    case DELETE:
      console.log("delete", action);
      return {
        ...state,
        items: state.items.filter((post) => post.id !== action.payload),
        // Optionally, re-fetch or adjust pagination if a post is deleted
      };
    default:
      return state;
  }
};

export default postsReducer;
