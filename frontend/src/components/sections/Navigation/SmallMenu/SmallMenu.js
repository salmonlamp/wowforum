import React from 'react'
import {Link} from "react-router-dom"
import classes from './SmallMenu.module.scss'

const SmallMenu = () =>
    <ul className={classes.container}>
        <li className={classes.item}>
            <Link to={"#"} className={classes.link}>SignIn</Link>
        </li>
        <li className={classes.item}>
            <Link to={"#"} className={classes.link}>SignIn</Link>
        </li>
        <li className={classes.item}>
            <Link to={"#"} className={classes.link}>SignIn</Link>
        </li>
        <li className={classes.item}>
            <Link to={"#"} className={classes.link}>SignIn</Link>
        </li>
        <li className={classes.item}>
            <Link to={"#"} className={classes.link}>SignIn</Link>
        </li>
        <li className={classes.item}>
            <Link to={"#"} className={classes.link}>SignIn</Link>
        </li>
        <li className={classes.item}>
            <Link to={"#"} className={classes.link}>SignIn</Link>
        </li>
        <li className={classes.item}>
            <Link to={"#"} className={classes.link}>SignIn</Link>
        </li>
        <li className={classes.item}>
            <Link to={"#"} className={classes.link}>SignIn</Link>
        </li>
        <li className={classes.item}>
            <Link to={"#"} className={classes.link}>SignIn</Link>
        </li>
    </ul>

export default SmallMenu