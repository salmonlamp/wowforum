import {
    CHAT_CONNECTED_ACTIVATE,
    CHAT_CONNECTED_DEACTIVATE,
    CHAT_MSG_LIST_LOADING_FINISH,
    CHAT_MSG_LIST_LOADING_START, CHAT_MSG_NEW
} from "../actionTypes";

const initialState = {
    list: [],
    connected: false,
    isLoading: false,
}

function listLoadingFinish(state, new_list) {
    const list = state.list.concat(new_list)
    return {...state, list, isLoading: false}
}

function msgNew(state, msg) {
    const list = [...state.list]
    list.push(msg)
    return {...state, list}
}


export default function chatReducer(state = initialState, action) {
    switch (action.type) {

        case CHAT_MSG_LIST_LOADING_START:
            return {...state, isLoading: true}

        case CHAT_MSG_LIST_LOADING_FINISH:
            return listLoadingFinish(state, action.payload)

        case CHAT_CONNECTED_ACTIVATE:
            return {...state, connected: true}

        case CHAT_CONNECTED_DEACTIVATE:
            return {...state, connected: false}

        case CHAT_MSG_NEW:
            return msgNew(state, action.payload)

        default:
            return state

    }
}