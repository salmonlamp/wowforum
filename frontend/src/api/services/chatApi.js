import {CHAT_MSG_LIST_API_URL, WEBSOCKET_URL} from "../urls";
import axiosAPI from "./axiosApi";

class ChatAPI {

    static getWebsocket() {
        const accessToken = localStorage.getItem("access_token")
        return new WebSocket(WEBSOCKET_URL + "?token=" + accessToken)
    }

    static async msgList() {
        return await axiosAPI.get(CHAT_MSG_LIST_API_URL)
    }

}

export default ChatAPI