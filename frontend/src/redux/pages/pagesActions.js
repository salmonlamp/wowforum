import createAction from "../createAction"
import api from "../../api/api"
import {PAGE_FETCH_FINISH, PAGE_LIST_FETCH_FINISH} from "../actionTypes";


export function pageListFetchAction() {
    return async dispatch => {
        try {
            const response = await api.pages.listFetch()
            dispatch(createAction(PAGE_LIST_FETCH_FINISH, response.data))
        } catch (error) {
            console.log('Page list fetch error', error)
        }
    }
}

export function pageFetchAction(slug) {
    return async dispatch => {
        try {
            const response = await api.pages.singleFetch(slug)
            dispatch(createAction(PAGE_FETCH_FINISH, response.data))
        } catch (error) {
            console.log('Page fetch error', error)
        }
    }
}