import axios from 'axios';

const baseUrl = `${process.env.REACT_APP_URL}`

 const axiosInstance = axios.create({
    baseUrl : baseUrl,
    headers : {
        Authorization : {
            username: 'ccm_auth',
            password: 'ccm_digi123#'
            }
        },
       
    }
)
export default axiosInstance;