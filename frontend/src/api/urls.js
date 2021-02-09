export const BASE_API_URL = 'http://127.0.0.1:8000/api/'
export const WEBSOCKET_URL = 'ws://127.0.0.1:8000/ws/chat/'

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
export const FORUM_CATEGORY_LIST_API_URL = 'forum/categories'
export const FORUM_CATEGORY_POST_LIST_API_URL = categoryPk => `forum/categories/${categoryPk}`
export const FORUM_POST_LIKE_API_URL = postPk => `forum/posts/${postPk}/like`
export const FORUM_POST_SINGLE_API_UR = postPk => `forum/posts/${postPk}`
export const FORUM_POST_COMMENT_API_UR = postPk => `forum/posts/${postPk}/comments`
export const FORUM_POST_COMMENT_LIKE_API_UR = commentPk => `forum/comments/${commentPk}/like`
/** END FORUM **/

export const CHAT_MSG_LIST_API_URL = 'chat/list/'
