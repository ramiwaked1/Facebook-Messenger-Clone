import React, { forwardRef } from 'react'
import { Card, CardContent, Typography } from '@material-ui/core';
import './Message.css';

const Message = forwardRef(({ message, username }, ref) => {
    const isUser = username === message.username;

    return (
        <div ref={ref} className={`message ${isUser && 'message__user'}`} >
            <Card className={isUser ? "message__userCard" : "message__guestCard"}>
                <CardContent className="message__custom">
                    <Typography
                        color="white"
                        variant="h5"
                        component="h2"
                    >
                        <strong className="username__strong">{!isUser && `${message.username || 'Unknown User'}: `}</strong> {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})

export default Message
