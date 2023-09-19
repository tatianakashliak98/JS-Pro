import axios from "axios";
const instance = axios.create({
   baseURL: 'https://studapi.teachmeskills.by',
});
// по кажд
instance.interceptors.request.use(
   (config) => {
     const accessToken = localStorage.getItem('access');
     
     if (accessToken) {
       config.headers.Authorization = `Bearer ${accessToken}`;
     }
 
     return config;
   },
   (error) => Promise.reject(error)
);
 
 export default instance