import React from 'react'
import { Comment, Avatar } from 'antd'

export const CommentPost = () => {
    return (
        <Comment
            author='Han Solo'
            avatar={
                <Avatar
                    src="https://images.pexels.com/photos/3994569/pexels-photo-3994569.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="Han Solo"
                />
            }
            content={
                <p>
                We supply a series of design principles, practical patterns and high quality design
                resources (Sketch and Axure), to help people create their product prototypes beautifully
                and efficiently.
                </p>
            }
            />
    )
}