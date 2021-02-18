import React, {useEffect} from 'react'
import {useSelector} from "react-redux"
import forumServices from "../../../../redux/forum/forumServices"
import ForumPostCard from "../ForumPostCard/ForumPostCard"
import InfiniteScroll from "react-infinite-scroll-component"
import {CommonLoading} from "react-loadingg"

const ForumPostList = ({categoryPk}) => {
    const isLogged = useSelector(state => state.auth.isLogged)
    const hasNext = useSelector(state => state.forum.postListHasNext)
    const list = useSelector(state => state.forum.postList)

    useEffect(
        () => forumServices.allPostList(),
        []
    )

    const items = list
        ? Object.keys(list)
            .map((key, index) => {
                    const item = list[key]
                    return (
                        <ForumPostCard
                            post={item}
                            key={index}
                            isLogged={isLogged}
                            isLink={true}
                        />
                    )
                }
            )
        : null

    return (
        // <InfiniteScroll
        //     dataLength={items.length} //This is important field to render the next data
        //     next={() => forumServices.categoryPostListLoading(categoryPk)}
        //     hasMore={hasNext}
        //     loader={<CommonLoading/>}
        //     endMessage={
        //         <p style={{textAlign: 'center'}}>
        //             <b>Yay! You have seen it all</b>
        //         </p>
        //     }
        // >
        <div>
            {items}
        </div>
        // </InfiniteScroll>
    )
}

export default ForumPostList