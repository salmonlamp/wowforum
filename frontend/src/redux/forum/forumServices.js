import {store, dispatch} from '../store'
import {
    forumCategoryPostListLoadingAction,
    forumPostCommentAddAction,
    forumPostCommentLikeAction,
    forumPostLikeAction,
    forumPostSingleLoading
} from "./forumActions"

export default {
    postLike: postPk => dispatch(forumPostLikeAction(postPk)),
    categoryPostListLoading: (categoryPk) => {
        const page = store.getState().forum.postListPage
        dispatch(forumCategoryPostListLoadingAction(categoryPk, page, 9))
    },
    postSingleLoading: postPk => dispatch(forumPostSingleLoading(postPk)),

    commentLike: commentPk => dispatch(forumPostCommentLikeAction(commentPk)),
    commentAdd: (postPk, text, parentPk = null) => dispatch(forumPostCommentAddAction(postPk, text, parentPk))
}