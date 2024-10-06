import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
} from "../constants/actionTypes";

const posts = (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case LIKE:
      console.log("like", action);
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post,
      );
    case CREATE:
      console.log("create", action);
      return [...posts, action.payload];
    case UPDATE:
      console.log("update", action);
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post,
      );
    case DELETE:
      console.log("delete", action);
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};

export default posts;
