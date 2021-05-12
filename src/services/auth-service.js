import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3002/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});

export const signIn = (email, password) => instance.post('http://localhost:3002/login', { email, password });
export const signOut = () => {
  console.log('signout');
};
