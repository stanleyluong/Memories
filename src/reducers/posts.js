import {
    CREATE,
    DELETE,
    FETCH_ALL,
    LIKE,
    LIKE_POST_FAILED,
    OPTIMISTIC_LIKE_POST,
    UPDATE,
} from "../constants/actionTypes";

const postsReducer = (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case OPTIMISTIC_LIKE_POST: {
      const { postId, userId } = action.payload;
      console.log("OPTIMISTIC_LIKE_POST", { postId, userId });
      return posts.map((post) => {
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
      });
    }
    case LIKE:
      console.log("LIKE (SUCCESS_CONFIRMED_BY_SERVER)", action.payload);
      return posts.map((post) =>
        post.id === action.payload.id ? action.payload : post,
      );
    case LIKE_POST_FAILED: {
      const { postId, userId, originalPost } = action.payload;
      console.log("LIKE_POST_FAILED, attempting to revert for post:", postId, "original state:", originalPost);
      if (originalPost) {
          return posts.map(post => post.id === postId ? originalPost : post);
      }
      console.warn("LIKE_POST_FAILED: originalPost not available for precise revert, attempting toggle.")
      return posts.map((post) => {
        if (post.id === postId) {
          const currentlyLikedAfterOptimistic = post.likes.includes(userId);
          if (currentlyLikedAfterOptimistic) {
            return { ...post, likes: post.likes.filter((id) => id !== userId) };
          } else {
            return { ...post, likes: [...post.likes, userId] };
          }
        }
        return post;
      });
    }
    case CREATE:
      console.log("create", action);
      return [...posts, action.payload];
    case UPDATE:
      console.log("update", action);
      return posts.map((post) =>
        post.id === action.payload.id ? action.payload : post,
      );
    case DELETE:
      console.log("delete", action);
      return posts.filter((post) => post.id !== action.payload);
    default:
      return posts;
  }
};

export default postsReducer;
