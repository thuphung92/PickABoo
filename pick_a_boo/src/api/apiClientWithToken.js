import { create } from 'apisauce';

const endpointAllPosts='/api/all_posts';
const endpointPosts = 'api/posts';
const endpointMyPosts = 'api/posts/my_posts';

const apiClientWithToken = (token) => create({
    baseURL: "http://127.0.0.1:5000",
    headers:{
        Authorization: `Bearer ${token}`,
        'Content-Type':'application/json'
    }
})


