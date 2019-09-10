import Axios from "axios";
export const gethobby = () =>{
    var url = 'http://localhost:3000/login';
    return Axios({
        method: 'get',
        url,
    });
}
export const getUserDataById = (id) => {
    var url = `http://localhost:3000/login?id=${id}`;
    return Axios({
        url,
        method: 'get',
    });
}
export const getCheck = (fname) => {
    var url = `http://localhost:3000/login?q=${fname}`;
    return Axios({
        url,
        method: 'get',
    });
}