export const BASE_API_URL = 'http://127.0.0.1:8000/api/'
export const WEBSOCKET_URL = 'ws://127.0.0.1:8000/ws/chat/'

// export const BASE_API_URL = 'http://wow.salmontest.ru/api/'
// export const WEBSOCKET_URL = 'ws://wow.salmontest.ru/ws/chat/'

/** ACCOUNT **/
export const TOKEN_REFRESH_API_URL = 'account/token/refresh/'
export const TOKEN_OBTAIN_API_URL = 'account/token/obtain/'
export const USER_SIGNUP_API_URL = 'account/signup/'
export const USER_ME_API_URL = 'account/me'
/** END ACCOUNT **/


/** MEMES **/
export const MEMES_LIST_API_URL = 'memes/'
export const MEME_COMMENT_API_URL = memePk => 'memes/' + memePk + '/comments'
export const MEME_LIKE_API_URL = memePk => 'memes/' + memePk + '/like'
export const MEME_COMMENT_LIKE_API_URL = commentPk => 'memes/comments/' + commentPk + '/like'
/** END MEMES **/


/** FORUM **/
export const FORUM_SECTION_LIST_API_URL = 'forum/sections'
export const FORUM_CATEGORY_LIST_API_URL = sectionPk => `forum/sections/${sectionPk}`
export const FORUM_CATEGORY_SUBCATEGORY_LIST_API_URL = categoryPk => `forum/categories/${categoryPk}`
export const FORUM_SUBCATEGORY_POST_LIST_API_URL = subCategoryPk => `forum/categories/${subCategoryPk}`
export const FORUM_POST_SINGLE_API_UR = postPk => `forum/posts/${postPk}`
export const FORUM_POST_LIKE_API_URL = postPk => `forum/posts/${postPk}/like`
export const FORUM_POST_COMMENT_LIST_API_URL = postPk => `forum/posts/${postPk}/comments`
export const FORUM_POST_COMMENT_LIKE_API_UR = commentPk => `forum/comments/${commentPk}/like`

// temp
export const FORUM_ALL_POST_LIST_API_URL = 'forum/posts'
/** END FORUM **/


/** CHAT **/
export const CHAT_MSG_LIST_API_URL = 'chat/list/'
/** END CHAT **/
