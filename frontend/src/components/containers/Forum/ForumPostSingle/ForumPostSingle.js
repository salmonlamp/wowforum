import React, {useEffect} from 'react'
import {useSelector} from "react-redux"
import forumServices from "../../../../redux/forum/forumServices"
import {CommonLoading} from 'react-loadingg'
import ForumPostCommentList from "../ForumPostCommentList/ForumPostCommentList"
import ForumPostCommentForm from "../../../forms/ForumPostCommentForm/ForumPostCommentForm"
import ForumPostTitleCard from "../ForumPostTitleCard/ForumPostTitleCard"
import ForumPostBody from "../ForumPostBody/ForumPostBody"

const ForumPostSingle = ({postPk}) => {
    const post = useSelector(state => state.forum.activePost)
    const isProsesCommentAdd = useSelector(state => state.forum.isProsesCommentAdd)
    const isLogged = useSelector(state => state.auth.isLogged)

    useEffect(() => forumServices.postSingleLoading(postPk), [])

    return (
        post
            ? <>
                <ForumPostTitleCard post={post} isLogged={isLogged}/>
                <ForumPostBody body={post.text}/>

                {/*{*/}
                {/*    isLogged*/}
                {/*        ? <ForumPostCommentForm*/}
                {/*            proses={isProsesCommentAdd}*/}
                {/*            postPk={post.id}*/}
                {/*        />*/}
                {/*        : 'Login to add a comment '*/}
                {/*}*/}
                
                {/*<ForumPostCommentList*/}
                {/*    postPk={post.id}*/}
                {/*    isLogged={isLogged}*/}
                {/*/>*/}
            </>
            : <CommonLoading/>
    )
}

export default ForumPostSingle