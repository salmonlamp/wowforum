import React from 'react'
import classes from './Content.module.scss'
import Breadcrumbs from "../../ui/Breadcrumbs/Breadcrumbs"

const Content = ({children}) => {
    return (
        <div className={classes.box}>

            <div className={classes.inner}>

                <div className={classes.breadcrumbs}>
                    <Breadcrumbs/>
                </div>

                {children}

            </div>

        </div>
    )
}

export default Content