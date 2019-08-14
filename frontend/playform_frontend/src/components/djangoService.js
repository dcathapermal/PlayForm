const axios = require("axios");

const API_URL = "http://localhost:8000/PlayForm"

class DjangoService {


    constructor(){
        
        this.user_token = 0
        this.config = {
            headers: {
                'Authorization': `Token ${this.user_token}`
            }
        }
    }

    login(user, password){
        axios.post(`${API_URL}/api-token-auth/`, {username: user, password: password}).then((response) => {
            this.user_token = response.data.token
            this.config = {
                headers: {
                    'Authorization': `Token ${this.user_token}`
                }
            }
        })
    }

    has_authenticated(){
        return this.user_token !== 0;
    }
}

export default DjangoService;