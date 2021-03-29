import axiosApi from './axiosApi'
import {PAGE_API_URl, PAGE_LIST_API_URl} from "../urls";

class PagesApi {

    static async listFetch() {
        return await axiosApi.get(PAGE_LIST_API_URl)
    }

    static async singleFetch(slug) {
        return await axiosApi.get(PAGE_API_URl(slug))
    }

}

export default PagesApi