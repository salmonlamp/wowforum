import React, {useEffect} from 'react'
import {useSelector} from "react-redux"
import forumServices from "../../../../redux/forum/forumServices"
import ForumPostCard from "../ForumPostCard/ForumPostCard"
import {CommonLoading} from 'react-loadingg'
import ForumPostCommentList from "../ForumPostCommentList/ForumPostCommentList"
import ForumPostCommentForm from "../../../forms/ForumPostCommentForm/ForumPostCommentForm"

const ForumPostSingle = ({postPk}) => {
    const post = useSelector(state => state.forum.activePost)
    const isProsesCommentAdd = useSelector(state => state.forum.isProsesCommentAdd)
    const isLogged = useSelector(state => state.auth.isLogged)

    useEffect(
        () => forumServices.postSingleLoading(postPk),
        []
    )

    return (
        post
            ? <>
                <ForumPostCard post={post} isLogged={isLogged}/>
                {
                    isLogged
                        ? <ForumPostCommentForm
                            proses={isProsesCommentAdd}
                            postPk={post.id}
                        />
                        : 'Login to add a comment '
                }

                <ForumPostCommentList
                    postPk={post.id}
                    isLogged={isLogged}
                />
            </>
            : <CommonLoading/>
    )
}

export default ForumPostSingle