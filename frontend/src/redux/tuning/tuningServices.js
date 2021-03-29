import {dispatch} from '../store'
import {siteSettingsFetchAction} from "./tuningActions";

export default {
    loadSiteSettings: () => dispatch(siteSettingsFetchAction())
}