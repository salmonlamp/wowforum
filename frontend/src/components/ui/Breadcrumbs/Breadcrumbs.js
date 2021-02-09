import React from 'react'
import classes from './Breadcrumbs.module.scss'
import {Link} from "react-router-dom"

const Breadcrumbs = () =>
    <ul className={classes.list}>
        <li className={classes.item}>
            <Link to={"#"} className={classes.link}>Home/</Link>
        </li>
        <li className={classes.item}>
            <Link to={"#"} className={classes.link}>Feed/</Link>
        </li>
        <li className={classes.item}>
            <span className={classes.link}>Post</span>
        </li>
    </ul>

export default Breadcrumbs