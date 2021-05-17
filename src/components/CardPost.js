import React from 'react'
import { Card } from 'antd';

export const CardPost = ({ title, body }) => {
    return (
        <Card title={title} extra={<a href="#">Mas</a>} style={{ width: 300 }}>
            <p>{body}</p>
        </Card>
    )
}