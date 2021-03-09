import React, {useEffect} from 'react'
import classes from './ForumSubCategoryList.scss'
import {useSelector} from "react-redux";
import forumServices from "../../../../redux/forum/forumServices";
import {Link} from "react-router-dom";
import ForumSubCategoryPlate from "../ForumSubCategoryPlate/ForumSubCategoryPlate";

const ForumSubCategoryList = () => {
    const categoryPk = useSelector(state => state.forum.activeCategoryPk)
    const list = useSelector(state => state.forum.subCategoryList)

    useEffect(() => forumServices.subCategoryListFetch(categoryPk), [categoryPk,])

    const items = list
        ? Object.keys(list)
            .map((key, index) => {
                    const item = list[key]
                    return (
                        <ForumSubCategoryPlate key={index} subCategory={item}/>
                    )
                }
            )
        : 'Yay! You have seen it all'

    return (
        <div>
            {items}
        </div>
    )
}

export default ForumSubCategoryList