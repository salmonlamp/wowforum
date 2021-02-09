import React from 'react'
import classes from './Logo.module.scss'
import {Link} from "react-router-dom"

const Logo = () => {
    return (
        <div className={classes.container}>
            <span className={classes.label}>
              LOGO
            </span>
            <Link to={'#'} className={classes.link}/>
        </div>
    )
}

export default Logo