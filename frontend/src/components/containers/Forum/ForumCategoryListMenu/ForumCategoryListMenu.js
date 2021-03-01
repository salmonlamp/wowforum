import React, {useEffect} from 'react'
import classes from './ForumCategoryListMenu.scss'
import {Link} from "react-router-dom"
import {useSelector} from "react-redux";
import forumServices from "../../../../redux/forum/forumServices";

const ForumCategoryListMenu = ({sectionPK}) => {
    const categoryList = useSelector(state => state.forum.categoryList)
    const activeCategoryPk = useSelector(state => state.forum.activeCategoryPk)

    useEffect(() => forumServices.categoryListFetch(sectionPK), [sectionPK,])


    const items = categoryList
        ? Object.keys(categoryList)
            .map((key, index) => {
                    const item = categoryList[key]
                    const cls = [classes.item]
                    if (item['id'] === activeCategoryPk) cls.push(classes.active)
                    return (
                        <li key={index} className={cls.join(' ')}>
                            <button
                                onClick={() => forumServices.categorySetActive(item['id'])}
                                className={classes.link}
                            >
                                {item.name}
                            </button>
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