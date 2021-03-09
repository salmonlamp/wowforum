import React from 'react'
import classes from './ForumSubCategoryPlate.module.scss'
import {Link} from "react-router-dom";

const ForumSubCategoryPlate = ({subCategory}) => {
    return (
        <div className={classes.container}>
            <div className={classes.column}>
                <h3 className={classes.name}>
                    <Link className={classes.link} to={`/subcategories/${subCategory.id}`}>
                        {subCategory.name}
                    </Link>
                </h3>
            </div>
            <div className={classes.column}>
                <div className={classes.info}>
                    <p className={classes.infoData}>12.867</p>
                    <p className={classes.infoLabel}>posts</p>
                </div>
            </div>
        </div>
)
}

export default ForumSubCategoryPlate