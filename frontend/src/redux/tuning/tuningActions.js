import createAction from "../createAction"
import api from "../../api/api"
import {SITE_SETTINGS_FETCH} from "../actionTypes"


export function siteSettingsFetchAction() {
    return async dispatch => {
        try {
            const response = await api.tuning.siteSettingsFetch()
            dispatch(createAction(SITE_SETTINGS_FETCH, response.data))
        } catch (error) {
            console.log('Site settings fetch error', error)
        }
    }
}