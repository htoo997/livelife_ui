import axios from 'axios';

const apiClient = () => {
    const { VUE_APP_API_URL } = process.env;
    const axiosInstance = axios.create({
        baseURL: VUE_APP_API_URL,
       // data: { 'api-key': 'a1ffa1c3-f0bf-4d6d-a04f-1f0f1e1291a7' },
        responseType : 'json',
    });
    return axiosInstance;
}

export default apiClient;