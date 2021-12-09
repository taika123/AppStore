import axios from "axios";
import { DOMAIN, TOKEN, TOKEN_CYBERSOFT } from "../util/settings/config";

export class baseService {
    //put json ve phia backend
    put = (url, model) => {
        return axios({
            url: `${DOMAIN}/${url}`,
            method: "PUT",
            data: model,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem(TOKEN),
                TokenCybersoft: TOKEN_CYBERSOFT
            }

        })
    }
    post = (url, model) => {
        return axios({
            url: `${DOMAIN}/${url}`,
            method: "POST",
            data: model,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem(TOKEN),
                TokenCybersoft: TOKEN_CYBERSOFT
            }
        })
    }
    get = (url) => {
        return axios({
            url: `${DOMAIN}/${url}`,
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem(TOKEN),
                TokenCybersoft: TOKEN_CYBERSOFT
            }
        })
    }
    delete = (url) => {
        return axios({
            url: `${DOMAIN}/${url}`,
            method: "DELETE",
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem(TOKEN),
                TokenCybersoft: TOKEN_CYBERSOFT
            }
        })
    }
}