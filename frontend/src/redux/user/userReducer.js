import {
    USER_LOGIN_ERROR,
    USER_LOGIN_SUCCESS,
    USER_SIGNUP_ERROR,
    USER_SIGNUP_SUCCESS,
    USER_ME_SUCCESS,
    USER_ME_ANONYMOUS, USER_LOGOUT, PROFILE_SAVE_START, PROFILE_SAVE_FINISH,
} from "../actionTypes";

const initialState = {
    profileWasSave: false,
    isLogged: false,
    user: null,
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {

        case USER_SIGNUP_SUCCESS:
            return {...state, user: action.payload.userData, isLogged: true}

        case USER_SIGNUP_ERROR:
            return {...state, error: action.payload.error}

        case USER_LOGIN_SUCCESS:
            return {...state, user: action.payload.userData, isLogged: true}

        case USER_LOGIN_ERROR:
            return {...state, error: action.payload.error}

        case USER_ME_SUCCESS:
            return {...state, isLogged: true, user: action.payload.userData}

        case USER_ME_ANONYMOUS:
            return {...state, isLogged: false, user: null}

        case USER_LOGOUT:
            return {...state, isLogged: false, user: null}

        case PROFILE_SAVE_START:
            return {...state}

        case PROFILE_SAVE_FINISH:
            return {...state, user: action.payload}

        default:
            return state

    }
}