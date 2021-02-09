import React from 'react'
import classes from './Search.module.scss'
import Icons from "../Icons/Icons";

const Search = () =>
    <form className={classes.container}>
        <button className={classes.button}>
            <Icons
                className={classes.icon}
                name={'icon-search'}
                size={16}
            />
        </button>
        <input type="text" className={classes.field} placeholder="Search"/>
    </form>

export default Search