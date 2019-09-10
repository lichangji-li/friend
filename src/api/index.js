import Axios from 'axios'

export const getUserData = () => {
    var url = 'http://localhost:3000/login';
    return Axios({
        url,
        method: 'get',
    });
};
//根据传来的id获取相应的数据
export const getUserDataById = (id) => {
    var url = `http://localhost:3000/login?id=${id}`;
    return Axios({
        url,
        method: 'get',
    });
};

export const GetUserList = () => {
    var url = 'http://localhost:3000/login'

    return Axios({
        method: 'get',
        url
    })
};