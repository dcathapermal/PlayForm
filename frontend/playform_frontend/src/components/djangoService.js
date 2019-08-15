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
        return axios.post(`${API_URL}/login`, {username: user, password: password}).then((response) => {
            this.user_token = response.data.token
            this.config = {
                headers: {
                    'Authorization': `Token ${this.user_token}`
                }
            }
        })
    }

    logout() {
        this.user_token = 0;
        this.config = {
            headers: {
                'Authorization': `Token ${this.user_token}`
            }
        }
    }

    create_user(user, email, password1, password2) {
        return(axios.post(`${API_URL}/rest-auth/registration/`, {username: user, email: email, password1: password1, password2: password2}))
    
    }

    song_search(query){
        return(axios.get(`${API_URL}/songsearch?query=${query}`));
    }

    addToPlaylist(song) {
        return(axios.post(`${API_URL}/playlist`, {
            name: song.name,
            code: song.code,
            user_token: this.user_token
        }));
    }
}

export default DjangoService;