import {dispatch, store} from '../store'
import {
    memeCommentAddAction,
    memeCommentLikeAction,
    memeCommentListLoadingAction,
    memeLikeAction,
    memeListLoadingAction,
    memePopupCloseAction,
    memePopupOpenAction
} from "./memeActions"

export default {
    listLoading: () => {
        const page = store.getState().memes.page
        dispatch(memeListLoadingAction(page, 9))
    },
    like: memePk => dispatch(memeLikeAction(memePk)),

    popupOpen: memePk => dispatch(memePopupOpenAction(memePk)),
    popupClose: () => dispatch(memePopupCloseAction()),

    commentListLoading: memePk => dispatch(memeCommentListLoadingAction(memePk)),
    commentAdd: (memePk, text) => dispatch(memeCommentAddAction(memePk, text)),
    commentLike: commentPk => dispatch(memeCommentLikeAction(commentPk)),
}