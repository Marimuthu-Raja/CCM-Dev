import axios from 'axios';

const baseUrl = process.env.API_URL


export const axiosInstance = axios.create({
    baseUrl : baseUrl,
    headers : {
        Authorization : {
            username: 'ccm_auth',
            password: 'ccm_digi123#'
            }
        },
        params:{access_token:localStorage.getItem('access_token')}
    }
)