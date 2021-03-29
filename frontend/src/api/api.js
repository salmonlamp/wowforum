import MemesAPI from "./services/memesApi"
import UsersAPI from "./services/usersApi"
import ForumAPI from "./services/forumApi"
import ChatAPI from "./services/chatApi";
import TuningApi from "./services/tuningApi";
import PagesApi from "./services/pagesApi";

const api = {
    users: UsersAPI,
    memes: MemesAPI,
    forum: ForumAPI,
    chat: ChatAPI,
    tuning: TuningApi,
    pages: PagesApi,
}

export default api