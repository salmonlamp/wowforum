import React, {useEffect} from 'react'
import classes from './ForumHomeFeed.module.scss'
import {useSelector} from "react-redux";
import forumServices from "../../../../redux/forum/forumServices";
import ForumPostPreview from "../ForumPostPreview/ForumPostPreview";
import ForumPostPlate from "../ForumPostPlate/ForumPostPlate";

const ForumHomeFeed = () => {
    const isLogged = useSelector(state => state.auth.isLogged)
    const hasNext = useSelector(state => state.forum.postListHasNext)
    const list = useSelector(state => state.forum.postList)

    useEffect(forumServices.postListOnHome, [])

    const items = list
        ? Object.keys(list)
            .map((key, index) => {
                    if (index < 5) return

                    const item = list[key]
                    return (
                        <ForumPostPlate post={item} key={index}/>
                    )
                }
            )
        : <p style={{textAlign: 'center'}}>
            <b>Yay! You have seen it all</b>
        </p>

    return (<>
            <div className={classes.row}>
                {list[0] ? <ForumPostPreview
                    post={list[0]}
                    className={classes.item + ' ' + classes.big}
                    isLogged={isLogged}
                    showExcerpt={true}
                /> : null}
                <div>
                    {list[1] ? <ForumPostPreview
                        post={list[1]}
                        className={classes.item + ' ' + classes.small}
                        isLogged={isLogged}
                    /> : null}
                    {list[2] ? <ForumPostPreview
                        post={list[2]}
                        className={classes.item + ' ' + classes.small}
                        isLogged={isLogged}
                    /> : null}
                </div>
            </div>
            <div className={classes.row}>
                {list[3] ? <ForumPostPreview
                    post={list[3]}
                    className={classes.item + ' ' + classes.small}
                    isLogged={isLogged}
                /> : null}
                {list[4] ? <ForumPostPreview
                    post={list[4]}
                    className={classes.item + ' ' + classes.small}
                    isLogged={isLogged}
                /> : null}
                {list[5] ? <ForumPostPreview
                    post={list[5]}
                    className={classes.item + ' ' + classes.small}
                    isLogged={isLogged}
                /> : null}
            </div>
            {items}
        </>
    )
}

export default ForumHomeFeed