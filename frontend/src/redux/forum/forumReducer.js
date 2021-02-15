import {
    FORUM_ALL_POST_LIST_LOADING_FINISH,
    FORUM_CATEGORY_LIST_LOADING_FINISH,
    FORUM_CATEGORY_LIST_LOADING_START,
    FORUM_CATEGORY_POST_LIST_LOADING_FINISH,
    FORUM_CATEGORY_POST_LIST_LOADING_START,
    FORUM_POST_COMMENT_ADD_FINISH,
    FORUM_POST_COMMENT_ADD_START,
    FORUM_POST_COMMENT_LIKE,
    FORUM_POST_LIKE,
    FORUM_POST_SINGLE_CLOSE,
    FORUM_POST_SINGLE_LOADING_FINISH,
    FORUM_POST_SINGLE_LOADING_START,
    FORUM_SECTION_LIST_LOADING_FINISH,
    FORUM_SECTION_LIST_LOADING_START, FORUM_SUB_CATEGORY_LIST_LOADING_FINISH,
    FORUM_SUB_CATEGORY_LIST_LOADING_START

} from "../actionTypes";

const initialState = {
    sectionList: [], // all section list
    activeSectionPk: null, // pk of active section
    isSectionListLoading: false,

    categoryList: [], // category list of active section
    activeCategoryPk: null, // pk of active category
    isCategoryListLoading: false,

    subcategoryList: [], // subcategory list of active category
    activeSubcategoryPk: null, // pk of active subcategory
    isSubcategoryListLoading: false,

    postList: [], // post list of active subcategory
    postListHasNext: true,
    postListPage: 1,

    activePost: null,
    activePostCommentList: [],
    isProsesCommentAdd: false,
}

function postListLoadingFinish(state, postData) {
    const postList = state.postList.concat(postData.results)
    const postListHasNext = !!postData.next
    const postListPage = state.postListPage + 1

    return {...state, postList, postListHasNext, postListPage}
}

function likeElement(element) {
    if (element['liked']) {
        element['like_count']--
    } else {
        element['like_count']++
    }
    element['liked'] = !element['liked']
    return element
}

function likeElementInList(list, pk) {
    return list.map(item => {
        if (item.id === pk) {
            item = likeElement(item)
        }
        return item
    })
}

function postLike(state, postPk) {
    let activePost = state.activePost
    if (activePost && activePost.id === postPk) {
        activePost = likeElement({...activePost})
    }
    const postList = likeElementInList(state.postList, postPk)
    return {...state, postList, activePost}
}

function commentLike(state, commentPk) {
    const activePostCommentList = likeElementInList(state.activePostCommentList, commentPk)
    return {...state, activePostCommentList}
}

function postSingleLoadingFinish(state, postData) {
    const activePostCommentList = postData.comments
    delete postData['comments']

    return {...state, activePost: postData, activePostCommentList}
}

function commentAddFinish(state, comment) {
    const activePostCommentList = [...state.activePostCommentList]
    activePostCommentList.push(comment)
    return {...state, activePostCommentList, isProsesCommentAdd: false}
}

export default function forumReducer(state = initialState, action) {
    switch (action.type) {

        case FORUM_SECTION_LIST_LOADING_START:
            return {...state, isSectionListLoading: true}

        case FORUM_SECTION_LIST_LOADING_FINISH:
            return {...state, isSectionListLoading: false, sectionList: action.payload}

        case FORUM_CATEGORY_LIST_LOADING_START:
            return {...state, categoryList: [], activeSectionPk: action.payload, isCategoryLoading: true}

        case FORUM_CATEGORY_LIST_LOADING_FINISH:
            return {...state, categoryList: action.payload, isCategoryLoading: false}

        case FORUM_SUB_CATEGORY_LIST_LOADING_START:
            return {...state, activeCategoryPk: action.payload, isSubcategoryListLoading: true}

        case FORUM_SUB_CATEGORY_LIST_LOADING_FINISH:
            return {...state, isSubcategoryListLoading: false, subcategoryList: action.payload}

        case FORUM_CATEGORY_POST_LIST_LOADING_START:
            return {...state, postList: [], postListHasNext: false}

        case FORUM_CATEGORY_POST_LIST_LOADING_FINISH:
            return postListLoadingFinish(state, action.payload)

        case FORUM_POST_LIKE:
            return postLike(state, action.payload)

        case FORUM_POST_SINGLE_LOADING_START:
            return {...state}

        case FORUM_POST_SINGLE_LOADING_FINISH:
            return postSingleLoadingFinish(state, action.payload)

        case FORUM_POST_COMMENT_ADD_START:
            return {...state, isProsesCommentAdd: true}

        case FORUM_POST_COMMENT_ADD_FINISH:
            return commentAddFinish(state, action.payload)

        case FORUM_POST_COMMENT_LIKE:
            return commentLike(state, action.payload)

        case FORUM_ALL_POST_LIST_LOADING_FINISH:
            return {...state, postList: action.payload}

        default:
            return state

    }
}