import React from 'react';
import classes from './Textarea.module.scss';

const Textarea = ({placeholder = '', onChange, rows=8, value}) =>
    <textarea
        onChange={onChange}
        className={classes.main}
        placeholder={placeholder}
        rows={rows}
        value={value}
    />

export default Textarea;