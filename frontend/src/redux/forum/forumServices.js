import {store, dispatch} from '../store'
import {
    categoryListFetchAction,
    forumPostCommentAddAction,
    forumPostCommentLikeAction,
    forumPostLikeAction,
    forumPostSingleLoading,
    sectionListFetchAction,
    subCategoryListFetch,
    categorySetActiveAction, forumSubCategoryPostListFetchAction,
} from "./forumActions"

export default {
    sectionListFetch: () => dispatch(sectionListFetchAction()),
    categoryListFetch: sectionPk => dispatch(categoryListFetchAction(sectionPk)),
    categorySetActive: categoryPk => dispatch(categorySetActiveAction(categoryPk)),
    subCategoryListFetch: categoryPk => dispatch(subCategoryListFetch(categoryPk)),
    postLike: postPk => dispatch(forumPostLikeAction(postPk)),
    subCategoryPostListFetch: (subCategoryPk) => {
        const page = store.getState().forum.postListPage
        dispatch(forumSubCategoryPostListFetchAction(subCategoryPk, page, 9))
    },
    postSingleLoading: postPk => dispatch(forumPostSingleLoading(postPk)),
    commentLike: commentPk => dispatch(forumPostCommentLikeAction(commentPk)),
    commentAdd: (postPk, text, parentPk = null) => dispatch(forumPostCommentAddAction(postPk, text, parentPk))
}