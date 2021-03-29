import {dispatch} from '../store'
import {pageFetchAction, pageListFetchAction} from "./pagesActions";

export default {

    listFetch: () => dispatch(pageListFetchAction()),
    fetch: slug => dispatch(pageFetchAction(slug)),

}