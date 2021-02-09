import MemesAPI from "./services/memesApi"
import UsersAPI from "./services/usersApi"
import ForumAPI from "./services/forumApi"
import ChatAPI from "./services/chatApi";

const api = {
    users: UsersAPI,
    memes: MemesAPI,
    forum: ForumAPI,
    chat: ChatAPI,
}

export default api