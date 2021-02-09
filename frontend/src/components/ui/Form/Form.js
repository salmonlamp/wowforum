import React from 'react'
import classes from './Form.module.scss'

const Form = ({children, footer, onSubmit, className}) => {
    const cls = [classes.form, className]
    return (
        <form className={cls.join(' ')} onSubmit={onSubmit}>
            {children}
            <div className={classes.footer}>
                {footer}
            </div>
        </form>
    )
}

export default Form