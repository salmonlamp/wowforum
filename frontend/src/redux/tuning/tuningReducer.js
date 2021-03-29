import {SITE_SETTINGS_FETCH} from "../actionTypes";

const initialState = {
    siteSettings: {}
}

export default function tuningReducer(state = initialState, action) {
    switch (action.type) {

        case SITE_SETTINGS_FETCH:
            return {...state, siteSettings: action.payload}

        default:
            return state

    }
}