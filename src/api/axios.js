import Axios from 'axios'

export const GetUserList = () => {
    var url = 'http://localhost:3000/login'

    return Axios({
        method: 'get',
        url
    })
}
