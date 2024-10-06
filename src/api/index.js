import axios from 'axios';

// Dynamically set the baseURL based on environment
const API = axios.create({
    // eslint-disable-next-line no-undef
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5001'
});

// Interceptor to automatically attach the token to every request
API.interceptors.request.use((req) => {
    const profile = localStorage.getItem('profile');
    if (profile) {
        req.headers.Authorization = `Bearer ${JSON.parse(profile).token}`;
    }
    return req;
});

// API requests
export const fetchPosts = () => API.get('/posts'); 
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);  // Fixed the quote and parentheses here

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);