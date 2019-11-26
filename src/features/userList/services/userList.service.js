import axios from 'axios';


class UserListService {

    url = `https://jsonplaceholder.typicode.com/users`;
    http = axios;

    fetchUserList() {
        return this.http.get(`${this.url}`);
    }


}

const userListService = new UserListService();

export default userListService;

