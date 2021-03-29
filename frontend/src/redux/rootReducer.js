import {combineReducers} from "redux"
import memeReducer from "./meme/memeReducer";
import userReducer from "./user/userReducer";
import forumReducer from "./forum/forumReducer";
import chatReducer from "./chat/chatReducer";
import tuningReducer from "./tuning/tuningReducer";
import pagesReducer from "./pages/pagesReducer";

const rootReducer = combineReducers({
    auth: userReducer,
    memes: memeReducer,
    forum: forumReducer,
    chat: chatReducer,
    tuning: tuningReducer,
    pages: pagesReducer,
})

export default rootReducer