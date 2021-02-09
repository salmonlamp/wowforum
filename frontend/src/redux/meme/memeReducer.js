import {
    MEME_LIST_LOADING_START,
    MEME_LIST_LOADING_FINISH,
    MEME_LIKE,
    MEME_POPUP_OPEN,
    MEME_POPUP_CLOSE,
    MEME_COMMENT_ADD,
    MEME_COMMENT_LIST_LOADING_START,
    MEME_COMMENT_LIST_LOADING_FINISH,
    MEME_COMMENT_LIKE,
    MEME_COMMENT_ADD_START,
    MEME_COMMENT_ADD_FINISH
} from "../actionTypes";


const initialState = {
    isLoading: false,
    list: [],
    hasNext: false,
    page: 1,

    popupMemePk: null,
    popupCommentList: null,
    isProsesCommentAdd: false,
}

function memeListLoadingFinish(state, memeData) {
    const list = state.list.concat(memeData.results)
    const hasNext = !!memeData.next
    const page = state.page + 1

    return {...state, list, hasNext, page, isLoading: false}
}

function likeElement(list, pk) {
    return list.map(item => {
        if (item.id === pk) {
            if (item['liked']) {
                item['like_count']--
            } else {
                item['like_count']++
            }
            item['liked'] = !item['liked']
        }
        return item
    })
}

function memeLike(state, memePk) {
    const list = likeElement(state.list, memePk)
    return {...state, list}
}

function addCommentFinish(state, comment) {
    const popupCommentList = state.popupCommentList
    popupCommentList.push(comment)
    return {...state, popupCommentList, isProsesCommentAdd: false}
}

function commentLike(state, commentPk) {
    const popupCommentList = likeElement(state.popupCommentList, commentPk)
    return {...state, popupCommentList}
}

export default function memeReducer(state = initialState, action) {
    switch (action.type) {

        case MEME_LIST_LOADING_START:
            return {...state, isLoading: true, hasNext: false}

        case MEME_LIST_LOADING_FINISH:
            return memeListLoadingFinish(state, action.payload)

        case MEME_LIKE:
            return memeLike(state, action.payload)

        case MEME_POPUP_OPEN:
            return {...state, popupMemePk: action.payload}

        case MEME_POPUP_CLOSE:
            return {...state, popupMemePk: null}

        case MEME_COMMENT_LIST_LOADING_START:
            return {...state, isLoadingCommentList: true}

        case MEME_COMMENT_LIST_LOADING_FINISH:
            return {...state, popupCommentList: action.payload}

        case MEME_COMMENT_ADD_START:
            return {...state, isProsesCommentAdd: true}

        case MEME_COMMENT_ADD_FINISH:
            return addCommentFinish(state, action.payload)

        case MEME_COMMENT_LIKE:
            return commentLike(state, action.payload)

        default:
            return state

    }
}