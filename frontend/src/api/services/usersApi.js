import {TOKEN_OBTAIN_API_URL, TOKEN_REFRESH_API_URL, USER_ME_API_URL, USER_SIGNUP_API_URL} from "../urls";
import axiosAPI, {setNewHeaders} from "./axiosApi";

class UsersAPI {

    static async signUp(email, username, password) {
        const response = await axiosAPI.post(USER_SIGNUP_API_URL, {
            email,
            username,
            password,
        })
        setNewHeaders(response.data.tokens)
        return response
    }

    static async login(username, password) {
        const response = await axiosAPI.post(TOKEN_OBTAIN_API_URL, {
            username,
            password,
        })
        setNewHeaders(response.data)
        return response
    }

    static async tokenRefresh(refresh) {
        const response = await axiosAPI.post(TOKEN_REFRESH_API_URL, {
            refresh,
        })
        return response
    }

    static async me() {
        return await axiosAPI.get(USER_ME_API_URL)
    }

    static async logout() {
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
        // TODO: invalidate token on backend
    }

    // eslint-disable-next-line
    static isAuthenticated() {
        const token = localStorage.getItem("access_token")
        return !!token
    }

    static async updateProfile(username, password, email, avatar) {
        const response = axiosAPI.post(USER_ME_API_URL, {
            username, password, email
        })
        return response
    }
}

export default UsersAPI