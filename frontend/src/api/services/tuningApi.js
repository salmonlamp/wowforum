import axiosApi from './axiosApi'
import {SITE_SETTINGS_API_URL} from "../urls";

class TuningApi {

    static async siteSettingsFetch() {
        return await axiosApi.get(SITE_SETTINGS_API_URL)
    }

}

export default TuningApi