import axios from 'axios';

export const getUserApi = (keyword) => {
    return axios({
        method: 'get',
        url: `https://api.github.com/users?q=${keyword}`,
    });
};
