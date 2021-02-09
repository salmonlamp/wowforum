import React from 'react'
import classes from './Social.module.scss'
import Icons from "../Icons/Icons";
import {Link} from "react-router-dom";

const Social = ({size = 14}) =>
    <ul className={classes.list}>
        <li className={classes.item}>
            <Icons
                className={classes.icon}
                name={'icon-twitter'}
                size={size}
            />
            <Link to={"#"} className={classes.link}/>
        </li>
        <li className={classes.item}>
            <Icons
                className={classes.icon}
                name={'icon-facebook'}
                size={size}
            />
            <Link to={"#"} className={classes.link}/>
        </li>
        <li className={classes.item}>
            <Icons
                className={classes.icon}
                name={'icon-instagram'}
                size={size}
            />
            <Link to={"#"} className={classes.link}/>
        </li>
    </ul>

export default Social