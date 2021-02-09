import {
    PROFILE_SAVE_FINISH,
    PROFILE_SAVE_START,
    USER_LOGIN_ERROR,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_ME_ANONYMOUS,
    USER_ME_SUCCESS,
    USER_SIGNUP_ERROR,
    USER_SIGNUP_SUCCESS
} from "../actionTypes";
import createAction from "../createAction";
import api from "../../api/api";
import jwtDecode from "jwt-decode";


/** SIGNUP **/
export const userSignUpSuccessAction = (userData) => createAction(USER_SIGNUP_SUCCESS, {userData})
export const userSignUpErrorAction = (error) => createAction(USER_SIGNUP_ERROR, {error})

export function userSignUpAction(email, username, password) {
    return async dispatch => {
        try {
            const response = await api.users.signUp(email, username, password)
            dispatch(userSignUpSuccessAction(response.data))
        } catch (error) {
            dispatch(userSignUpErrorAction(error))
        }
    }
}

/** END SIGNUP **/


/** LOGIN **/
export const userLoginSuccessAction = userData => createAction(USER_LOGIN_SUCCESS, {userData})
export const userLoginErrorAction = error => createAction(USER_LOGIN_ERROR, {error})

export function userLoginAction(username, password) {
    return async dispatch => {
        try {
            const response = await api.users.login(username, password)
            const decodedData = jwtDecode(response.data.access)
            dispatch(userLoginSuccessAction(decodedData))
        } catch (error) {
            dispatch(userLoginErrorAction(error))
        }
    }
}

/** END LOGIN **/


/** GET USER **/
export const userMeSuccessAction = userData => createAction(USER_ME_SUCCESS, {userData})
export const userMeAnonymousAction = () => createAction(USER_ME_ANONYMOUS)

export function userMeAction() {
    return async (dispatch, getState) => {
        const auth = getState().auth

        if (!auth.isLogged && api.users.isAuthenticated()) {
            try {
                const response = await api.users.me()
                dispatch(userMeSuccessAction(response.data))
            } catch (e) {
                dispatch(userMeAnonymousAction())
            }
        }
    }
}

/** END GET USER **/


/** LOGOUT **/
export function userLogoutAction() {
    api.users.logout()
    return createAction(USER_LOGOUT)
}

/** END LOGOUT **/

/** PROFILE **/
const profileSaveStartAction = userData => createAction(PROFILE_SAVE_START, userData)
const profileSaveFinishAction = () => createAction(PROFILE_SAVE_FINISH)
export function profileSaveAction(username, email, password, avatar) {
    return async dispatch => {
        dispatch(profileSaveStartAction())

        try {
            const response = await api.users.updateProfile(username, email, password, avatar)
            dispatch(profileSaveFinishAction(response.data))
        } catch (error) {
            console.log('Profile save error', error)
        }
    }
}
/** END PROFILE **/
