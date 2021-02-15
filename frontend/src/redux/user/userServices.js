import {dispatch, store} from '../store'
import {userLogoutAction, userMeAction} from "./userActions";

export default {
    logout: () => dispatch(userLogoutAction()),
    me: () => dispatch(userMeAction()),
}