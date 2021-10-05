import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ze4zEvWEvMlQPzB2XZ5RjF0_wiOfe5SOy7kn5T8LVVw'
    }
})

