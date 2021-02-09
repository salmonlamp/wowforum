import {dispatch, store} from '../store'
import {userLogoutAction} from "./userActions";

export default {
    logout: () => dispatch(userLogoutAction()),
}