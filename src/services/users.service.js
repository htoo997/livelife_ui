import apiClient from './../apiClient.js';

class usersService {

    getUsersAll = () => apiClient().get('GetAllEkycUsers', {
        params: {
        }
    })

}
export default new usersService();