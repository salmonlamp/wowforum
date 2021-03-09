import React from 'react'
import classes from './Content.module.scss'
import Breadcrumbs from "../../ui/Breadcrumbs/Breadcrumbs"

const Content = (
    {
        children,
        sideBar = false,
        borderTopRadius = true,
        breadcrumbs = true,
        innerPadding = true,
    }
) => {
    const cls = [classes.box]
    if (!borderTopRadius) cls.push(classes.borderTop0)
    if (sideBar) cls.push(classes.withSidebar)

    const innerCls = []
    if (innerPadding) innerCls.push(classes.inner)

    return (
        <div className={cls.join(' ')}>


            <div>
                {
                    breadcrumbs
                        ? <div className={classes.breadcrumbs}>
                            <Breadcrumbs/>
                        </div>
                        : null
                }

                <div className={innerCls.join(' ')}>
                    {children}
                </div>

            </div>


            {
                sideBar
                    ? <div className={classes.sidebar}/>
                    : null
            }

        </div>
    )
}

export default Content