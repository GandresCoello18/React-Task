import React from 'react'
import { Comment, Avatar } from 'antd'

export const CommentPost = ({ name, body, email }) => {
    return (
        <Comment
            author={name}
            avatar={
                <Avatar
                    src="https://images.pexels.com/photos/3994569/pexels-photo-3994569.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="Han Solo"
                />
            }
            content={
                <p>
                    {body} - <strong>{email}</strong>
                </p>
            }
            />
    )
}