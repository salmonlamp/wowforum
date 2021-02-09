import React, {useState} from 'react'
import classes from './MemeCommentForm.module.scss'
import IconButton from "../../ui/IconButton/IconButton"
import memeServices from "../../../redux/meme/memeServices"

const MemeCommentForm = ({memePk}) => {
    const [comment, setComment] = useState('')

    function onSubmit(e) {
        e.preventDefault()
        submit()
    }

    function submit() {
        if (comment.length < 3) return
        memeServices.commentAdd(memePk, comment)
        setComment('')
    }

    return (
        <form onSubmit={onSubmit} className={classes.form}>
            <textarea
                className={classes.field}
                name={'comment'}
                value={comment}
                onChange={e => setComment(e.target.value)}
                onKeyDown={e => {if (e.keyCode === 13) submit()}}
            />
            <IconButton
                type={'brightBlue'}
                iconName={'icon-send-arrow'}
                onClick={submit}
            />
        </form>
    )
}

export default MemeCommentForm