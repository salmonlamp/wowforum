import createAction from "../createAction"
import {
    CHAT_CONNECTED_ACTIVATE, CHAT_CONNECTED_DEACTIVATE,
    CHAT_MSG_LIST_LOADING_FINISH,
    CHAT_MSG_LIST_LOADING_START, CHAT_MSG_NEW,
} from "../actionTypes"
import api from "../../api/api"


/** CHAT MSG LIST LOADING **/
const chatMsgListLoadingStartAction = () => createAction(CHAT_MSG_LIST_LOADING_START)
const chatMsgListLoadingFinishAction = msgList => createAction(CHAT_MSG_LIST_LOADING_FINISH, msgList)
export function chatMsgListLoadingAction() {
    return async dispatch => {
        dispatch(chatMsgListLoadingStartAction())
        try {
            const response = await api.chat.msgList()
            dispatch(chatMsgListLoadingFinishAction(response.data))
        } catch (error) {
            console.log('Chat msg list loading error', error)
        }
    }
}
/** END CHAT MSG LIST LOADING **/

/** CHAT CONNECTED **/
export const chatConnectedActivateAction = () => createAction(CHAT_CONNECTED_ACTIVATE)
export const chatConnectedDeactivateAction = () => createAction(CHAT_CONNECTED_DEACTIVATE)
/** END CHAT CONNECTED **/

/** CHAT NEW MSG **/
export const chatMsgNewAction = msg => createAction(CHAT_MSG_NEW, msg)
/** END CHAT NEW MSG **/