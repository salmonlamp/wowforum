import React, {useState} from 'react'
import Textarea from "../../ui/Textarea/Textarea"
import Form from "../../ui/Form/Form"
import Button from "../../ui/Button/Button"
import classes from './ForumPostCommentForm.module.scss'
import forumServices from "../../../redux/forum/forumServices";

const ForumPostCommentForm = ({postPk, proses}) => {
    const [comment, setComment] = useState('')

    function onSubmit(e) {
        e.preventDefault()
        submit()
    }

    function submit() {
        if (comment.length < 3) return
        forumServices.commentAdd(postPk, comment)
        setComment('')
    }
    return (
        <Form
            onSubmit={onSubmit}
            className={classes.container}
            footer={
                <Button decor={'primary'} type={'submit'}>
                    {proses ? 'Sending...' : 'Add Comment'}
                </Button>
            }
        >
            <Textarea
                onChange={e => setComment(e.target.value)}
                value={comment}
                placeholder={'Type'}
            />
        </Form>
    )
}

export default ForumPostCommentForm