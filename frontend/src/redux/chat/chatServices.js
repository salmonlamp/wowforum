import {dispatch} from '../store'
import api from "../../api/api";
import {
    chatConnectedActivateAction,
    chatConnectedDeactivateAction,
    chatMsgListLoadingAction,
    chatMsgNewAction
} from "./chatActions";


export default {

    getWebsocket: () => api.chat.getWebsocket(),
    msgListLoading: () => dispatch(chatMsgListLoadingAction()),
    connectedActivate: () => dispatch(chatConnectedActivateAction()),
    connectedDeactivate: () => dispatch(chatConnectedDeactivateAction()),
    msgNew: msg => dispatch(chatMsgNewAction(msg)),

}