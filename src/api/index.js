import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:9000" });

// // Sign In
// export const signIn = (formData) => API.post('/user/signin', formData)
// // Sign Up
// export const signUp = (formData) => API.post('/user/signup', formData)
// Initial get request for todos
export const getItems = () => API.get(`/items`);
export const getCartItems = (userId) => API.get(`/getCart/${userId}`);
export const addToCart = (item, userId) =>
  API.post(`/addToCart/${userId}`, item);
export const removeCartItem = (id) => API.delete(`/removeCart/${id}`);
// Add todo
// export const addTodo = (todo) => API.post('/todos', todo)
// // Update todo
// export const updateTodo = (updatedTodo) => API.patch(`/todos`, updatedTodo)
