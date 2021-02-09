import React from 'react';
import classes from './Input.module.scss'

const Input = ({labelText, type, placeholder = '', inputRef, name, error}) => {
    const inputClasses = [classes.input]

    if (error) {
        inputClasses.push(classes.error)
    }

    return (
        <div className={classes.container}>
            <label className={classes.label}>
                {labelText}
            </label>
            <input
                className={inputClasses.join(' ')}
                type={type}
                placeholder={placeholder}
                ref={inputRef}
                name={name}
            />
            {
                error
                    ? <p className={classes.errorMsg}>{error.message}</p>
                    : null
            }
        </div>
    );
};

export default Input;