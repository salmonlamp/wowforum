import {PAGE_FETCH_FINISH, PAGE_LIST_FETCH_FINISH} from "../actionTypes";

const initialState = {
    list: [],
    active: null,
}

export default function pagesReducer(state = initialState, action) {
    switch (action.type) {

        case PAGE_LIST_FETCH_FINISH:
            return {...state, list: action.payload}

        case PAGE_FETCH_FINISH:
            return {...state, active: action.payload}

        default:
            return state

    }
}