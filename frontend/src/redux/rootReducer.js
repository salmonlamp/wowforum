import { combineReducers } from "redux"
import memeReducer from "./meme/memeReducer";
import userReducer from "./user/userReducer";
import forumReducer from "./forum/forumReducer";
import chatReducer from "./chat/chatReducer";

const rootReducer = combineReducers({
    auth: userReducer,
    memes: memeReducer,
    forum: forumReducer,
    chat: chatReducer,
})

export default rootReducer