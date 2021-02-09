import React, {useState} from 'react'
import classes from './ChatForm.scss'
import IconButton from "../../ui/IconButton/IconButton"

const ChatForm = ({websocket, msgAreaClass}) => {
    const [text, setText] = useState('')

    function onSubmit(e) {
        e.preventDefault()
        websocket.send(JSON.stringify({
            'message': text
        }));
        setText('')
    }

    return (
        <form onSubmit={onSubmit} className={classes.form}>
            <input
                type={'text'}
                className={classes.field}
                name={'comment'}
                value={text}
                onChange={e => setText(e.target.value)}
                onKeyDown={e => {if (e.keyCode === 13) onSubmit(e)}}
            />
            <IconButton
                type={'brightBlue'}
                iconName={'icon-send-arrow'}
            />
        </form>
    )
}

export default ChatForm