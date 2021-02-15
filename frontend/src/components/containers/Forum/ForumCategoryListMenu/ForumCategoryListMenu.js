import React, {useEffect} from 'react'
import classes from './ForumCategoryListMenu.scss'
import {Link} from "react-router-dom"
import {useSelector} from "react-redux";
import forumServices from "../../../../redux/forum/forumServices";

const ForumCategoryListMenu = ({sectionPK}) => {
    const categoryList = useSelector(state => state.forum.categoryList)

    useEffect(
        () => forumServices.categoryListLoading(sectionPK),
        [sectionPK,]
    )
    
    const items = categoryList
        ? Object.keys(categoryList)
            .map((key, index) => {
                    const item = categoryList[key]
                    return (
                        <li key={index} className={classes.item}>
                            <Link to={'#'} className={classes.link}>
                                {item.name}
                            </Link>
                        </li>
                    )
                }
            )
        : null

    return (
        <ul className={classes.list}>
            {items}
        </ul>
    )
}

export default ForumCategoryListMenu