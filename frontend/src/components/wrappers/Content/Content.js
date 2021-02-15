import React from 'react'
import classes from './Content.module.scss'
import Breadcrumbs from "../../ui/Breadcrumbs/Breadcrumbs"

const Content = ({children, borderTopRadius = true}) => {
    const cls = [classes.box]
    if (!borderTopRadius) cls.push(classes.borderTop0)

    return (
        <div className={cls.join(' ')}>

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