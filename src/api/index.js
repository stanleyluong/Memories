import axios from 'axios'
const API = axios.create({ baseURL: 'https://stanley-memories.herokuapp.com'})
// const API = axios.create({ baseURL: 'http://localhost:5000'})
// const url = 'https://stanley-memories.herokuapp.com/posts';
// const url = "http://localhost:5000/posts"
API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req
})
export const fetchPost = (id) => {
    console.log('fetch post', id)
    return API.get(`/posts/${id}`)
}
export const fetchPosts = (page) => {
    console.log('fetch posts', page)
    return API.get(`/posts?page=${page}`)
}
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`)
export const createPost = (newPost) => API.post('/posts', newPost)
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost)
export const deletePost = (id) => API.delete(`/posts/${id}`)
export const likePost = (id) => API.patch(`/posts/${id}/likePost`)

export const signIn = (formData) => API.post('/user/signin', formData)
export const signUp= (formData) => API.post('/user/signup', formData)