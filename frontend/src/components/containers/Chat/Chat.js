import React, {useEffect} from 'react'
import classes from './Chat.module.scss'
import Container from "../../wrappers/Container/Container"
import ChatForm from "../../forms/ChatForm/ChatForm"
import chatServices from "../../../redux/chat/chatServices"
import {useSelector} from "react-redux"
import {CommonLoading} from "react-loadingg"


const Chat = () => {
    const ws = chatServices.getWebsocket()

    const isLogged = useSelector(state => state.auth.isLogged)
    const list = useSelector(state => state.chat.list)
    const isConnected = useSelector(state => state.chat.connected)
    const isLoading = useSelector(state => state.chat.isLoading)

    useEffect(
        () => {
            chatServices.msgListLoading()

            ws.onopen = () => {
                chatServices.connectedActivate()
            }

            ws.onmessage = evt => {
                chatServices.msgNew(JSON.parse(evt.data).message)
            }

            ws.onclose = () => {
                chatServices.connectedDeactivate()
            }
        },
        []
    )

    useEffect(
        () => {
            const msgArea = document.querySelector(`.${classes.msgArea}`)
            if (msgArea) msgArea.scrollTop = msgArea.scrollHeight
        },
        [list]
    )


    const items = list
        ? Object.keys(list)
            .map((key, index) => {
                    const item = list[key]
                    return (
                        <li key={index} className={classes.msgItem}>
                            <h3 className={classes.msgAuthor}>{item.author.username}:</h3>
                            <p className={classes.msgText}>{item.text}</p>
                        </li>
                    )
                }
            )
        : <p className={classes.msgText}>No messages</p>

    return (
        <aside className={classes.container}>
            <Container>
                <div className={classes.content}>

                    <div className={classes.header}>
                        <h2 className={classes.title}>Chat</h2>
                    </div>

                    <div className={classes.body}>
                        {
                            !isLoading && isConnected
                                ? <>
                                    <div className={classes.msgArea}>
                                        <ul className={classes.msgList}>
                                            {items}
                                        </ul>
                                    </div>
                                    {
                                        isLogged
                                            ? <ChatForm websocket={ws}/>
                                            : null
                                    }

                                </>
                                : <CommonLoading/>
                        }
                        {
                            isLogged
                                ? null
                                : <p className={classes.msgText}>Login to join to chat</p>
                        }

                    </div>

                </div>
            </Container>
        </aside>
    )
}

export default Chat