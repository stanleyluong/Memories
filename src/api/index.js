import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5001";

const API = axios.create({ baseURL: API_URL });

// Helper function to set or clear the Authorization header
export const setAxiosAuthHeader = (token) => {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common["Authorization"];
  }
};

// This interceptor was good, but we will now set the header more proactively
// API.interceptors.request.use((req) => {
//   const profile = JSON.parse(localStorage.getItem("profile"));
//   if (profile?.token) {
//     try {
//       const decodedToken = jwtDecode(profile.token);
//       if (decodedToken.exp * 1000 > new Date().getTime()) { // Check if token is not expired
//         req.headers.Authorization = `Bearer ${profile.token}`;
//       } else {
//         // Token expired, handle logout or refresh token logic if implemented
//         console.warn("Interceptor: Token expired. Auth header not set.");
//         // Potentially dispatch logout action here if possible
//       }
//     } catch (error) {
//       console.error("Interceptor: Error decoding token", error);
//     }
//   }
//   return req;
// });

export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const fetchPost = (id) => API.get(`/posts/${id}`);
export const createPost = (newPost) => API.post("/posts", newPost);
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

export const getSignedUploadUrl = (filename, filetype) => 
  API.get(`/posts/signed-url/upload?filename=${encodeURIComponent(filename)}&filetype=${encodeURIComponent(filetype)}`);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
